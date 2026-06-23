import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

/**
 * Blog Page - Adbuxs
 * 
 * Secciones:
 * - Grid de artículos
 * - Categorías
 * - Búsqueda
 */
export default function Blog() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const posts = [
    {
      id: 1,
      title: "Cómo 2.3x tu ROAS en 30 Días con IA",
      excerpt: "Descubre las estrategias que nuestros clientes usan para multiplicar su retorno de inversión en publicidad.",
      category: "Marketing",
      author: "Carlos Mendez",
      date: "15 Jun 2025",
      image: "🚀",
      readTime: "8 min",
    },
    {
      id: 2,
      title: "La Fatiga Creativa: Por Qué Tus Anuncios Mueren",
      excerpt: "Explicamos qué es la fatiga creativa, cómo detectarla y las mejores prácticas para prevenirla.",
      category: "Estrategia",
      author: "Sofia Rodriguez",
      date: "12 Jun 2025",
      image: "📊",
      readTime: "6 min",
    },
    {
      id: 3,
      title: "Inteligencia Competitiva: Espía a Tus Competidores Legalmente",
      excerpt: "Cómo usar la Biblioteca de Anuncios de Meta para analizar estrategias de competidores exitosos.",
      category: "Competencia",
      author: "Diego Fernandez",
      date: "10 Jun 2025",
      image: "🔍",
      readTime: "7 min",
    },
    {
      id: 4,
      title: "Automatización de Marketing: El Futuro es Ahora",
      excerpt: "Por qué la automatización es clave para escalar tu negocio sin aumentar costos operacionales.",
      category: "Automatización",
      author: "Carlos Mendez",
      date: "8 Jun 2025",
      image: "⚙️",
      readTime: "9 min",
    },
    {
      id: 5,
      title: "Generación de Contenido con IA: Guía Completa",
      excerpt: "Todo lo que necesitas saber sobre cómo usar IA para crear contenido publicitario de alta calidad.",
      category: "IA",
      author: "Sofia Rodriguez",
      date: "5 Jun 2025",
      image: "🤖",
      readTime: "10 min",
    },
    {
      id: 6,
      title: "Casos de Éxito: De $0 a $100k MRR en 6 Meses",
      excerpt: "Historias reales de emprendedores que escalaron sus negocios usando Adbuxs.",
      category: "Casos de Éxito",
      author: "Diego Fernandez",
      date: "1 Jun 2025",
      image: "💰",
      readTime: "12 min",
    },
  ];

  const categories = [
    { name: "Todos", count: 24 },
    { name: "Marketing", count: 8 },
    { name: "IA", count: 6 },
    { name: "Estrategia", count: 5 },
    { name: "Casos de Éxito", count: 5 },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog de Adbuxs</h1>
            <p className="text-xl text-[#a1a1aa]">
              Aprende estrategias de marketing, tips de IA y casos de éxito de emprendedores que escalan con Adbuxs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6 sticky top-20">
                <h3 className="text-lg font-bold mb-4">Categorías</h3>
                <div className="space-y-3">
                  {categories.map((cat, i) => (
                    <button
                      key={i}
                      className="w-full text-left px-4 py-2 rounded-lg hover:bg-[#27272a] transition-colors text-sm"
                    >
                      <span className="font-medium">{cat.name}</span>
                      <span className="text-[#71717a] ml-2">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post, i) => (
                  <motion.article
                    key={post.id}
                    className="bg-[#18181b] border border-[#27272a] rounded-xl overflow-hidden hover:border-[#7c3aed] transition-all duration-300 cursor-pointer group"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                  >
                    {/* Image */}
                    <div className="w-full h-40 bg-gradient-to-br from-[#7c3aed] to-[#1a0f2e] flex items-center justify-center text-6xl">
                      {post.image}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-[#7c3aed] bg-[#7c3aed]/10 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-[#71717a]">{post.readTime}</span>
                      </div>

                      <h3 className="text-lg font-bold mb-2 group-hover:text-[#7c3aed] transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-sm text-[#a1a1aa] mb-4">{post.excerpt}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-[#27272a]">
                        <div className="text-xs text-[#71717a]">
                          <div className="flex items-center gap-2 mb-1">
                            <User size={14} />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            {post.date}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#7c3aed] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              <motion.div
                className="flex justify-center gap-2 mt-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                {[1, 2, 3, 4].map((page) => (
                  <button
                    key={page}
                    className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                      page === 1
                        ? "bg-[#7c3aed] text-white"
                        : "bg-[#18181b] text-[#a1a1aa] hover:border-[#7c3aed] border border-[#27272a]"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#18181b] border-t border-[#27272a]">
        <div className="container max-w-2xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-4">No Te Pierdas Nuestros Artículos</h2>
            <p className="text-[#a1a1aa] mb-6">
              Suscríbete a nuestro newsletter para recibir tips de marketing y IA directamente en tu inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 bg-[#09090b] border border-[#27272a] rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#71717a] focus:outline-none focus:border-[#7c3aed]"
              />
              <button className="bg-[#7c3aed] hover:bg-[#8b5cf6] text-white rounded-lg px-6 py-3 font-semibold transition-all">
                Suscribir
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
