import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { rankings } from "@/data/site";

export default function Rankings() {
  return (
    <section aria-labelledby="rankings-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="rankings-title" title="Ranked among India's best" />
        <RevealGroup as="ul" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rankings.map((item, index) => (
            <RevealItem as="li" key={`${item.by}-${index}`}>
              <article data-cursor className="h-full rounded-3xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-accent">
                <p className="font-display text-7xl font-bold leading-none text-accent">{item.rank}</p>
                <p className="mt-4 font-display text-xl font-semibold">{item.place}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.title}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted">{item.by}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
