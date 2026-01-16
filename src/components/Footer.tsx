import { Instagram, Linkedin, Facebook, Twitter, Mail, MessageCircle } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/desirelensgraphics" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/desirelens" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

const WHATSAPP_NUMBER = "+233256922789";

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="font-heading text-2xl font-bold mb-4 block">
              Desire Lens
            </a>
            <p className="text-background/70 mb-6 max-w-sm">
              We craft digital experiences that elevate brands. Serving clients
              worldwide with luxury design and strategic clarity.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-bold mb-4">Navigation</h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@desirelens.com"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@desirelens.com
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <p className="text-background/70">
                Serving clients worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © 2026 Desire Lens Studio. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-background/50 hover:text-background/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-background/50 hover:text-background/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
