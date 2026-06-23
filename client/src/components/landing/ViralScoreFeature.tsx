import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

/**
 * ViralScoreFeature Component - Kreio Landing
 * 
 * Design Notes:
 * - Sección especial con fondo violeta/gradient sutil
 * - Score circular grande: 87/100
 * - 4 barras de progreso
 * - Tag verde: High viral potential
 */
export default function ViralScoreFeature() {
  const metrics = [
    { label: "Hook Strength", value: 92 },
    { label: "Retention", value: 85 },
    { label: "Content Quality", value: 88 },
    { label: "CTA", value: 80 },
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
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#7c3aed] opacity-10 blur-3xl rounded-full" />
      </div>

      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#fafafa] mb-4">
              Sube tu Reel. Sabe si se volvera viral antes de publicarlo.
            </h2>
            <p className="text-lg text-[#a1a1aa]">
              Adbuxs analiza la fuerza del hook de tu video, tasa de retención estimada, efectividad del CTA y calidad del contenido — luego te da un score de 0 a 100 con recomendaciones específicas para mejorarlo.
            </p>
          </div>

          {/* Score Card */}
          <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Score Circle */}
              <motion.div
                className="flex justify-center"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  <div className="absolute inset-0 rounded-full border-8 border-[#27272a]" />
                  <div
                    className="absolute inset-0 rounded-full border-8 border-transparent border-t-[#7c3aed] border-r-[#7c3aed]"
                    style={{
                      transform: "rotate(180deg)",
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl md:text-6xl font-bold text-[#7c3aed]">87</span>
                    <span className="text-[#a1a1aa] text-sm">/100</span>
                  </div>
                </div>
              </motion.div>

              {/* Metrics */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {metrics.map((metric, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#fafafa]">
                        {metric.label}
                      </span>
                      <span className="text-sm font-bold text-[#7c3aed]">
                        {metric.value}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[#27272a] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#7c3aed] to-[#8b5cf6]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                      />
                    </div>
                  </div>
                ))}

                {/* Status Badge */}
                <div className="pt-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#10b981]" />
                  <span className="text-sm font-medium text-[#10b981]">
                    Alto potencial viral
                  </span>
                </div>

                {/* CTA */}
                <Button className="w-full bg-[#7c3aed] hover:bg-[#8b5cf6] text-white rounded-lg mt-6">
                  Mejorar con IA →
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
