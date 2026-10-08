"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Phone, X } from "lucide-react";
import { useEffect } from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { navItems, school } from "@/data/site";
import Button from "@/components/ui/Button";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[55] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 bg-black/60"
          />
          <motion.nav
            className="absolute right-0 top-0 flex h-full w-[min(22rem,88vw)] flex-col bg-brand p-6 text-white"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/30"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>

            <ul className="mt-6 space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="block border-b border-white/15 py-4 font-display text-2xl font-semibold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto space-y-3 pt-8">
              <Button href={school.applyUrl} className="w-full">
                Apply Now
              </Button>
              <Button href="#enquire" variant="outlineOnDark" className="w-full">
                Enquire Now
              </Button>
              <a
                href={school.helpline.href}
                className="flex min-h-12 items-center justify-center gap-2 text-sm text-white/80"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                Admissions helpline {school.helpline.label}
              </a>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
