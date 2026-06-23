import { motion } from "framer-motion";

/**
 * SocialProof Component - Kreio Landing
 * 
 * Design Notes:
 * - Fondo zinc-900, border top y bottom zinc-800
 * - Texto: "Trusted by brands scaling with Meta Ads in"
 * - Flags + nombres: 🇲🇽 México · 🇨🇴 Colombia · 🇦🇷 Argentina · 🇪🇸 España · 🇨🇱 Chile · 🇺🇸 USA
 * - Stats animados al entrar en viewport
 */
export default function SocialProof() {
  const stats = [
    { value: "2.3x", label: "mejora promedio en ROAS" },
    { value: "4.7h", label: "ahorradas por semana" },
    { value: "500+", label: "usuarios activos" },
    { value: "10x", label: "producción creativa más rápida" },
  ];

  const countries = [
    { flag: "🇲🇽", name: "México" },
    { flag: "🇨🇴", name: "Colombia" },
    { flag: "🇦🇷", name: "Argentina" },
    { flag: "🇪🇸", name: "España" },
    { flag: "🇨🇱", name: "Chile" },
    { flag: "🇺🇸", name: "USA" },
  ];

  const counterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="border-t border-b border-[#27272a] bg-[#18181b] py-12">
      <div className="container">
        {/* Countries */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <span className="text-[#a1a1aa] text-sm font-medium">Confiado por marcas que escalan con Meta Ads en</span>
          <div className="flex flex-wrap gap-4 justify-center">
            {countries.map((country) => (
              <div key={country.name} className="flex items-center gap-2">
                <span className="text-lg">{country.flag}</span>
                <span className="text-[#a1a1aa] text-sm">{country.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={counterVariants}
              transition={{ delay: i * 0.1 }}
            >
              <motion.p
                className="text-3xl md:text-4xl font-bold text-[#7c3aed] mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <span className="text-sm text-[#a1a1aa] text-center">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
