import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { partners } from "@/data/site";

export default function Collaborations() {
  return (
    <section aria-labelledby="collab-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="collab-title"
          title="12+ collaborations"
          description="Global partnerships that open doors for our students."
        />
        <RevealGroup as="ul" className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <RevealItem as="li" key={partner.src}>
              {/* White tile keeps logos legible in dark mode. */}
              <Photo
                src={partner.src}
                alt={partner.alt}
                fit="contain"
                sizes="(min-width: 1024px) 15vw, 45vw"
                className="aspect-[3/2] rounded-2xl bg-white p-4"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
