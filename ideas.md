# Kreio - Brainstorming de Diseño

## Enfoque de Diseño Elegido: **Modern Premium Tech**

El proyecto Kreio requiere una identidad visual que transmita **confianza, modernidad y sofisticación**. Se ha seleccionado el enfoque **Modern Premium Tech** que refleja la naturaleza de una plataforma SaaS de clase mundial.

---

## Filosofía de Diseño Detallada

### Design Movement
**Minimalism Meets Brutalism**: Inspirado en Linear.app y Vercel. Líneas limpias, tipografía audaz, y espacios negativos generosos. Evita ornamentación innecesaria, pero incorpora detalles estratégicos (gradientes sutiles, bordes precisos) que comunican calidad premium.

### Core Principles
1. **Claridad Radical**: Cada elemento tiene un propósito. No hay decoración por decoración.
2. **Jerarquía Tipográfica Fuerte**: Los titulares son audaces y grandes (72px), creando impacto visual inmediato.
3. **Contraste Intencional**: Fondos oscuros (zinc-950) con acentos violeta vibrantes crean tensión visual controlada.
4. **Movimiento Sutil**: Animaciones Framer Motion que sienten naturales, no distraen.

### Color Philosophy
- **Fondo**: Zinc-950 (#09090b) — profundo, profesional, reduce fatiga visual
- **Acento Primario**: Violeta-600 (#7c3aed) — energía, innovación, confianza
- **Acentos Secundarios**: Zinc-400 para texto secundario, verde para éxito, naranja para atención
- **Propósito**: El violeta destaca las CTAs y features clave; el zinc mantiene la legibilidad

### Layout Paradigm
**Asymmetric Flow with Strategic Breathing**: 
- Hero con mockup flotante a la derecha (no centrado)
- Features que alternan texto ↔ mockup (zig-zag, no grid)
- Secciones con padding variable para crear ritmo visual
- Evita layouts centrados monótonos

### Signature Elements
1. **Punto Violeta Animado**: En el logo "Kreio", un pequeño círculo que pulsa sutilmente
2. **Líneas Divisoras Orgánicas**: Separadores entre secciones con gradientes sutiles
3. **Cards con Borde Violeta Sutil**: Features y testimonios tienen un borde izquierdo violeta de 2-3px

### Interaction Philosophy
- **Botones**: Cambian de escala (0.97) al hacer click, transición 160ms
- **Hover Effects**: Cambios de color y brillo, no movimiento excesivo
- **Scroll Triggers**: Fade-in y slide-up para secciones, activados al entrar en viewport
- **Microinteracciones**: Contadores animados en stats, badges con pequeñas transiciones

### Animation Guidelines
- **Fade Up Staggered**: Elementos entran con fade + movimiento vertical (40px → 0px) en 600ms
- **Float Animation**: Mockup del hero flota arriba/abajo suavemente (4s, infinito)
- **Stagger Children**: Grupos de cards entran con 100ms entre cada una
- **Respect prefers-reduced-motion**: Animaciones deshabilitadas si el usuario lo prefiere

### Typography System
- **Display Font**: Inter Bold 700 para headlines (72px hero, 48px secciones)
- **Body Font**: Inter Regular 400 para párrafos (16-20px)
- **Hierarchy**: 
  - Hero Headline: 72px, bold, zinc-50
  - Section Title: 48px, bold, zinc-50
  - Subheadline: 20px, zinc-400
  - Body: 16px, zinc-400
  - Small: 14px, zinc-500

### Brand Essence
**"The AI agency inside your Shopify store. No retainers, no delays, no mediocrity."**

**Personality Adjectives**: Audaz, Confiable, Innovador

### Brand Voice
- **Tone**: Directo, sin jerga innecesaria, premium pero accesible
- **Headlines**: Evita "Welcome to..." — en su lugar, promesas claras
  - ✅ "Running a business shouldn't mean running 12 different tools."
  - ✅ "Your AI Marketing Agency. Without the Agency."
  - ❌ "Welcome to Kreio"
- **CTAs**: Acción clara, no genérica
  - ✅ "Start Free Trial"
  - ✅ "Join 500+ ecommerce brands"
  - ❌ "Get Started Today"

### Wordmark & Logo
**Kreio**: Tipografía Inter Bold con un pequeño círculo violeta (#7c3aed) que actúa como punto después de la "o". El círculo tiene una animación sutil de pulsación (opacity 0.6 → 1 → 0.6, 2s infinito).

### Signature Brand Color
**Violeta Kreio**: #7c3aed (violet-600) — color propietario que aparece en:
- Botones primarios
- Acentos de cards
- Bordes de features
- Punto del logo
- Gradientes de fondo en secciones especiales

---

## Decisiones de Implementación

✅ **Dark Mode por Defecto**: Zinc-950 como fondo principal
✅ **Framer Motion para Animaciones**: Fade-up staggered, float, scroll triggers
✅ **shadcn/ui para Componentes**: Button, Badge, Card (personalizados con violeta)
✅ **Tailwind CSS 4**: Colores OKLCH, espaciado consistente
✅ **Mockups Estilizados**: Divs con bordes y gradientes (no imágenes reales)
✅ **Responsive Mobile-First**: Navbar hamburger, secciones apiladas en mobile

---

## Paleta de Colores Implementada

```css
--background: #09090b        /* zinc-950 */
--surface: #18181b           /* zinc-900 */
--border: #27272a            /* zinc-800 */
--text-primary: #fafafa      /* zinc-50 */
--text-secondary: #a1a1aa    /* zinc-400 */
--accent: #7c3aed            /* violet-600 */
--accent-light: #8b5cf6      /* violet-500 */
--accent-glow: rgba(124,58,237,0.15)
--success: #10b981
--warning: #f59e0b
```

---

## Próximos Pasos

1. Configurar Google Fonts (Inter)
2. Crear componentes landing (Navbar, Hero, Features, etc.)
3. Implementar animaciones Framer Motion
4. Mockups estilizados para cada feature
5. Responsive design para mobile
6. Optimizaciones finales y testing
