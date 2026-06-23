import { Twitter, Instagram, Linkedin } from "lucide-react";

/**
 * Footer Component - Kreio Landing
 * 
 * Design Notes:
 * - Logo Kreio + tagline
 * - 4 columnas: Product · Company · Legal · Connect
 * - Bottom: copyright
 */
export default function Footer() {
  const columns = [
    {
      title: "Producto",
      links: [
        { name: "Características", href: "/#features" },
        { name: "Precios", href: "/#pricing" },
        { name: "Cambios", href: "/blog" },
        { name: "Hoja de Ruta", href: "/contact" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Acerca de", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Carreras", href: "/careers" },
        { name: "Prensa", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacidad", href: "/contact" },
        { name: "Términos", href: "/contact" },
        { name: "Seguridad", href: "/contact" },
      ],
    },
  ];

  const socials = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-[#27272a] bg-[#09090b] py-12">
      <div className="container">
        {/* Main Footer */}
        <div className="grid md:grid-cols-5 gap-8 mb-12 pb-12 border-b border-[#27272a]">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-bold text-[#fafafa]">Adbuxs</span>
              <div className="w-2 h-2 rounded-full bg-[#7c3aed]" />
            </div>
            <p className="text-sm text-[#a1a1aa]">Tu agencia de marketing IA.</p>
          </div>

          {/* Links Columns */}
          {columns.map((column, i) => (
            <div key={i}>
              <h4 className="text-sm font-semibold text-[#fafafa] mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-[#fafafa] mb-4">Conecta</h4>
            <div className="flex gap-4">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="text-[#a1a1aa] hover:text-[#7c3aed] transition-colors"
                    title={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center">
          <p className="text-sm text-[#71717a]">
            © 2025 Adbuxs · Un producto de Langhaus SA · Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
