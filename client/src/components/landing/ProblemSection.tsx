import { motion } from "framer-motion";
import { AlertCircle, ArrowDown } from "lucide-react";

/**
 * ProblemSection Component - Kreio Landing
 * 
 * Design Notes:
 * - Título: "Running a business shouldn't mean running 12 different tools."
 * - Grid 2x2, cards con borde rojo/naranja sutil y ícono
 * - Flecha hacia abajo con texto: "There's a better way →"
 */
export default function ProblemSection() {
  const problems = [
    "Pagando $3,000/mes a una agencia que pierde plazos y entrega contenido genérico",
    "Gastando 3+ horas diarias creando contenido que se quema en 2 semanas",
    "Sin visibilidad de lo que tus competidores están ejecutando ahora mismo",
    "Tu mejor anuncio murió en silencio mientras estabas enfocado en otra cosa",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 },
    }),
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#fafafa] mb-4">
            Dirigir un negocio no debería significar usar 12 herramientas diferentes.
          </h2>
          <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
            Cada día, dueños de ecommerce e infoproductores pierden horas — y miles de dólares — en herramientas fragmentadas que no se comunican entre sí.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              className="bg-[#18181b] border-l-4 border-[#f59e0b] rounded-lg p-6 hover:border-[#ef4444] transition-colors duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-[#ef4444] flex-shrink-0 mt-1" />
                <p className="text-[#a1a1aa] leading-relaxed">{problem}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow CTA */}
        <motion.div
          className="flex justify-center items-center gap-2 text-[#a1a1aa] hover:text-[#7c3aed] transition-colors cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          variants={fadeUp}
        >
          <span className="text-sm font-medium">Hay una mejor forma</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
