"use client";

import { motion } from "framer-motion";

/** Hand-drawn yellow stroke (echoes the yellow line in the TIS brand) that draws itself in. */
export default function DrawnUnderline({ delay = 0.9, className = "" }: { delay?: number; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 18"
      preserveAspectRatio="none"
      className={`h-3 w-full text-accent md:h-4 ${className}`}
    >
      <motion.path
        d="M3 12 C 70 3, 130 15, 200 8 S 330 4, 397 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay, ease: "easeInOut" }}
      />
    </svg>
  );
}
