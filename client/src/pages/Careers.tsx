import { motion } from "framer-motion";
import { MapPin, DollarSign, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

/**
 * Careers Page - Adbuxs
 * 
 * Secciones:
 * - Hero con cultura
 * - Beneficios
 * - Posiciones abiertas
 */
export default function Careers() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const benefits = [
    {
      title: "Salario Competitivo",
      description: "Pagamos al percentil 75 del mercado en tu ubicación.",
    },
    {
      title: "Equity",
      description: "Todos los empleados reciben opciones de acciones en la empresa.",
    },
    {
      title: "Trabajo Remoto",
      description: "100% remoto. Trabaja desde donde quieras en cualquier zona horaria.",
    },
    {
      title: "Seguro de Salud",
      description: "Cobertura completa de salud, dental y visión para ti y tu familia.",
    },
    {
      title: "Desarrollo Profesional",
      description: "Presupuesto anual de $2,000 para cursos, conferencias y certificaciones.",
    },
    {
      title: "Tiempo Libre Ilimitado",
      description: "Tomamos en serio el balance trabajo-vida. Vacaciones ilimitadas.",
    },
  ];

  const positions = [
    {
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "Remoto",
      salary: "$120k - $160k",
      type: "Full-time",
      description: "Buscamos un ingeniero senior para liderar nuestro stack de React + Node.js.",
    },
    {
      title: "AI/ML Engineer",
      department: "Product",
      location: "Remoto",
      salary: "$130k - $180k",
      type: "Full-time",
      description: "Especialista en LLMs para mejorar nuestros modelos de generación de contenido.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remoto",
      salary: "$100k - $140k",
      type: "Full-time",
      description: "Lidera la estrategia de producto y roadmap de Adbuxs.",
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "Remoto",
      salary: "$50k + comisión",
      type: "Full-time",
      description: "Genera leads y cierra deals con agencias y ecommerce stores.",
    },
    {
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "Remoto",
      salary: "$60k - $80k",
      type: "Full-time",
      description: "Crea contenido que posicione a Adbuxs como líder de pensamiento.",
    },
    {
      title: "Customer Success Manager",
      department: "Success",
      location: "Remoto",
      salary: "$70k - $90k",
      type: "Full-time",
      description: "Asegura que nuestros clientes obtengan máximo valor de Adbuxs.",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Únete al Equipo Adbuxs</h1>
            <p className="text-xl text-[#a1a1aa] mb-8">
              Estamos construyendo el futuro del marketing con IA. Si eres apasionado por la tecnología y el emprendimiento, queremos hablar contigo.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-[#7c3aed] hover:bg-[#8b5cf6] text-white rounded-full px-8 h-12 font-semibold">
                Ver Posiciones
              </Button>
              <Button
                variant="outline"
                className="border-[#27272a] text-[#fafafa] hover:bg-[#18181b] rounded-full px-8 h-12"
              >
                Enviar CV
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-[#18181b]">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold mb-4">Nuestra Cultura</h2>
            <p className="text-lg text-[#a1a1aa]">
              En Adbuxs creemos en la excelencia, la innovación y el crecimiento continuo. Nuestro equipo es diverso, talentoso y comprometido con cambiar el marketing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { emoji: "🚀", title: "Impacto", desc: "Tu trabajo afecta a miles de emprendedores" },
              { emoji: "🧠", title: "Aprendizaje", desc: "Trabajas con las mejores tecnologías" },
              { emoji: "🤝", title: "Comunidad", desc: "Equipo colaborativo y solidario" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#09090b] border border-[#27272a] rounded-xl p-6 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[#a1a1aa]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Beneficios Increíbles
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                className="bg-[#18181b] border border-[#27272a] rounded-xl p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-[#a1a1aa]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-[#18181b]">
        <div className="container">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Posiciones Abiertas
          </motion.h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            {positions.map((position, i) => (
              <motion.div
                key={i}
                className="bg-[#09090b] border border-[#27272a] rounded-xl p-6 hover:border-[#7c3aed] transition-all cursor-pointer group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-[#7c3aed] transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-sm text-[#7c3aed]">{position.department}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#7c3aed] group-hover:translate-x-1 transition-transform" />
                </div>

                <p className="text-sm text-[#a1a1aa] mb-4">{position.description}</p>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-[#a1a1aa]">
                    <MapPin size={16} />
                    {position.location}
                  </div>
                  <div className="flex items-center gap-2 text-[#a1a1aa]">
                    <DollarSign size={16} />
                    {position.salary}
                  </div>
                  <div className="flex items-center gap-2 text-[#a1a1aa]">
                    <Briefcase size={16} />
                    {position.type}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Button className="bg-[#7c3aed] hover:bg-[#8b5cf6] text-white rounded-full px-8 h-12 font-semibold">
              Aplicar Ahora
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold mb-4">¿No Ves Tu Rol Ideal?</h2>
            <p className="text-lg text-[#a1a1aa] mb-8 max-w-2xl mx-auto">
              Siempre estamos buscando talento excepcional. Envíanos tu CV y cuéntanos cómo podrías contribuir a Adbuxs.
            </p>
            <Button className="bg-[#7c3aed] hover:bg-[#8b5cf6] text-white rounded-full px-8 h-12 font-semibold">
              Enviar CV Especulativo
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
