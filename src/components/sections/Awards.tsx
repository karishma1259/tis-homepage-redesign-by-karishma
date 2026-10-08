import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { awards } from "@/data/site";

export default function Awards() {
  return (
    <section id="awards" aria-labelledby="awards-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="awards-title"
          title="Awards"
          description="We believe in celebrating the hard work and perseverance of the best!"
        />
        <RevealGroup as="ul" className="mt-12 grid gap-4 sm:grid-cols-3">
          {awards.map((award) => (
            <RevealItem as="li" key={award.src}>
              <Photo
                src={award.src}
                alt={award.alt}
                fit="contain"
                sizes="(min-width: 640px) 30vw, 90vw"
                className="aspect-[4/3] rounded-2xl border border-line bg-surface p-3"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
