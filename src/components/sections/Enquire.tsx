import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { school } from "@/data/site";
import EnquiryForm from "./EnquiryForm";

export default function Enquire() {
  return (
    <section id="enquire" aria-labelledby="enquire-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            id="enquire-title"
            title="Enquire now"
            description="Share a few details and our admissions team will get in touch."
          />
          <Reveal>
            <ul className="mt-8 space-y-4 text-[0.95rem]">
              <li className="flex items-start gap-3">
                <Phone aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>
                  Admission helpline{" "}
                  <a href={school.helpline.href} className="font-semibold underline-offset-4 hover:underline">
                    {school.helpline.label}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <a href={`mailto:${school.email}`} className="font-semibold underline-offset-4 hover:underline">
                  {school.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>{school.address}</span>
              </li>
            </ul>
            <iframe
              title="Map showing the location of Tulas International School"
              src={school.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-8 h-64 w-full rounded-2xl border border-line"
            />
          </Reveal>
        </div>

        <Reveal>
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  );
}
