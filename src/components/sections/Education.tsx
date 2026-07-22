"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cvData } from "@/lib/cv-data";
import SectionHeading from "@/components/ui/SectionHeading";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />

      <div ref={ref} className="relative z-10 section-container">
        <SectionHeading
          badge="Formation"
          title="Parcours académique"
          subtitle="Mon diplôme et ma spécialisation"
        />

        <div className="max-w-3xl mx-auto">
          {cvData.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass-card p-8 md:p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-light/5 rounded-full blur-3xl group-hover:bg-primary-light/10 transition-all duration-500" />

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-light to-accent flex items-center justify-center shrink-0">
                  <GraduationCap size={24} className="text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-accent/80 text-sm font-medium mb-1">
                    {edu.specialty}
                  </p>
                  <p className="text-white/50 text-sm">
                    {edu.school} — {edu.year}
                  </p>
                </div>

                <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                  <span className="text-accent text-sm font-medium">
                    {edu.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
