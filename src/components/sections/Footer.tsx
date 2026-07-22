"use client";

import { motion } from "framer-motion";
import { cvData } from "@/lib/cv-data";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      <div className="relative z-10 section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-light to-accent flex items-center justify-center text-white font-bold text-sm font-display">
              ML
            </div>
            <div>
              <p className="text-white/80 text-sm font-medium font-display">
                {cvData.name}
              </p>
              <p className="text-white/40 text-xs">{cvData.title}</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/30 text-xs flex items-center gap-1"
          >
            © {currentYear} {cvData.name}. Créé avec{" "}
            <Heart size={12} className="text-accent" fill="currentColor" /> à{" "}
            {cvData.location}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
