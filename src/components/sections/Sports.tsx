import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { sports } from "@/data/sports";

export default function Sports() {
  return (
    <section id="sports" aria-labelledby="sports-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="sports-title"
          title="Sports? It's the foundation."
          description="It's not just a facility. At Tulas it's the foundation! 16+ sports curated to bring joy and discipline to your life."
        />

        <RevealGroup as="ul" className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {sports.map((sport) => (
            <RevealItem as="li" key={sport.name}>
              <figure
                data-cursor
                className="group overflow-hidden rounded-2xl border border-line bg-surface transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Photo
                  src={sport.src}
                  alt={`${sport.name} at TIS`}
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                  className="aspect-[4/3] [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-105"
                />
                <figcaption className="px-4 py-3 font-display text-lg font-semibold">
                  {sport.name}
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
