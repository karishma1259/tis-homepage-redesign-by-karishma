import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/dm-sans";
import "./globals.css";
import CustomCursor from "@/components/animation/CustomCursor";
import ScrollProgress from "@/components/animation/ScrollProgress";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Tulas International School | Boarding & Day School in Dehradun",
  description:
    "TIS is one of India's top co-educational boarding and day schools in Dehradun. Explore programs, campus life, sports and admissions.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning is required by next-themes (it sets the theme class before hydration).
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:font-semibold focus:text-brand"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
