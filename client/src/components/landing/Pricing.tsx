import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useState } from "react";

/**
 * Pricing Component - Kreio Landing
 * 
 * Design Notes:
 * - Toggle mensual/anual (anual = 20% off)
 * - 3 cards — Pro card más grande con borde violeta
 * - Badge "Most Popular" en Pro
 */
export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 49,
      features: [
        "1 marca",
        "30 contenidos IA/mes",
        "Análisis de competidores",
        "Auto-publicación (Instagram + Facebook)",
        "Smart Tracker básico",
        "Soporte por email",
      ],
      cta: "Comenzar Prueba Gratis",
      popular: false,
    },
    {
      name: "Pro",
      monthlyPrice: 99,
      features: [
        "3 marcas",
        "Contenidos IA ilimitados",
        "Buscador de productos ganadores",
        "Detector de fatiga creativa",
        "Analizador de score viral",
        "Reporte CMO semanal",
        "Soporte prioritario",
      ],
      cta: "Comenzar Prueba Gratis",
      popular: true,
    },
    {
      name: "Agency",
      monthlyPrice: 199,
      features: [
        "10 marcas / espacios de clientes",
        "Reportes white-label",
        "Acceso a API",
        "Onboarding dedicado",
        "Soporte por Slack",
      ],
      cta: "Contactar Ventas",
      popular: false,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const getPrice = (monthlyPrice: number) => {
    if (isAnnual) {
      return Math.round(monthlyPrice * 12 * 0.8);
    }
    return monthlyPrice;
  };

  return (
    <section id="pricing" className="py-20">
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#fafafa] mb-4">
            Resultados de agencia. Precios SaaS.
          </h2>
          <p className="text-lg text-[#a1a1aa] mb-8">
            Sin contratos. Cancela cuando quieras. Prueba gratis de 14 días en todos los planes.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? "text-[#fafafa]" : "text-[#a1a1aa]"}`}>
              Mensual
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-[#27272a]"
            >
              <motion.div
                className="inline-flex h-6 w-6 transform rounded-full bg-[#7c3aed]"
                animate={{ x: isAnnual ? 28 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
              />
            </button>
            <span className={`text-sm ${isAnnual ? "text-[#fafafa]" : "text-[#a1a1aa]"}`}>
              Anual
            </span>
            {isAnnual && (
              <Badge className="bg-[#10b981] text-white hover:bg-[#059669]">
                Ahorra 20%
              </Badge>
            )}
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? "md:scale-105 bg-[#18181b] border-2 border-[#7c3aed]"
                  : "bg-[#18181b] border border-[#27272a]"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[#7c3aed] text-white hover:bg-[#8b5cf6]">
                    Más Popular
                  </Badge>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-[#fafafa] mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#fafafa]">
                    ${getPrice(plan.monthlyPrice)}
                  </span>
                  <span className="text-[#a1a1aa] text-sm">
                    {isAnnual ? "/año" : "/mes"}
                  </span>
                </div>

                {/* CTA */}
                <Button
                  className={`w-full mb-8 rounded-lg h-10 font-semibold ${
                    plan.popular
                      ? "bg-[#7c3aed] hover:bg-[#8b5cf6] text-white"
                      : "bg-[#27272a] hover:bg-[#3f3f46] text-[#fafafa]"
                  }`}
                >
                  {plan.cta}
                </Button>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#7c3aed] flex-shrink-0" />
                      <span className="text-[#a1a1aa] text-sm">{feature}</span>
                    </div>
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
