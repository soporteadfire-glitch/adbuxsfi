import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useState } from "react";

/**
 * Contact Page - Adbuxs
 * 
 * Secciones:
 * - Formulario de contacto
 * - Información de contacto
 * - FAQ
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "support@adbuxs.com",
      description: "Respuesta en 24 horas",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+1 (555) 123-4567",
      description: "Lun-Vie 9am-6pm EST",
    },
    {
      icon: MessageSquare,
      title: "Chat en Vivo",
      value: "Disponible 24/7",
      description: "Soporte instantáneo",
    },
    {
      icon: MapPin,
      title: "Oficina",
      value: "San Francisco, CA",
      description: "Visítanos si estás en la zona",
    },
  ];

  const faqs = [
    {
      q: "¿Cuál es el tiempo de respuesta del soporte?",
      a: "Respondemos todos los tickets en menos de 24 horas. Los clientes Pro y Agency tienen soporte prioritario con respuesta en 2 horas.",
    },
    {
      q: "¿Ofrecen demostraciones personalizadas?",
      a: "Sí, ofrecemos demostraciones gratuitas de 30 minutos. Agenda una en nuestro calendario.",
    },
    {
      q: "¿Cuál es la política de cancelación?",
      a: "Puedes cancelar tu suscripción en cualquier momento. Sin penalizaciones ni cargos ocultos.",
    },
    {
      q: "¿Tienen integración con Shopify?",
      a: "Sí, Adbuxs se integra nativamente con Shopify. Conecta tu tienda en 2 minutos.",
    },
    {
      q: "¿Qué métodos de pago aceptan?",
      a: "Aceptamos tarjetas de crédito (Visa, Mastercard, Amex), PayPal y transferencias bancarias para planes anuales.",
    },
    {
      q: "¿Hay descuentos para agencias?",
      a: "Sí, nuestro plan Agency incluye soporte white-label y descuentos por volumen. Contacta a ventas.",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contáctanos</h1>
            <p className="text-xl text-[#a1a1aa]">
              ¿Preguntas sobre Adbuxs? Nuestro equipo está aquí para ayudarte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={i}
                  className="bg-[#18181b] border border-[#27272a] rounded-xl p-6 text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                >
                  <Icon className="w-8 h-8 text-[#7c3aed] mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{method.title}</h3>
                  <p className="font-semibold text-[#7c3aed] mb-1">{method.value}</p>
                  <p className="text-sm text-[#a1a1aa]">{method.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nombre</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#18181b] border border-[#27272a] rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#71717a] focus:outline-none focus:border-[#7c3aed]"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#18181b] border border-[#27272a] rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#71717a] focus:outline-none focus:border-[#7c3aed]"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Asunto</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#18181b] border border-[#27272a] rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#71717a] focus:outline-none focus:border-[#7c3aed]"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Mensaje</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-[#18181b] border border-[#27272a] rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#71717a] focus:outline-none focus:border-[#7c3aed] resize-none"
                    placeholder="Cuéntanos más..."
                    required
                  />
                </div>

                <Button className="w-full bg-[#7c3aed] hover:bg-[#8b5cf6] text-white rounded-lg h-12 font-semibold">
                  Enviar Mensaje
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-6">Información Adicional</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">Horario de Atención</h3>
                  <p className="text-[#a1a1aa]">
                    Lunes a Viernes: 9:00 AM - 6:00 PM EST
                    <br />
                    Sábado y Domingo: Soporte por email
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Tiempo de Respuesta</h3>
                  <p className="text-[#a1a1aa]">
                    Generalmente respondemos en menos de 24 horas. Los clientes Pro y Agency tienen prioridad.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Síguenos en Redes</h3>
                  <div className="flex gap-4">
                    {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-[#7c3aed] hover:text-[#8b5cf6] font-semibold"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#18181b]">
        <div className="container max-w-3xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Preguntas Frecuentes
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-[#09090b] border border-[#27272a] rounded-xl p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <h3 className="font-bold text-lg mb-3 text-[#7c3aed]">{faq.q}</h3>
                <p className="text-[#a1a1aa]">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
