import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { reviews } from "@/data/reviews";

export default function Testimonials() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="reviews-title"
          title="From the parents"
          description="What families say about trusting Tulas with their children."
        />

        <RevealGroup as="ul" className="mt-12 gap-4 space-y-4 md:columns-2 lg:columns-3">
          {reviews.map((review) => (
            <RevealItem as="li" key={review.name} className="break-inside-avoid">
              <figure data-cursor className="rounded-3xl border border-line bg-surface p-6">
                <blockquote className="leading-relaxed">“{review.text}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <Photo src={review.src} alt="" sizes="48px" className="h-12 w-12 shrink-0 rounded-full" />
                  <span>
                    <span className="block font-semibold leading-tight">{review.name}</span>
                    <span className="text-sm text-muted">{review.relation}</span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
