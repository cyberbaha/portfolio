"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cvData } from "@/lib/cv-data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${cvData.email}?subject=Contact depuis le portfolio&body=${encodeURIComponent(
      `Nom: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />

      <div ref={ref} className="relative z-10 section-container">
        <SectionHeading
          badge="Contact"
          title="Travaillons ensemble"
          subtitle="N'hésitez pas à me contacter pour toute opportunité"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Informations de contact
            </h3>

            {[
              {
                icon: Mail,
                label: "Email",
                value: cvData.email,
                href: `mailto:${cvData.email}`,
              },
              {
                icon: Phone,
                label: "Téléphone",
                value: cvData.phone,
                href: `tel:${cvData.phone.replace(/\s/g, "")}`,
              },
              {
                icon: MapPin,
                label: "Localisation",
                value: cvData.location,
                href: null,
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-light/20 to-accent/20 flex items-center justify-center border border-white/10 group-hover:border-accent/30 transition-colors">
                  <item.icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white hover:text-accent transition-colors text-sm font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="pt-6"
            >
              <p className="text-white/40 text-sm mb-3">Langues</p>
              <div className="flex flex-wrap gap-2">
                {cvData.languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 text-sm"
                  >
                    {lang.name} — {lang.level}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all placeholder:text-white/20"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div>
                <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all placeholder:text-white/20"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all resize-none placeholder:text-white/20"
                  placeholder="Votre message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full glass-button flex items-center justify-center gap-2 magnetic-button !py-4"
              >
                <Send size={16} />
                Envoyer
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
