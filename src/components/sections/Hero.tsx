"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import { useRef } from "react";
import DrawnUnderline from "@/components/ui/DrawnUnderline";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import { gallery } from "@/data/assets";
import { school } from "@/data/site";

const headline = ["Welcome", "to", "Tulas", "International", "School", "(TIS)"];
const ease = [0.22, 1, 0.36, 1] as const;

const columns = [
  [gallery.studio, gallery.karate],
  [gallery.polo, gallery.swimming],
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // The two photo columns drift at different speeds for a light parallax effect.
  const shiftLeft = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const shiftRight = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const shifts = [shiftLeft, shiftRight];

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:pb-24">
        <div>
          <h1 className="text-[clamp(2.6rem,7.2vw,5.6rem)] font-bold leading-[0.98] tracking-tight">
            {headline.map((word, index) => (
              <span key={word} className="mr-[0.25em] inline-block overflow-hidden align-top pb-1">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <DrawnUnderline className="mt-3 max-w-md" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0, ease }}
          >
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              TIS is one of India&apos;s top boarding and day schools in Dehradun, India. Explore our
              programs, campus life and achievements, and see why parents across India choose Tulas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={school.applyUrl}>Apply Now</Button>
              <Button href="#enquire" variant="outline">
                Enquire Now
              </Button>
            </div>
            <a
              href={school.helpline.href}
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted hover:text-ink"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              Admissions helpline {school.helpline.label}
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4" aria-label="Life at Tulas">
          {columns.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              style={{ y: shifts[columnIndex] }}
              className={`flex flex-col gap-3 sm:gap-4 ${columnIndex === 1 ? "mt-10 sm:mt-14" : ""}`}
            >
              {column.map((photo, photoIndex) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + (columnIndex + photoIndex * 2) * 0.1, ease }}
                >
                  <Photo
                    src={photo.src}
                    alt={photo.alt}
                    priority={photoIndex === 0}
                    sizes="(min-width: 1024px) 24vw, 45vw"
                    className={`aspect-[4/5] ${(columnIndex + photoIndex) % 2 === 0 ? "rounded-[2rem]" : "rounded-2xl"}`}
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
