"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { cvData } from "@/lib/cv-data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />

      <div ref={ref} className="relative z-10 section-container">
        <SectionHeading
          badge="À propos"
          title="Passionné par la formation des jeunes"
          subtitle="Mon parcours et ma vision du football"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/70 leading-relaxed">
              {cvData.summary}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Catégories encadrées", value: "3+" },
                { label: "Clubs & académies", value: "4" },
                { label: "Années d'expérience", value: "3+" },
                { label: "Certifications", value: "4" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <div className="text-2xl font-display font-bold gradient-text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
              <div className="relative rounded-2xl overflow-hidden neon-border">
              <div className="aspect-[4/3] relative">
                <img
                  src="/portfolio/render3d.jpg"
                  alt="3D Render"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-light/10 rounded-full blur-3xl" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -left-4 glass-card p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary-light flex items-center justify-center">
                <span className="text-lg">⚽</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Formation</div>
                <div className="text-xs text-white/50">ISSEP Ksar Saïd</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
