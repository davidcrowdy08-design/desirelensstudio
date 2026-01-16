import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "+233256922789";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Desire Lens! I'm interested in discussing a project. Can we chat?"
);

export const CTASection = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-primary text-primary-foreground"
    >
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Let's Create Something Extraordinary
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed"
          >
            Whether you need a strategic website, growth strategy, or full
            digital identity makeover, we're ready to help you achieve your
            goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              variant="secondary"
              onClick={openWhatsApp}
              className="text-base px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Message on WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToPortfolio}
              className="group text-base px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
