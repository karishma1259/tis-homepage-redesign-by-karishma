"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "@/components/animation/ThemeToggle";
import Button from "@/components/ui/Button";
import { images } from "@/data/assets";
import { navItems, school } from "@/data/site";
import { useScrolled } from "@/hooks/useScrolled";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled ? "border-line bg-bg/85 backdrop-blur-lg" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" aria-label={`${school.name}, back to top`} className="shrink-0">
          <Image
            src={images.logo}
            alt={`${school.name} logo`}
            width={160}
            height={64}
            priority
            className="h-12 w-auto rounded-lg dark:bg-white dark:p-1"
          />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative py-2 text-[0.95rem] font-medium after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button href="#enquire" variant="outline" className="hidden xl:inline-flex">
            Enquire Now
          </Button>
          <Button href={school.applyUrl} className="hidden sm:inline-flex">
            Apply Now
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface lg:hidden"
          >
            <Menu aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
