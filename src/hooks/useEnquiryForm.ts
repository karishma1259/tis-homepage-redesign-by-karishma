import { useState, type ChangeEvent, type FormEvent } from "react";

export interface EnquiryValues {
  name: string;
  countryCode: string;
  phone: string;
  grade: string;
  state: string;
  consent: boolean;
}

type Errors = Partial<Record<keyof EnquiryValues, string>>;

const initialValues: EnquiryValues = {
  name: "",
  countryCode: "+91",
  phone: "",
  grade: "",
  state: "",
  consent: false,
};

function validate(values: EnquiryValues): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Enter the student's or parent's full name.";
  if (!/^\d{7,12}$/.test(values.phone)) errors.phone = "Enter a valid mobile number, digits only.";
  if (!values.grade) errors.grade = "Select the class you are applying for.";
  if (!values.state) errors.state = "Select your state.";
  if (!values.consent) errors.consent = "Please agree so we can contact you about your enquiry.";
  return errors;
}

/** Controlled form state, validation and submit status for the enquiry form. */
export function useEnquiryForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    setValues((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    // Demo only: a real build would POST `values` to the admissions CRM here.
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
  };

  return { values, errors, submitted, handleChange, handleSubmit, reset };
}
