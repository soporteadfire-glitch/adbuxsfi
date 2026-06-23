import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

/**
 * Navbar Component - Kreio Landing
 * 
 * Design Notes:
 * - Logo con punto violeta animado (pulsación)
 * - Sticky, blur backdrop, border bottom zinc-800
 * - Links centro: Features · Pricing · About
 * - CTA derecha: botón \"Get Early Access\" violeta pill
 * - Mobile: hamburger menu
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Características", href: "#features" },
    { label: "Precios", href: "#pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Acerca de", href: "/about" },
  ];

  const pulseVariants = {
    animate: {
      opacity: [0.6, 1, 0.6],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as any },
    },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#27272a] bg-[#09090b]/80 backdrop-blur-xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#fafafa]">Adbuxs</span>
          <motion.div
            className="w-2 h-2 rounded-full bg-[#7c3aed]"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#a1a1aa] hover:text-[#fafafa] transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="text-[#a1a1aa] hover:text-[#fafafa] transition-colors text-sm font-medium"
          >
            Contacto
          </a>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Button
            className="bg-[#7c3aed] hover:bg-[#8b5cf6] text-white rounded-full px-6 h-10 transition-all duration-200 hover:scale-105"
            onClick={() => console.log("Get Early Access clicked")}
          >
            Acceso Temprano
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#fafafa]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden border-t border-[#27272a] bg-[#09090b] px-4 py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#a1a1aa] hover:text-[#fafafa] transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="w-full bg-[#7c3aed] hover:bg-[#8b5cf6] text-white rounded-full mt-2"
              onClick={() => {
                console.log("Get Early Access clicked");
                setMobileMenuOpen(false);
              }}
            >
              Acceso Temprano
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
