import { motion } from "framer-motion";
import { FileText, Zap, Database, Key, AlertCircle, BarChart3 } from "lucide-react";

/**
 * ComplianceAndSecurity Component - Adbuxs Landing
 * 
 * Design Notes:
 * - Sección de compliance y seguridad técnica
 * - Detalles para AWS y empresas
 */
export default function ComplianceAndSecurity() {
  const items = [
    {
      icon: FileText,
      title: "Cumplimiento GDPR & CCPA",
      details: [
        "Derecho al olvido implementado",
        "Consentimiento explícito requerido",
        "Reportes de privacidad automáticos",
      ],
    },
    {
      icon: Zap,
      title: "Disponibilidad 99.99%",
      details: [
        "SLA garantizado con compensación",
        "Failover automático entre zonas",
        "Monitoreo continuo 24/7",
      ],
    },
    {
      icon: Database,
      title: "Backups Automáticos",
      details: [
        "Backups cada 6 horas",
        "Retención de 30 días",
        "RTO < 1 hora",
      ],
    },
    {
      icon: Key,
      title: "Encriptación AES-256",
      details: [
        "Encriptación en tránsito (TLS 1.3)",
        "Encriptación en reposo",
        "Gestión de claves segura",
      ],
    },
    {
      icon: AlertCircle,
      title: "Auditoría de Seguridad",
      details: [
        "Auditorías trimestrales",
        "Penetration testing anual",
        "Certificación SOC 2 Tipo II",
      ],
    },
    {
      icon: BarChart3,
      title: "Transparencia Total",
      details: [
        "Dashboard de status en tiempo real",
        "Reportes de incidentes",
        "Logs de acceso auditables",
      ],
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
    <section className="py-20 bg-[#09090b]">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#fafafa] mb-4">
            Seguridad y Cumplimiento de Nivel Empresarial
          </h2>
          <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
            Adbuxs cumple con todos los estándares internacionales de seguridad y privacidad requeridos por empresas de cualquier tamaño.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="bg-[#18181b] border border-[#27272a] rounded-xl p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                whileHover={{ borderColor: "#7c3aed", y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="w-8 h-8 text-[#7c3aed] mb-4" />
                <h3 className="text-lg font-semibold text-[#fafafa] mb-3">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.details.map((detail, j) => (
                    <li key={j} className="text-sm text-[#a1a1aa] flex items-start gap-2">
                      <span className="text-[#7c3aed] mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-[#a1a1aa] mb-4">
            ¿Necesitas más detalles sobre seguridad?{" "}
            <a href="#" className="text-[#7c3aed] hover:text-[#8b5cf6] font-semibold">
              Descarga nuestro documento de seguridad
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
