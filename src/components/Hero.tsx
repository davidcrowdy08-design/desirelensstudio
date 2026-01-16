import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
const WHATSAPP_NUMBER = "+233256922789";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Desire Lens! I'd like to book a strategy call to discuss my project.");
export const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#work");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const openStrategyCall = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
    }} />

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{
          opacity: 0,
          y: 24
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          ease: [0.4, 0, 0.2, 1]
        }} className="font-heading text-[48px] md:text-[56px] lg:text-[72px] font-extrabold leading-[1.2] mb-6 tracking-tight">
            Designing Digital Experiences That Build{" "}
            <span className="text-primary">Trust & Growth</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 24
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.1,
          ease: [0.4, 0, 0.2, 1]
        }} className="text-base md:text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Websites, systems, and AI-powered design for brands ready to scale.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 24
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0.4, 0, 0.2, 1]
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={openStrategyCall} className="group text-base px-8 py-6 transition-transform duration-300 hover:scale-[1.03]">
              <Calendar className="mr-2 h-4 w-4" />
              Book a Strategy Call
            </Button>
            <Button variant="ghost" size="lg" onClick={scrollToPortfolio} className="group text-base px-8 py-6 relative overflow-hidden">
              <span className="relative z-10">View Our Work</span>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
              <span className="absolute bottom-3 left-8 right-8 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 1
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 1.5
      }} className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <motion.div animate={{
          y: [0, 12, 0]
        }} transition={{
          repeat: Infinity,
          duration: 1.5
        }} className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>;
};