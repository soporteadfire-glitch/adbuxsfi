import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/**
 * ROICalculator Component - Adbuxs Landing
 * 
 * Design Notes:
 * - Calculadora interactiva de ROI
 * - Muestra ahorro de costos y mejora de ROAS
 * - Elementos animados con valores dinámicos
 */
export default function ROICalculator() {
  const [monthlyAdSpend, setMonthlyAdSpend] = useState(5000);
  const [currentROAS, setCurrentROAS] = useState(1.5);

  // Cálculos
  const currentRevenue = monthlyAdSpend * currentROAS;
  const improvedROAS = currentROAS * 2.3; // 2.3x mejora promedio
  const improvedRevenue = monthlyAdSpend * improvedROAS;
  const additionalRevenue = improvedRevenue - currentRevenue;
  const agencyCost = 3000; // Costo típico de agencia
  const adbuxsCost = 99; // Plan Pro
  const monthlySavings = agencyCost - adbuxsCost;
  const totalMonthlyGain = additionalRevenue + monthlySavings;
  const annualGain = totalMonthlyGain * 12;

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-[#09090b]">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#fafafa] mb-4">
            Calcula tu ROI con Adbuxs
          </h2>
          <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
            Descubre cuánto puedes ahorrar y ganar reemplazando tu agencia con Adbuxs
          </p>
        </motion.div>

        {/* Calculator */}
        <motion.div
          className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#fafafa] mb-3">
                  Gasto Mensual en Ads
                </label>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={monthlyAdSpend}
                  onChange={(e) => setMonthlyAdSpend(Number(e.target.value))}
                  className="w-full h-2 bg-[#27272a] rounded-lg appearance-none cursor-pointer accent-[#7c3aed]"
                />
                <div className="mt-2 text-2xl font-bold text-[#7c3aed]">
                  ${monthlyAdSpend.toLocaleString()}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#fafafa] mb-3">
                  ROAS Actual
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="5"
                  step="0.1"
                  value={currentROAS}
                  onChange={(e) => setCurrentROAS(Number(e.target.value))}
                  className="w-full h-2 bg-[#27272a] rounded-lg appearance-none cursor-pointer accent-[#7c3aed]"
                />
                <div className="mt-2 text-2xl font-bold text-[#7c3aed]">
                  {currentROAS.toFixed(1)}x
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <motion.div
                className="bg-[#09090b] border border-[#27272a] rounded-lg p-4"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-sm text-[#a1a1aa] mb-1">Ingresos Actuales</p>
                <p className="text-2xl font-bold text-[#fafafa]">
                  ${currentRevenue.toLocaleString("es-ES", { maximumFractionDigits: 0 })}
                </p>
              </motion.div>

              <motion.div
                className="bg-[#09090b] border border-[#27272a] rounded-lg p-4"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-sm text-[#a1a1aa] mb-1">Ingresos Proyectados</p>
                <p className="text-2xl font-bold text-[#10b981]">
                  ${improvedRevenue.toLocaleString("es-ES", { maximumFractionDigits: 0 })}
                </p>
              </motion.div>

              <motion.div
                className="bg-[#09090b] border border-[#27272a] rounded-lg p-4"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm text-[#a1a1aa] mb-1">Ahorro Mensual</p>
                <p className="text-2xl font-bold text-[#f59e0b]">
                  ${monthlySavings.toLocaleString()}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Summary */}
          <motion.div
            className="mt-8 pt-8 border-t border-[#27272a]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-[#a1a1aa] mb-2">Ganancia Mensual Total</p>
                <p className="text-3xl font-bold text-[#7c3aed]">
                  ${totalMonthlyGain.toLocaleString("es-ES", { maximumFractionDigits: 0 })}
                </p>
                <p className="text-xs text-[#71717a] mt-1">
                  Ingresos adicionales + ahorro en agencia
                </p>
              </div>

              <div>
                <p className="text-sm text-[#a1a1aa] mb-2">Ganancia Anual Proyectada</p>
                <p className="text-3xl font-bold text-[#10b981]">
                  ${annualGain.toLocaleString("es-ES", { maximumFractionDigits: 0 })}
                </p>
                <p className="text-xs text-[#71717a] mt-1">
                  En tu primer año con Adbuxs
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button className="bg-[#7c3aed] hover:bg-[#8b5cf6] text-white rounded-full px-8 h-12 font-semibold">
              Comenzar Prueba Gratis
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
