"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const viewport = { once: true, margin: "-60px" } as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
}

/** Fades one block in as it enters the viewport. */
export function Reveal({ children, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps extends RevealProps {
  as?: "div" | "ul" | "ol";
}

/** Parent that staggers its <RevealItem /> children when it enters the viewport. */
export function RevealGroup({ children, className, as = "div" }: RevealGroupProps) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </Tag>
  );
}

interface RevealItemProps extends RevealProps {
  as?: "div" | "li";
}

/** Child of <RevealGroup />. Receives its animation timing from the parent. */
export function RevealItem({ children, className, as = "div" }: RevealItemProps) {
  const Tag = motion[as];
  return (
    <Tag className={className} variants={itemVariants}>
      {children}
    </Tag>
  );
}
