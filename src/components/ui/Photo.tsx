import Image from "next/image";

interface PhotoProps {
  src: string;
  alt: string;
  /** Sizing/shape classes for the frame, e.g. "aspect-[4/5] rounded-3xl". */
  className?: string;
  sizes?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
}

/** Responsive image that fills a frame whose shape is set by the caller. */
export default function Photo({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
  fit = "cover",
}: PhotoProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={fit === "cover" ? "object-cover" : "object-contain"}
      />
    </div>
  );
}
