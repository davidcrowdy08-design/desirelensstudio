import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
  "Website Design & Development",
  "UI/UX Design",
  "Brand Identity & Creative Direction",
  "Social Media & Digital Marketing",
  "SEO & Organic Growth",
  "Complete Digital Transformation",
];

const budgetRanges = [
  "Under ₵1,500",
  "₵1,500 - ₵3,500",
  "₵3,500 - ₵6,500",
  "₵6,500 - ₵15,000",
  "₵15,000+",
  "Not sure yet",
];

const whatsappNumber = "+233256922789";

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.projectType || !formData.budget) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit the form.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Show success state
    setIsSubmitted(true);
  };

  const handleWhatsAppClick = () => {
    const message = `Hi! I just submitted a contact form.\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.projectType}\nBudget: ${formData.budget}\n\nI'd love to discuss my project!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 md:py-32">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto text-center p-8 md:p-12 rounded-lg bg-card border border-border"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Thank You, {formData.name}!
            </h3>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We've received your inquiry and will review it shortly. 
              For the fastest response, reach out to us directly on WhatsApp — 
              we typically respond within minutes!
            </p>

            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="gap-2 bg-[#25D366] hover:bg-[#20BA5C] text-white min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5" />
              Continue on WhatsApp
            </Button>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "", projectType: "", budget: "" });
              }}
              className="block mx-auto mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Submit another inquiry
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Start Your Project
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tell us about your vision. We'll get back to you with a tailored proposal.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto p-8 md:p-10 rounded-lg bg-card border border-border"
        >
          <div className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Your Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="min-h-[48px]"
                maxLength={100}
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="min-h-[48px]"
                maxLength={255}
              />
            </div>

            {/* Project Type Field */}
            <div className="space-y-2">
              <Label htmlFor="projectType" className="text-sm font-medium">
                Project Type
              </Label>
              <Select
                value={formData.projectType}
                onValueChange={(value) => setFormData({ ...formData, projectType: value })}
              >
                <SelectTrigger className="min-h-[48px]">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Budget Range Field */}
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-sm font-medium">
                Budget Range
              </Label>
              <Select
                value={formData.budget}
                onValueChange={(value) => setFormData({ ...formData, budget: value })}
              >
                <SelectTrigger className="min-h-[48px]">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full gap-2 min-h-[52px] mt-4"
            >
              <Send className="w-4 h-4" />
              Submit Inquiry
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Prefer instant messaging?{" "}
            <button
              type="button"
              onClick={() => {
                const message = "Hi! I'd like to discuss a project with you.";
                window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
              }}
              className="text-primary hover:underline font-medium"
            >
              Chat on WhatsApp
            </button>
          </p>
        </motion.form>
      </div>
    </section>
  );
};
