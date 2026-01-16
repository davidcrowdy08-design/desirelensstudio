import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const websitePlans = [
  {
    name: "Starter Presence",
    price: "₵1,500",
    description: "Perfect for professionals and small businesses ready to establish their online presence with a polished, conversion-focused website.",
  },
  {
    name: "Business Growth",
    price: "₵3,500",
    description: "For growing businesses that need a powerful digital platform with advanced features to attract, engage, and convert visitors.",
  },
  {
    name: "Premium Authority",
    price: "₵6,500",
    description: "The complete digital experience for brands ready to dominate their market with a world-class website and strategic positioning.",
  },
];

const creativePlans = [
  {
    name: "Single Design",
    price: "₵150",
    description: "One stunning visual asset — social post, banner, or graphic — crafted to capture attention and communicate your message.",
  },
  {
    name: "Monthly Creative Pack",
    price: "₵1,000/month",
    description: "Consistent, on-brand creative content delivered monthly to keep your social presence fresh, engaging, and growth-focused.",
  },
];

const whatsappNumber = "+233XXXXXXXXX";
const whatsappMessage = "Hi! I'm interested in your services. I'd like to get an exact quote for my project.";

export const Pricing = () => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Investment
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Plans & Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent starting points for every stage of your brand's journey. 
            Final pricing tailored to your unique needs.
          </p>
        </motion.div>

        {/* Website Design Plans */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-2xl md:text-3xl font-bold text-center mb-10"
          >
            Website Design Plans
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {websitePlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <h4 className="font-heading text-xl font-bold mb-2">
                    {plan.name}
                  </h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">Starting From</span>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary mt-1">
                    {plan.price}
                  </p>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {plan.description}
                </p>

                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full gap-2 bg-primary hover:bg-primary/90"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get Exact Quote on WhatsApp
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Creative & Social Plans */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-2xl md:text-3xl font-bold text-center mb-10"
          >
            Creative & Social Plans
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {creativePlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <h4 className="font-heading text-xl font-bold mb-2">
                    {plan.name}
                  </h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">Starting From</span>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary mt-1">
                    {plan.price}
                  </p>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {plan.description}
                </p>

                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full gap-2 bg-primary hover:bg-primary/90"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get Exact Quote on WhatsApp
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
