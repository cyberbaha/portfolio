"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cvData } from "@/lib/cv-data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Award } from "lucide-react";

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />

      <div ref={ref} className="relative z-10 section-container">
        <SectionHeading
          badge="Certifications"
          title="Certifications & formations"
          subtitle="Mes compléments de formation"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cvData.certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="glass-card p-6 text-center group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-base font-display font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                  {cert.name}
                </h3>
                <p className="text-white/40 text-sm">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 glass-card p-6 flex items-center gap-4 max-w-md mx-auto"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange to-primary-light flex items-center justify-center shrink-0">
            <Award size={20} className="text-white" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">
              Informations complémentaires
            </h4>
            <p className="text-white/50 text-sm mt-1">
              {cvData.additional.join(" • ")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
