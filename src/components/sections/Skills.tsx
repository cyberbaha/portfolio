"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cvData } from "@/lib/cv-data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Target, Heart, Wrench, Globe } from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      title: "Compétences techniques",
      icon: Target,
      skills: cvData.skills.technical,
      color: "from-primary-light to-accent",
    },
    {
      title: "Savoir-être",
      icon: Heart,
      skills: cvData.skills.soft,
      color: "from-accent to-orange",
    },
    {
      title: "Outils",
      icon: Wrench,
      skills: cvData.skills.tools,
      color: "from-orange to-primary-light",
    },
    {
      title: "Langues",
      icon: Globe,
      skills: cvData.languages.map((l) => `${l.name} (${l.level})`),
      color: "from-primary-light to-orange",
    },
  ];

  return (
    <section id="skills" className="relative py-32">
      <div className="absolute inset-0 bg-hero-gradient" />

      <div ref={ref} className="relative z-10 section-container">
        <SectionHeading
          badge="Compétences"
          title="Mes compétences"
          subtitle="Ce que je maîtrise et ce que j'apporte"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="glass-card p-6 md:p-8 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}
                >
                  <cat.icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 + j * 0.05 }}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
