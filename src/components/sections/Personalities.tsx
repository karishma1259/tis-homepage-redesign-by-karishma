import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { athletes, leaders } from "@/data/people";

export default function Personalities() {
  return (
    <section aria-labelledby="people-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="people-title"
          title="Influential personalities who have visited Tulas"
          description="Champions, creators and leaders who have walked our campus and inspired our students."
        />
      </div>

      {/* Horizontal scroller: keyboard-focusable so arrow keys can scroll it. */}
      <div
        tabIndex={0}
        role="region"
        aria-label="Sports and public figures, scroll horizontally"
        className="mt-12 snap-x snap-mandatory overflow-x-auto px-5 pb-6 sm:px-8"
      >
        <ul className="mx-auto flex w-max max-w-none gap-4 lg:ml-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {athletes.map((person) => (
            <li key={person.name} className="w-64 shrink-0 snap-start sm:w-72">
              <article data-cursor className="h-full overflow-hidden rounded-3xl border border-line bg-surface">
                <Photo
                  src={person.src}
                  alt={person.name}
                  sizes="288px"
                  className="aspect-[4/5]"
                />
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold leading-snug">{person.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{person.role}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8">
        <h3 className="font-display text-2xl font-semibold">Leaders and dignitaries</h3>
        <RevealGroup as="ul" className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <RevealItem as="li" key={leader.name} className="flex items-center gap-4">
              <Photo src={leader.src} alt="" sizes="56px" className="h-14 w-14 shrink-0 rounded-full" />
              <div>
                <p className="font-semibold leading-snug">{leader.name}</p>
                <p className="text-sm leading-snug text-muted">{leader.role}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
