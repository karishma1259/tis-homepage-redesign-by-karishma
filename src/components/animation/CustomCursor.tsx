"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useFinePointer } from "@/hooks/useFinePointer";

const INTERACTIVE = "a, button, input, select, label, [data-cursor]";

/** Ring that follows the mouse and grows over interactive elements. Hidden on touch devices. */
export default function CustomCursor() {
  const finePointer = useFinePointer();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 450, damping: 38, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 450, damping: 38, mass: 0.5 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!finePointer) return;

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };
    const onOver = (event: PointerEvent) => {
      setHovering(Boolean((event.target as Element).closest?.(INTERACTIVE)));
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [finePointer, x, y]);

  if (!finePointer) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[70]"
    >
      <motion.div
        animate={{ scale: hovering ? 2.2 : 1, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="-ml-4 -mt-4 h-8 w-8 rounded-full border-2 border-white mix-blend-difference"
      />
    </motion.div>
  );
}
