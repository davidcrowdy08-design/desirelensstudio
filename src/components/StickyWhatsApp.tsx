import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const whatsappNumber = "+233XXXXXXXXX";
const whatsappMessage = "Hi! I'm interested in your services. I'd like to discuss my project.";

export const StickyWhatsApp = () => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3, type: "spring", stiffness: 200 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5C] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
      
      {/* Pulse animation */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />
      
      {/* Tooltip on desktop */}
      <span className="hidden md:block absolute right-full mr-3 px-3 py-2 bg-card border border-border rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Chat with us
      </span>
    </motion.button>
  );
};
