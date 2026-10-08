import { Reveal } from "@/components/animation/Reveal";
import Photo from "@/components/ui/Photo";
import { images } from "@/data/assets";

export default function Philosophy() {
  return (
    <section aria-labelledby="philosophy-title" className="py-12 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <h2 id="philosophy-title" className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            At Tulas, we always ask, “What&apos;s the secret to making school awesome?”
          </h2>
          <p className="mt-6 text-lg text-muted">
            We looked, we listened, we experimented.{" "}
            <span className="font-semibold text-ink">There, we cracked it!</span>
          </p>
        </Reveal>
        <Reveal>
          <Photo
            src={images.atTis}
            alt="Life at Tulas International School"
            fit="contain"
            className="aspect-square"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
