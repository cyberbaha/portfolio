"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { ExternalLink, Users, TrendingUp, Star } from "lucide-react";

const projects = [
  {
    title: "AS El Fawz de Mornaguia",
    category: "Entraîneur principal – Écoles",
    description:
      "Planification et animation des séances d'entraînement pour les jeunes joueurs de la catégorie écoles. Encadrement du développement technique, tactique et physique.",
    tags: ["Planification", "Développement technique", "Leadership"],
    icon: Users,
    gradient: "from-primary-light to-accent",
  },
  {
    title: "Union Sportive de Séjoumi",
    category: "Entraîneur – Benjamins",
    description:
      "Direction de l'entraînement et de la préparation physique et technique. Structuration des séances autour du développement technique et de l'esprit d'équipe.",
    tags: ["Préparation physique", "Esprit d'équipe", "Technique"],
    icon: TrendingUp,
    gradient: "from-accent to-orange",
  },
  {
    title: "Stade Tunisien",
    category: "Stage pratique",
    description:
      "Stage pratique au sein du staff technique, avec observation et participation à l'encadrement des séances d'entraînement.",
    tags: ["Observation", "Staff technique", "Participation"],
    icon: Star,
    gradient: "from-orange to-primary-light",
  },
  {
    title: "Académie Deggar",
    category: "Entraîneur",
    description:
      "Encadrement de séances d'entraînement technique et physique pour les jeunes licenciés de l'académie au Stade Chedly Zouiten.",
    tags: ["Technique", "Physique", "Formation"],
    icon: ExternalLink,
    gradient: "from-primary-light to-orange",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32">
      <div className="absolute inset-0 bg-hero-gradient" />

      <div ref={ref} className="relative z-10 section-container">
        <SectionHeading
          badge="Projets"
          title="Mes expériences clés"
          subtitle="Les clubs et académies où j'ai contribué à la formation des jeunes"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="glass-card p-6 md:p-8 group relative overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${project.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                  >
                    <project.icon size={20} className="text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white/5 text-white/50 text-xs border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
