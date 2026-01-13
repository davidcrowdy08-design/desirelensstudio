import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-6"
          >
            Our Philosophy
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
          >
            We don't just build websites.{" "}
            <span className="text-primary">
              We build intentional digital presences.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Desire Lens blends aesthetic mastery and strategic clarity, creating
            powerful experiences that elevate your brand, engage audiences, and
            convert visitors into loyal clients. Every detail is designed for
            growth and luxury perception.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
