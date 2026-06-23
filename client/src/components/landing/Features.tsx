import { motion } from "framer-motion";
import { Sparkles, Eye, Activity, Calendar, BarChart3, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

/**
 * Features Component - Kreio Landing
 * 
 * Design Notes:
 * - 6 features alternando texto ↔ mockup
 * - Scroll-triggered fade in
 * - Cada feature tiene ícono, título, descripción y badge
 */
export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "Genera contenido que convierte en segundos",
      description: "Ingresa tu URL de producto. Adbuxs genera scripts de video UGC, 3 variantes de copy, hooks testeados A/B e imágenes de venta — todo informado por tus datos reales de Shopify y ROAS actual.",
      badge: "Reemplaza: Canva + ChatGPT + copywriter",
      mockup: "creative-studio",
    },
    {
      icon: Eye,
      title: "Sabe exactamente qué están ejecutando tus competidores",
      description: "Adbuxs escanea la Biblioteca de Anuncios de Meta en tiempo real. Ve qué anuncios llevan corriendo más tiempo — la señal más fuerte de éxito — extrae ángulos ganadores y supera a tu competencia antes de que te superen.",
      badge: "Reemplaza: AdSpy + Minea",
      mockup: "competitor-intel",
    },
    {
      icon: Activity,
      title: "Nunca dejes que un anuncio ganador muera en silencio",
      description: "Cuando tu CTR cae 15%+ o tu CPM se dispara, Adbuxs genera automáticamente variaciones frescas de tu contenido de mejor desempeño antes de que colapse — sin monitoreo manual requerido.",
      badge: "Reemplaza: Seguimiento manual en hojas de cálculo",
      mockup: "fatigue-detector",
    },
    {
      icon: Calendar,
      title: "Programa y publica en todas partes, automáticamente",
      description: "Aprueba tu contenido, establece el calendario, y Adbuxs publica directamente en Instagram Reels, carruseles, historias y Facebook en el momento óptimo para tu audiencia.",
      badge: "Reemplaza: Buffer + Later + Hootsuite",
      mockup: "auto-publish",
    },
    {
      icon: BarChart3,
      title: "Atribución que realmente tiene sentido",
      description: "Conecta Shopify y Meta Ads. Ve ROAS por contenido, ingresos por ángulo, y qué post generó qué venta — con atribución UTM inteligente integrada.",
      badge: "Reemplaza: UTMify + Triple Whale",
      mockup: "smart-tracker",
    },
    {
      icon: Brain,
      title: "Tu Director de Marketing IA",
      description: "Cada lunes, Adbuxs analiza el desempeño de la semana pasada y entrega un plan de acción de 5 tareas: qué escalar, qué pausar, qué ángulos probar, y dónde mover tu presupuesto.",
      badge: "Reemplaza: Un CMO de $5,000/mes",
      mockup: "cmo-report",
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

  const renderMockup = (type: string) => {
    const mockups: Record<string, React.ReactNode> = {
      "creative-studio": (
        <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
          <div className="space-y-4">
            <div className="h-10 bg-[#27272a] rounded-lg" />
            <div className="space-y-2">
              <div className="h-4 bg-[#27272a] rounded w-3/4" />
              <div className="h-4 bg-[#27272a] rounded w-1/2" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-20 bg-[#7c3aed] rounded opacity-30" />
              <div className="h-20 bg-[#7c3aed] rounded opacity-50" />
              <div className="h-20 bg-[#7c3aed] rounded opacity-70" />
            </div>
          </div>
        </div>
      ),
      "competitor-intel": (
        <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between items-center pb-3 border-b border-[#27272a]">
                <div className="space-y-1 flex-1">
                  <div className="h-3 bg-[#27272a] rounded w-1/3" />
                  <div className="h-2 bg-[#27272a] rounded w-1/4" />
                </div>
                <div className="h-6 w-12 bg-[#7c3aed] rounded opacity-40" />
              </div>
            ))}
          </div>
        </div>
      ),
      "fatigue-detector": (
        <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#a1a1aa]">CTR Trend</span>
              <span className="text-sm text-[#ef4444]">↓ 15%</span>
            </div>
            <div className="flex items-end justify-between h-24 gap-1">
              {[80, 75, 70, 65, 60, 55, 50].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-[#ef4444] to-[#f59e0b] rounded-t opacity-60"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      ),
      "auto-publish": (
        <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
          <div className="space-y-3">
            <div className="h-4 bg-[#27272a] rounded w-1/2" />
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-16 bg-[#27272a] rounded" />
              ))}
            </div>
            <div className="h-8 bg-[#7c3aed] rounded opacity-30 mt-4" />
          </div>
        </div>
      ),
      "smart-tracker": (
        <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <div className="h-3 bg-[#27272a] rounded w-16 mb-1" />
                <div className="text-2xl font-bold text-[#7c3aed]">3.4x</div>
              </div>
              <div>
                <div className="h-3 bg-[#27272a] rounded w-16 mb-1" />
                <div className="text-2xl font-bold text-[#10b981]">$12.5k</div>
              </div>
            </div>
            <div className="h-20 bg-gradient-to-t from-[#7c3aed] to-transparent rounded opacity-30" />
          </div>
        </div>
      ),
      "cmo-report": (
        <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
          <div className="space-y-3">
            <div className="h-4 bg-[#7c3aed] rounded w-1/2" />
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-2">
                <div className="w-5 h-5 bg-[#7c3aed] rounded flex items-center justify-center text-xs text-white">
                  {i}
                </div>
                <div className="flex-1 h-4 bg-[#27272a] rounded" />
              </div>
            ))}
          </div>
        </div>
      ),
    };
    return mockups[type];
  };

  return (
    <section id="features" className="py-20">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#fafafa] mb-4">
            Una plataforma. Todas las herramientas que tu negocio necesita.
          </h2>
        </motion.div>

        {/* Features */}
        <div className="space-y-20">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? "" : "md:grid-flow-dense"}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                {/* Content */}
                <div className={isEven ? "" : "md:col-start-2"}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-8 h-8 text-[#7c3aed]" />
                    <h3 className="text-2xl md:text-3xl font-bold text-[#fafafa]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[#a1a1aa] mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <Badge className="bg-[#18181b] border border-[#27272a] text-[#a1a1aa] hover:bg-[#27272a]">
                    {feature.badge}
                  </Badge>
                </div>

                {/* Mockup */}
                <div className={isEven ? "" : "md:col-start-1"}>
                  {renderMockup(feature.mockup)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
