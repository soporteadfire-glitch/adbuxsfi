import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import ProblemSection from "@/components/landing/ProblemSection";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import ViralScoreFeature from "@/components/landing/ViralScoreFeature";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import CredibilitySection from "@/components/landing/CredibilitySection";
import AWSCredibility from "@/components/landing/AWSCredibility";
import ComplianceAndSecurity from "@/components/landing/ComplianceAndSecurity";
import ROICalculator from "@/components/landing/ROICalculator";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

/**
 * Home Page - Kreio Landing
 * 
 * Secciones:
 * 1. Navbar - Navegación sticky con logo animado
 * 2. Hero - Headline + subheadline + mockup flotante
 * 3. SocialProof - Stats animados y países
 * 4. ProblemSection - Problemas que resuelve Kreio
 * 5. Features - 6 módulos de features
 * 6. HowItWorks - 3 pasos del proceso
 * 7. ViralScoreFeature - Feature destacada de análisis de viralidad
 * 8. Pricing - 3 planes con toggle mensual/anual
 * 9. Testimonials - 3 testimonios de clientes
 * 10. CredibilitySection - Badges de confianza
 * 11. FinalCTA - Llamada a acción final
 * 12. Footer - Pie de página
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa]">
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemSection />
      <Features />
      <HowItWorks />
      <ViralScoreFeature />
      <ROICalculator />
      <Pricing />
      <Testimonials />
      <CredibilitySection />
      <AWSCredibility />
      <ComplianceAndSecurity />
      <FinalCTA />
      <Footer />
    </div>
  );
}
