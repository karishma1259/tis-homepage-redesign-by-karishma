import { Reveal } from "@/components/animation/Reveal";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { gallery } from "@/data/assets";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading id="about-title" title="Boarding and Day School Excellence" />
          <Reveal>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              We provide world-class education and a nurturing environment for holistic development.
              Join TIS to be part of a community that values academic rigour, sport, the arts and
              character in equal measure.
            </p>
            <p className="mt-6 border-l-4 border-accent pl-5 font-display text-2xl font-semibold leading-snug">
              Tulas International School was established in 2012 under the aegis of Rishabh
              Educational Trust to impart education through seamless opportunities.
            </p>
          </Reveal>
        </div>

        <Reveal className="grid grid-cols-5 gap-4">
          <Photo
            src={gallery.campusLife.src}
            alt={gallery.campusLife.alt}
            sizes="(min-width: 1024px) 30vw, 60vw"
            className="col-span-3 aspect-[3/4] rounded-[2rem]"
          />
          <Photo
            src={gallery.celebration.src}
            alt={gallery.celebration.alt}
            sizes="(min-width: 1024px) 20vw, 40vw"
            className="col-span-2 mt-12 aspect-[3/4] rounded-2xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
