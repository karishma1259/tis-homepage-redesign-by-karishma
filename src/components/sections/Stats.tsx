import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { stats } from "@/data/site";

export default function Stats() {
  return (
    <section aria-label="TIS at a glance" className="bg-brand py-16 text-white sm:py-20">
      <RevealGroup
        as="ul"
        className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-12 px-5 sm:px-8 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <RevealItem as="li" key={stat.label}>
            <p className="font-display text-5xl font-bold text-accent sm:text-7xl">
              {stat.value}
              {stat.unit && <span className="ml-2 text-2xl sm:text-3xl">{stat.unit}</span>}
            </p>
            <p className="mt-2 text-sm uppercase tracking-wider text-white/75">{stat.label}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
