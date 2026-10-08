"use client";

import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { classes, countryCodes, states } from "@/data/enquiry";
import { useEnquiryForm } from "@/hooks/useEnquiryForm";

const field =
  "mt-2 min-h-12 w-full rounded-xl border border-line bg-bg px-4 text-base outline-none transition-colors focus:border-accent aria-[invalid=true]:border-red-500";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
      {message}
    </p>
  );
}

export default function EnquiryForm() {
  const { values, errors, submitted, handleChange, handleSubmit, reset } = useEnquiryForm();

  if (submitted) {
    return (
      <div role="status" className="flex h-full flex-col items-start justify-center gap-4 rounded-3xl border border-line bg-surface p-8">
        <CheckCircle2 aria-hidden="true" className="h-10 w-10 text-accent" />
        <h3 className="font-display text-2xl font-semibold">Thank you, {values.name.trim()}.</h3>
        <p className="text-muted">
          Our admissions team will call you on {values.countryCode} {values.phone} shortly.
        </p>
        <Button variant="outline" onClick={reset}>
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Admissions enquiry"
      className="rounded-3xl border border-line bg-surface p-6 sm:p-8"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="text-sm font-semibold">Full name</label>
          <input
            id="name" name="name" autoComplete="name" value={values.name} onChange={handleChange}
            aria-invalid={Boolean(errors.name)} aria-describedby="name-error" className={field}
          />
          <FieldError id="name-error" message={errors.name} />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-semibold">Mobile number</label>
          <div className="flex gap-2">
            <select
              name="countryCode" aria-label="Country code" value={values.countryCode}
              onChange={handleChange} className={`${field} w-28 shrink-0`}
            >
              {countryCodes.map((code) => (
                <option key={code}>{code}</option>
              ))}
            </select>
            <input
              id="phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel-national"
              value={values.phone} onChange={handleChange}
              aria-invalid={Boolean(errors.phone)} aria-describedby="phone-error" className={field}
            />
          </div>
          <FieldError id="phone-error" message={errors.phone} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="grade" className="text-sm font-semibold">Class applying for</label>
            <select
              id="grade" name="grade" value={values.grade} onChange={handleChange}
              aria-invalid={Boolean(errors.grade)} aria-describedby="grade-error" className={field}
            >
              <option value="">Select class</option>
              {classes.map((grade) => (
                <option key={grade}>{grade}</option>
              ))}
            </select>
            <FieldError id="grade-error" message={errors.grade} />
          </div>
          <div>
            <label htmlFor="state" className="text-sm font-semibold">State</label>
            <select
              id="state" name="state" autoComplete="address-level1" value={values.state}
              onChange={handleChange} aria-invalid={Boolean(errors.state)}
              aria-describedby="state-error" className={field}
            >
              <option value="">Select state</option>
              {states.map((state) => (
                <option key={state}>{state}</option>
              ))}
            </select>
            <FieldError id="state-error" message={errors.state} />
          </div>
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm text-muted">
            <input
              type="checkbox" name="consent" checked={values.consent} onChange={handleChange}
              aria-invalid={Boolean(errors.consent)} aria-describedby="consent-error"
              className="mt-0.5 h-5 w-5 shrink-0 accent-[rgb(var(--accent))]"
            />
            I agree to be contacted by Tulas International School about my enquiry.
          </label>
          <FieldError id="consent-error" message={errors.consent} />
        </div>

        <Button type="submit" className="w-full">
          Enquire Now
        </Button>
      </div>
    </form>
  );
}
