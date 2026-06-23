import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

/**
 * About Page - Adbuxs
 * 
 * Secciones:
 * - Hero con misión
 * - Equipo fundador
 * - Valores
 * - Timeline
 */
export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const values = [
    {
      icon: Target,
      title: "Enfoque en el Cliente",
      description: "Cada decisión que tomamos está centrada en resolver problemas reales de nuestros usuarios.",
    },
    {
      icon: Lightbulb,
      title: "Innovación Constante",
      description: "Utilizamos las últimas tecnologías de IA para mantener a Adbuxs siempre a la vanguardia.",
    },
    {
      icon: Heart,
      title: "Transparencia",
      description: "Creemos en la honestidad total con nuestros clientes sobre capacidades y limitaciones.",
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Construimos una comunidad de emprendedores que se ayudan mutuamente a crecer.",
    },
  ];

  const team = [
    {
      name: "Carlos Mendez",
      role: "CEO & Co-Founder",
      bio: "Exempresario de ecommerce con 8 años de experiencia en marketing digital. Vendió su primera tienda en Shopify por $2M.",
      initials: "CM",
      color: "#7c3aed",
    },
    {
      name: "Sofia Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ingeniera de IA con experiencia en OpenAI y Anthropic. Especialista en generación de contenido con LLMs.",
      initials: "SR",
      color: "#8b5cf6",
    },
    {
      name: "Diego Fernandez",
      role: "Head of Product",
      bio: "Ex-Product Manager en Meta Ads. Lideró equipos de 20+ personas en optimización de plataformas.",
      initials: "DF",
      color: "#a78bfa",
    },
  ];

  const timeline = [
    {
      year: "2023",
      title: "Fundación de Adbuxs",
      description: "Carlos y Sofia se unen para resolver el problema de la creación manual de contenido publicitario.",
    },
    {
      year: "2024 Q1",
      title: "Primer MVP",
      description: "Lanzamos la versión beta con generación de copy y análisis de competidores.",
    },
    {
      year: "2024 Q2",
      title: "500+ Usuarios Beta",
      description: "Alcanzamos 500 usuarios activos con 85% de retención mensual.",
    },
    {
      year: "2024 Q3",
      title: "Ronda Seed",
      description: "Aseguramos $1.2M en financiamiento de inversores ángel y VCs.",
    },
    {
      year: "2024 Q4",
      title: "Lanzamiento Oficial",
      description: "Adbuxs sale de beta con planes Pro, Starter y Agency.",
    },
    {
      year: "2025 Q1",
      title: "Expansión Global",
      description: "Lanzamos soporte en español, portugués y francés.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa]">
      <Navbar />

      {/* Hero */}
      <section className="py-20 border-b border-[#27272a]">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Nuestra Misión: Democratizar el Marketing de IA
            </h1>
            <p className="text-xl text-[#a1a1aa] mb-8">
              Creemos que cada emprendedor merece acceso a herramientas de marketing de nivel empresarial sin pagar precios de agencia.
            </p>
            <Button className="bg-[#7c3aed] hover:bg-[#8b5cf6] text-white rounded-full px-8 h-12 font-semibold">
              Únete a Nosotros
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Nuestros Valores
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  className="bg-[#18181b] border border-[#27272a] rounded-xl p-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  whileHover={{ y: -4, borderColor: "#7c3aed" }}
                >
                  <Icon className="w-8 h-8 text-[#7c3aed] mb-4" />
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-[#a1a1aa]">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#18181b]">
        <div className="container">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Nuestro Equipo
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="bg-[#09090b] border border-[#27272a] rounded-xl p-8 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-[#7c3aed] font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-[#a1a1aa]">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Nuestro Viaje
          </motion.h2>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-6 mb-12 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#7c3aed] mb-2" />
                  {i < timeline.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-[#7c3aed] to-[#27272a]" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <div className="text-sm font-bold text-[#7c3aed] mb-1">{item.year}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-[#a1a1aa]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#09090b] to-[#1a0f2e] border-t border-[#27272a]">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold mb-4">¿Quieres Ser Parte de Adbuxs?</h2>
            <p className="text-lg text-[#a1a1aa] mb-8 max-w-2xl mx-auto">
              Estamos buscando talento apasionado para unirse a nuestro equipo y revolucionar el marketing.
            </p>
            <Button className="bg-[#7c3aed] hover:bg-[#8b5cf6] text-white rounded-full px-8 h-12 font-semibold">
              Ver Posiciones Abiertas
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
