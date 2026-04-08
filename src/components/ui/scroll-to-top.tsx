"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-8 right-8 z-50 hidden md:block group"
        >
          {/* Progress Ring */}
          <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] rotate-[-90deg] pointer-events-none" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="45" pathLength="1" className="stroke-muted fill-none stroke-[8]" />
             <motion.circle
               cx="50"
               cy="50"
               r="45"
               pathLength="1"
               className="stroke-primary fill-none stroke-[8]"
               style={{ pathLength: scrollYProgress }}
             />
          </svg>

          <Button
            size="icon"
            onClick={scrollToTop}
            className="rounded-full shadow-lg hover:shadow-xl transition-shadow w-12 h-12"
            aria-label={siteConfig.uiLabels.aria.scrollToTop}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
