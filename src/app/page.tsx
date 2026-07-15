import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { Preloader } from "@/components/shared/preloader";
import { Hero } from "@/components/sections/hero";
import { PracticeAreas } from "@/components/sections/practice-areas";
import { About } from "@/components/sections/about";
import { Attorneys } from "@/components/sections/attorneys";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Statistics } from "@/components/sections/statistics";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Insights } from "@/components/sections/insights";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <PracticeAreas />
        <About />
        <Attorneys />
        <WhyChooseUs />
        <Statistics />
        <Process />
        <Testimonials />
        <Insights />
        <Faq />
        <Cta />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
