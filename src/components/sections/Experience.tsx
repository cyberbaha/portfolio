"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cvData } from "@/lib/cv-data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32">
      <div className="absolute inset-0 bg-hero-gradient" />

      <div ref={ref} className="relative z-10 section-container">
        <SectionHeading
          badge="Expérience"
          title="Parcours professionnel"
          subtitle="Mon expérience dans l'encadrement des jeunes footballeurs"
        />

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-light/50 via-accent/30 to-transparent" />

          <div className="space-y-8">
            {cvData.experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                <div className="absolute left-3 md:left-5 top-6 w-7 h-7 rounded-full bg-gradient-to-br from-primary-light to-accent flex items-center justify-center z-10">
                  <Briefcase size={12} className="text-white" />
                </div>

                <div className="glass-card p-6 md:p-8 group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-semibold text-white group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-accent/80 text-sm mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-lg bg-primary-light/10 text-primary-light/80 text-xs border border-primary-light/20"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
