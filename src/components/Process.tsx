import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description:
      "Understand goals, audience, and vision to build the perfect strategy.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    description:
      "Craft visually stunning, intuitive designs that reflect your brand identity.",
  },
  {
    icon: Code,
    step: "03",
    title: "Development",
    description:
      "Build robust, scalable digital solutions optimized for performance and conversion.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description:
      "Deploy your digital presence with full functionality, tracking, and support for continuous growth.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-20 md:py-32 bg-surface-soft">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            How We Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-24 h-24 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-6">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                <span className="text-sm font-bold text-primary mb-2">
                  {step.step}
                </span>

                <h3 className="font-heading text-xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
