import Image from "next/image";
import { images } from "@/data/assets";
import { footerLinks, school, socials } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src={images.footerLogo}
            alt={`${school.name} logo`}
            width={180}
            height={72}
            className="h-16 w-auto"
          />
          <address className="mt-6 space-y-2 text-sm not-italic leading-relaxed text-white/80">
            <p>{school.name}</p>
            <p>
              <a href={school.mapsLink} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                {school.address}
              </a>
            </p>
            <p>
              Landline No.{" "}
              {school.landlines.map((line, index) => (
                <span key={line.href}>
                  {index > 0 && ", "}
                  <a href={line.href} className="underline-offset-4 hover:underline">
                    {line.label}
                  </a>
                </span>
              ))}
            </p>
            <p>
              Admission Helpline No.{" "}
              <a href={school.helpline.href} className="underline-offset-4 hover:underline">
                {school.helpline.label}
              </a>
            </p>
            <p>
              <a href={`mailto:${school.email}`} className="underline-offset-4 hover:underline">
                {school.email}
              </a>
            </p>
          </address>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-lg font-semibold">Quick links</h2>
          <ul className="mt-4 space-y-1 text-sm text-white/80">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1.5 underline-offset-4 hover:text-white hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-lg font-semibold">Follow TIS</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-4 text-sm transition-colors hover:bg-white hover:text-brand"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="border-t border-white/15 px-5 py-5 text-center text-sm text-white/65">
        Copyright © 2026 Tulas International School, Dehradun | All Rights Reserved
      </p>
    </footer>
  );
}
