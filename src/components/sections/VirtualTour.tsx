import { Reveal } from "@/components/animation/Reveal";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import { images } from "@/data/assets";
import { school } from "@/data/site";

export default function VirtualTour() {
  return (
    <section aria-labelledby="tour-title" className="px-5 py-12 sm:px-8">
      <Reveal className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[2rem] bg-brand p-8 text-white sm:p-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 id="tour-title" className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Take a 360° virtual tour of our campus
          </h2>
          <p className="mt-4 max-w-lg text-white/75">
            Walk through classrooms, boarding houses and sports facilities from wherever you are.
          </p>
          <Button href={school.virtualTourUrl} className="mt-8">
            Start the tour
          </Button>
        </div>
        <Photo
          src={images.virtualTour}
          alt="360 degree virtual tour icon"
          fit="contain"
          sizes="(min-width: 768px) 30vw, 70vw"
          className="mx-auto aspect-square w-full max-w-xs"
        />
      </Reveal>
    </section>
  );
}
