const phrase = "LET'S DO it with Tulas";

/** Decorative scrolling tagline. Duplicated once so the -50% loop is seamless. */
export default function Marquee() {
  const items = Array.from({ length: 6 }, (_, index) => index);

  return (
    <div aria-hidden="true" className="overflow-hidden bg-accent py-5 text-brand">
      <div className="marquee-track flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span
                key={item}
                className="flex items-center gap-8 pr-8 font-display text-4xl font-bold tracking-tight sm:text-6xl"
              >
                {phrase}
                <span className="text-2xl">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
