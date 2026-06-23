import { motion } from "framer-motion";
import { Quote } from "lucide-react";

/**
 * Testimonials Component - Kreio Landing
 * 
 * Design Notes:
 * - 3 cards con quote, avatar (iniciales + color), nombre, rol, país
 * - Borde izquierdo violeta
 */
export default function Testimonials() {
  const testimonials = [
    {
      quote: "Solía gastar 3 horas diarias creando contenido. Ahora apruebo lo que Adbuxs genera en 20 minutos y mi ROAS pasó de 1.8x a 3.4x en 6 semanas.",
      author: "Carlos M.",
      role: "Dueño de tienda Shopify",
      country: "🇬🇳",
      initials: "CM",
      color: "#7c3aed",
    },
    {
      quote: "La función de inteligencia competitiva por sóla vale la suscripción. Puedo ver exactamente qué ángulos funcionan en mi nicho ahora y reaccionar antes que mi competencia.",
      author: "Laura V.",
      role: "Infoproductora",
      country: "🇞🇴",
      initials: "LV",
      color: "#8b5cf6",
    },
    {
      quote: "Como agencia manejamos 8 clientes. Adbuxs redujo nuestro tiempo de producción creativa en 70%. Ahora tomamos más clientes sin contratar.",
      author: "Diego R.",
      role: "Agencia de Marketing",
      country: "🇦🇷",
      initials: "DR",
      color: "#a78bfa",
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
    <section className="py-20">
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
            Resultados reales de marcas reales
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-[#18181b] border-l-4 border-[#7c3aed] rounded-lg p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              {/* Quote Icon */}
              <Quote className="w-6 h-6 text-[#7c3aed] mb-4 opacity-50" />

              {/* Quote */}
              <p className="text-[#a1a1aa] mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: testimonial.color }}
                >
                  {testimonial.initials}
                </div>

                {/* Info */}
                <div>
                  <p className="text-[#fafafa] font-semibold text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-[#a1a1aa] text-xs">
                    {testimonial.role} {testimonial.country}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
