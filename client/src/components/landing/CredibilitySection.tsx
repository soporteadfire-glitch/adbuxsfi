import { motion } from "framer-motion";
import { Zap, Lock, Shield, Cpu, ShoppingCart, BookOpen } from "lucide-react";

/**
 * CredibilitySection Component - Kreio Landing
 * 
 * Design Notes:
 * - Fondo zinc-900, border violeta sutil
 * - Badges en fila con iconos
 */
export default function CredibilitySection() {
  const badges = [
    { icon: Zap, label: "Powered by AWS" },
    { icon: Lock, label: "SOC 2 In Progress" },
    { icon: Shield, label: "99.9% Uptime SLA" },
    { icon: Cpu, label: "Powered by Claude AI" },
    { icon: ShoppingCart, label: "Shopify Partner" },
    { icon: BookOpen, label: "Meta Business Partner" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 border-t border-[#27272a] bg-[#18181b]">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-3">
            Construido para escalar desde el primer día.
          </h2>
          <p className="text-[#a1a1aa]">
            Adbuxs se ejecuta en infraestructura de nivel empresarial para que tu publicación nunca pierda un cronograma y tus datos estén seguros.
          </p>
        </motion.div>

        {/* Badges Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={i}
                className="flex items-center gap-2 bg-[#09090b] border border-[#27272a] rounded-full px-4 py-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Icon className="w-4 h-4 text-[#7c3aed]" />
                <span className="text-sm text-[#a1a1aa]">{badge.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
