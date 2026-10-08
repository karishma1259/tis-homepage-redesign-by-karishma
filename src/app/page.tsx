import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Awards from "@/components/sections/Awards";
import Collaborations from "@/components/sections/Collaborations";
import Enquire from "@/components/sections/Enquire";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Personalities from "@/components/sections/Personalities";
import Philosophy from "@/components/sections/Philosophy";
import Rankings from "@/components/sections/Rankings";
import Sports from "@/components/sections/Sports";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import VirtualTour from "@/components/sections/VirtualTour";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Sports />
        <Philosophy />
        <Stats />
        <Rankings />
        <Personalities />
        <Awards />
        <VirtualTour />
        <Testimonials />
        <Collaborations />
        <Enquire />
      </main>
      <Footer />
    </>
  );
}
