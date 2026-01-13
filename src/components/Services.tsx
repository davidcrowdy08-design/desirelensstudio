import { motion } from "framer-motion";
import {
  Globe,
  Palette,
  Search,
  Layers,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "High-performance, scalable websites built with modern technologies, optimized for speed, UX, and SEO.",
    benefits: [
      "Professional online presence",
      "Optimized for speed & SEO",
      "Future-proof & scalable",
    ],
    features: [
      "Responsive design",
      "Fast-loading pages",
      "Security & maintenance",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Intuitive, engaging interfaces designed to captivate users, guide their journey, and elevate brand perception.",
    benefits: [
      "Intuitive user experience",
      "Engaging visual hierarchy",
      "Enhanced client trust",
    ],
    features: [
      "Wireframes & prototypes",
      "Accessibility compliance",
      "A/B testing support",
    ],
  },
  {
    icon: Search,
    title: "SEO & Organic Growth",
    description:
      "Rank higher on search engines, attract qualified audiences, and maximize organic traffic.",
    benefits: ["Increased visibility", "Qualified traffic", "Sustainable growth"],
    features: [
      "Keyword research",
      "On-page & off-page SEO",
      "Content strategy alignment",
    ],
  },
  {
    icon: Layers,
    title: "Creative Direction",
    description:
      "Cohesive visual systems unify brand, content, and design into a clear, authoritative presence.",
    benefits: [
      "Consistency across platforms",
      "Elevated brand perception",
      "Long-term brand equity",
    ],
    features: [
      "Brand guidelines",
      "Typography & color systems",
      "Visual storytelling",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Strategic campaigns to expand reach, engagement, and audience loyalty across social channels.",
    benefits: [
      "Stronger online presence",
      "Higher engagement",
      "Targeted social growth",
    ],
    features: [
      "Content calendars",
      "Social analytics",
      "Engagement strategy",
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and
            drive measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-heading text-xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
