import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * HowItWorks Component - Kreio Landing
 * 
 * Design Notes:
 * - 3 pasos grandes con número violeta
 * - Línea conectora entre ellos
 * - Fade up staggered
 */
export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Conecta tu tienda",
      description: "Vincula Shopify y Meta Ads en un clic. Adbuxs lee tus productos, historial de ventas y desempeño de anuncios al instante.",
    },
    {
      number: "02",
      title: "Genera y revisa",
      description: "Ingresa un producto o brief. Adbuxs crea copy, scripts UGC e imágenes en segundos. Tú apruebas lo que te gusta — nada se publica sin ti.",
    },
    {
      number: "03",
      title: "Publica y optimiza",
      description: "Programa en todas las plataformas. Adbuxs monitorea el desempeño, detecta fatiga, y te dice exactamente qué hacer cada lunes por la mañana.",
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

  return (
    <section className="py-20 relative">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#fafafa]">
            De cero a publicado en menos de 5 minutos.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#7c3aed] via-[#7c3aed] to-transparent opacity-30" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              {/* Step Card */}
              <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-8 relative z-10">
                {/* Number */}
                <div className="text-5xl font-bold text-[#7c3aed] mb-4">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#fafafa] mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#a1a1aa] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-20">
                  <ArrowRight className="w-8 h-8 text-[#7c3aed]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
