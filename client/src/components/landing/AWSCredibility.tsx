import { motion } from "framer-motion";
import { Cloud, Lock, CheckCircle, Shield, TrendingUp, Users } from "lucide-react";

/**
 * AWSCredibility Component - Adbuxs Landing
 * 
 * Design Notes:
 * - Sección dedicada a credibilidad AWS
 * - Certificaciones, compliance, infraestructura
 * - Diseño premium con iconos de confianza
 */
export default function AWSCredibility() {
  const credentials = [
    {
      icon: Cloud,
      title: "Infraestructura AWS",
      description: "Alojado en AWS con escalabilidad automática, garantizando 99.99% de disponibilidad",
    },
    {
      icon: Lock,
      title: "Encriptación End-to-End",
      description: "Todos los datos encriptados en tránsito y en reposo con estándares AES-256",
    },
    {
      icon: Shield,
      title: "Cumplimiento GDPR",
      description: "Cumplimiento total con regulaciones GDPR, CCPA y estándares de privacidad internacionales",
    },
    {
      icon: CheckCircle,
      title: "Certificación SOC 2 Tipo II",
      description: "Auditado y certificado para seguridad, disponibilidad e integridad de datos",
    },
    {
      icon: TrendingUp,
      title: "Escalabilidad Probada",
      description: "Soporta miles de usuarios simultáneos sin degradación de rendimiento",
    },
    {
      icon: Users,
      title: "Soporte 24/7",
      description: "Equipo técnico disponible 24/7 para asistencia y resolución de problemas",
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
    <section className="py-20 bg-gradient-to-b from-[#09090b] to-[#1a0f2e]">
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
            Construido con Estándares Empresariales
          </h2>
          <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
            Adbuxs cumple con los más altos estándares de seguridad, privacidad y conformidad regulatoria requeridos por empresas Fortune 500 y startups de rápido crecimiento.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            return (
              <motion.div
                key={i}
                className="bg-[#18181b] border border-[#27272a] rounded-xl p-6 hover:border-[#7c3aed] transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -4, borderColor: "#7c3aed" }}
              >
                <Icon className="w-8 h-8 text-[#7c3aed] mb-4" />
                <h3 className="text-lg font-semibold text-[#fafafa] mb-2">
                  {cred.title}
                </h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  {cred.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* AWS Specific Benefits */}
        <motion.div
          className="bg-[#18181b] border-2 border-[#7c3aed] rounded-2xl p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left */}
            <div>
              <h3 className="text-2xl font-bold text-[#fafafa] mb-4">
                ¿Por qué AWS?
              </h3>
              <ul className="space-y-3">
                {[
                  "Infraestructura global con 30+ regiones",
                  "Redundancia automática y failover",
                  "Monitoreo 24/7 con CloudWatch",
                  "Backups automáticos y recuperación de desastres",
                  "Cumplimiento con estándares ISO 27001",
                  "Certificaciones de seguridad internacionales",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#a1a1aa]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div>
              <h3 className="text-2xl font-bold text-[#fafafa] mb-4">
                Compromiso con la Excelencia
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-[#a1a1aa]">Disponibilidad</span>
                    <span className="text-sm font-bold text-[#7c3aed]">99.99%</span>
                  </div>
                  <div className="w-full h-2 bg-[#27272a] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#7c3aed] to-[#8b5cf6]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "99.99%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-[#a1a1aa]">Seguridad de Datos</span>
                    <span className="text-sm font-bold text-[#7c3aed]">100%</span>
                  </div>
                  <div className="w-full h-2 bg-[#27272a] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#10b981] to-[#059669]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-[#a1a1aa]">Cumplimiento Regulatorio</span>
                    <span className="text-sm font-bold text-[#7c3aed]">100%</span>
                  </div>
                  <div className="w-full h-2 bg-[#27272a] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#f59e0b] to-[#d97706]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
