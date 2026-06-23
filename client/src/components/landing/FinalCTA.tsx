import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

/**
 * FinalCTA Component - Kreio Landing
 * 
 * Design Notes:
 * - Fondo: gradient de zinc-950 a violet-950
 * - Título y subtítulo grandes
 * - 2 CTAs: primario y secundario
 */
export default function FinalCTA() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#09090b] to-[#1a0f2e]" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7c3aed] opacity-15 blur-3xl rounded-full" />
      </div>

      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#fafafa] mb-4 leading-tight">
            Deja de pagar precios de agencia por demoras de agencia.
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#a1a1aa] mb-8">
            Únete a 500+ marcas que ya usan Adbuxs para crear, publicar y optimizar — automáticamente.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              className="bg-[#7c3aed] hover:bg-[#8b5cf6] text-white rounded-full px-8 h-12 font-semibold transition-all duration-200 hover:scale-105"
              onClick={() => console.log("Start Your Free Trial clicked")}
            >
              Comenzar Prueba Gratis
            </Button>
            <Button
              variant="outline"
              className="border-[#27272a] text-[#fafafa] hover:bg-[#18181b] rounded-full px-8 h-12 font-semibold"
              onClick={() => console.log("Book a Demo clicked")}
            >
              Agendar Demo
            </Button>
          </div>

          {/* Trust Text */}
          <p className="text-sm text-[#71717a]">
            Sin tarjeta de crédito · Configuración en 2 minutos · Cancela cuando quieras
          </p>
        </motion.div>
      </div>
    </section>
  );
}
