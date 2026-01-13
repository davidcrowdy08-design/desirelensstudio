import { motion } from "framer-motion";
import portfolioMobileApp from "@/assets/portfolio-mobile-app.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioBranding from "@/assets/portfolio-branding.jpg";
import portfolioSocial from "@/assets/portfolio-social.jpg";
import portfolioWebsite from "@/assets/portfolio-website.jpg";

const projects = [
  {
    name: "Mobile App Experience",
    category: "App Design",
    description:
      "Redesigned a mobile app to boost engagement and retention, creating a seamless user experience.",
    image: portfolioMobileApp,
  },
  {
    name: "E-Commerce Website",
    category: "Web Design",
    description:
      "Luxury e-commerce platform optimized for conversions and seamless checkout.",
    image: portfolioEcommerce,
  },
  {
    name: "Brand Identity System",
    category: "Branding",
    description:
      "Cohesive visual language for a lifestyle brand, increasing recognition and loyalty.",
    image: portfolioBranding,
  },
  {
    name: "Social Growth Campaign",
    category: "Digital Marketing",
    description:
      "Boosted social presence, increasing engagement and targeted follower growth.",
    image: portfolioSocial,
  },
  {
    name: "Website Redesign Project",
    category: "Web Design",
    description:
      "Corporate website redesign to enhance trust, clarity, and lead generation.",
    image: portfolioWebsite,
  },
];

export const Portfolio = () => {
  return (
    <section id="work" className="py-20 md:py-32 bg-surface-soft">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of premium digital experiences demonstrating
            design, strategy, and results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-card cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-sm font-medium text-primary-foreground/80 mb-1">
                  {project.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-primary-foreground/80 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Always visible on mobile */}
              <div className="p-4 md:hidden">
                <span className="text-xs font-medium text-primary mb-1 block">
                  {project.category}
                </span>
                <h3 className="font-heading text-lg font-bold">
                  {project.name}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
