import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

/**
 * Hero Component - Kreio Landing
 * 
 * Design Notes:
 * - Headline: 72px bold, line-height 1.1
 * - Badge superior: "✦ Now in Beta — Join 500+ ecommerce brands"
 * - Dashboard mockup: div estilizado simulando UI dark con cards de métricas
 * - Glow violeta detrás del mockup
 * - Animación Framer Motion: fade up staggered
 * - Float animation para el mockup
 */
export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 },
    }),
  };

  const floatVariants = {
    animate: {
      y: [0, -12, 0],
      transition: { duration: 4, repeat: Infinity },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7c3aed] opacity-20 blur-3xl rounded-full" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div custom={0} variants={fadeUp}>
            <Badge
              variant="outline"
              className="w-fit border-[#27272a] bg-[#18181b] text-[#a1a1aa] hover:bg-[#27272a]"
            >
              ✦ Ahora en Beta — Únete a 500+ marcas de ecommerce
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-5xl lg:text-6xl font-bold leading-tight text-[#fafafa]"
          >
            Tu Agencia de Marketing
            <br />
            <span className="text-[#7c3aed]">Impulsada por IA.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-lg text-[#a1a1aa] max-w-lg leading-relaxed"
          >
            Adbuxs crea anuncios, analiza tus competidores, detecta fatiga creativa y construye tu estrategia semanal — todo conectado a tu Shopify y Meta Ads.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button
              className="bg-[#7c3aed] hover:bg-[#8b5cf6] text-white rounded-full px-8 h-12 font-semibold transition-all duration-200 hover:scale-105"
              onClick={() => console.log("Start Free Trial clicked")}
            >
              Comenzar Prueba Gratis
            </Button>
            <Button
              variant="outline"
              className="border-[#27272a] text-[#fafafa] hover:bg-[#18181b] rounded-full px-8 h-12 font-semibold flex items-center gap-2"
              onClick={() => console.log("Watch Demo clicked")}
            >
              <Play size={16} />
              Ver Demo
            </Button>
          </motion.div>

          {/* Trust Text */}
          <motion.p
            custom={4}
            variants={fadeUp}
            className="text-sm text-[#71717a] pt-2"
          >
            Sin tarjeta de crédito · Configuración en 2 minutos · Cancela cuando quieras
          </motion.p>
        </motion.div>

        {/* Right - Dashboard Mockup */}
        <motion.div
          custom={2}
          variants={fadeUp}
          className="relative"
        >
          <motion.div
            className="relative"
            variants={floatVariants}
            animate="animate"
          >
            {/* Mockup Container */}
            <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#27272a]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#7c3aed]" />
                  <span className="text-sm font-semibold text-[#fafafa]">Dashboard</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#3f3f46]" />
                  <div className="w-3 h-3 rounded-full bg-[#3f3f46]" />
                  <div className="w-3 h-3 rounded-full bg-[#3f3f46]" />
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4">
              {/* ROAS Card */}
              <motion.div
                className="bg-[#09090b] border border-[#27272a] rounded-lg p-4"
                whileHover={{ scale: 1.05, borderColor: "#7c3aed" }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-xs text-[#a1a1aa] mb-2">ROAS</p>
                <p className="text-2xl font-bold text-[#7c3aed]">3.4x</p>
                <p className="text-xs text-[#10b981] mt-2">+12% esta semana</p>
              </motion.div>

              {/* CTR Card */}
              <motion.div
                className="bg-[#09090b] border border-[#27272a] rounded-lg p-4"
                whileHover={{ scale: 1.05, borderColor: "#7c3aed" }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-xs text-[#a1a1aa] mb-2">CTR</p>
                <p className="text-2xl font-bold text-[#7c3aed]">4.8%</p>
                <p className="text-xs text-[#10b981] mt-2">+2.1% esta semana</p>
              </motion.div>

              {/* Creatives Card */}
              <motion.div
                className="bg-[#09090b] border border-[#27272a] rounded-lg p-4"
                whileHover={{ scale: 1.05, borderColor: "#7c3aed" }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-xs text-[#a1a1aa] mb-2">Generados</p>
                <p className="text-2xl font-bold text-[#7c3aed]">24</p>
                <p className="text-xs text-[#a1a1aa] mt-2">Este mes</p>
              </motion.div>
              </div>

              {/* Chart Placeholder */}
              <div className="mt-6 pt-6 border-t border-[#27272a]">
                <div className="flex items-end justify-between h-16 gap-2">
                  {[40, 60, 45, 80, 55, 70, 65].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-[#7c3aed] to-[#8b5cf6] rounded-t opacity-60 hover:opacity-100 transition-opacity"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[#7c3aed] opacity-10 blur-3xl rounded-2xl -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
