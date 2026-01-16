import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Portfolio />
        <Services />
        <Pricing />
        <Process />
        <Testimonials />
        <ContactForm />
        <CTASection />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
};

export default Index;