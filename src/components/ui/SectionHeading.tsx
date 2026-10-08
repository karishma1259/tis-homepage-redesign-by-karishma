interface SectionHeadingProps {
  id: string;
  title: string;
  description?: string;
  onDark?: boolean;
  className?: string;
}

export default function SectionHeading({
  id,
  title,
  description,
  onDark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2
        id={id}
        className={`text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl ${
          onDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${onDark ? "text-white/75" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
