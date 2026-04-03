/* =============================================================
   IPP Ltd — Internationalization (i18n)
   Strings EN / ES · Swap sin recarga · localStorage
   ============================================================= */

const i18n = {

  /* ── ENGLISH ─────────────────────────────────────────────── */
  en: {
    /* — Navigation */
    "nav.company":      "Company",
    "nav.operations":   "Operations",
    "nav.products":     "Products",
    "nav.safety":       "Safety",
    "nav.contact":      "Contact",

    /* — Hero carousel — Slide 1 */
    "slide1.title":  "Unlocking Argentina's Energy Potential.",
    "slide1.desc":   "IPP Ltd is a Houston-based energy holding company with producing oil assets in Patagonia, Argentina.",
    "slide1.cta":    "Our Operations",

    /* — Hero carousel — Slide 2 */
    "slide2.title":  "A Century of Producing Oil in Patagonia.",
    "slide2.desc":   "Our concessions in the Golfo San Jorge Basin have been continuously producing since 1919 — among the longest-running oil operations in Argentina.",
    "slide2.cta":    "Who We Are",

    /* — Hero carousel — Slide 3 */
    "slide3.title":  "Two Concessions. One Century. Uninterrupted Production.",
    "slide3.desc":   "The Alberto and Don Ernesto fields operate under a unique legal framework that provides exceptional advantages to long-term investors.",
    "slide3.cta":    "Explore the Fields",

    /* — Statement section */
    "statement.text": "We believe Argentina's energy future is built on <em>proven assets</em>, deep technical expertise, and a century of uninterrupted operational commitment.",
    "statement.cta":  "Discover who we are",

    /* — What We Do (centered intro) */
    "whatwedo.eyebrow": "What We Do",
    "whatwedo.h2":      "Energy assets that power South America.",
    "whatwedo.desc":    "We manage the exploration, development and production of hydrocarbons in the Golfo San Jorge Basin, and commercialize refined petroleum products for regional and global markets.",
    "whatwedo.cta":     "See our operations",

    /* — Who We Are */
    "who.eyebrow":   "Company",
    "who.h2":        "A U.S. holding company with a century of oil history.",
    "who.p":         "Incorporated in Houston, Texas, IPP Ltd manages energy assets in South America through IPP Oil &amp; Gas, our Argentine operating subsidiary. Our concessions in the Golfo San Jorge Basin have been continuously producing since 1919, making them among the longest-running oil operations in Argentina.",

    "who.col1.h3":   "Upstream Operations",
    "who.col1.p":    "IPP Oil &amp; Gas operates mature, producing oil fields in Chubut, Argentina, with certified proven reserves and a robust production enhancement program underway.",

    "who.col2.h3":   "Special Concession Regime",
    "who.col2.p":    "Our concessions operate under Argentina's historic Mining Code, a unique legal framework that provides exceptional fiscal advantages and perpetual ownership rights — significantly improving project economics compared to conventional operators.",

    "who.col3.h3":   "Established Infrastructure",
    "who.col3.p":    "Both fields feature fully developed operational infrastructure: electrical grid connections, gas separation facilities, and direct pipeline access to regional storage and international export terminals.",

    /* — Business Lines */
    "biz.eyebrow":     "Our Business",
    "biz.h2":          "Two distinct lines of business.",

    "biz.card1.h3":    "Oil Field Operations",
    "biz.card1.p":     "Through IPP Oil &amp; Gas, we manage the exploration, development, and production of hydrocarbons at the Alberto and Don Ernesto concessions in the Golfo San Jorge Basin. Our team oversees well intervention programs, production optimization, and field infrastructure across both concessions.",
    "biz.card1.link":  "Explore operations",

    "biz.card2.h3":    "Petroleum Products",
    "biz.card2.p":     "We commercialize a full range of refined petroleum products for local and international markets, including naphtha, marine fuels, and industrial fuel oils. Our direct connection to export infrastructure enables efficient delivery to regional and global buyers.",
    "biz.card2.link":  "Our products",

    /* — Safety */
    "safety.eyebrow":  "Values",
    "safety.h2":       "Safety. Quality. Environmental stewardship.",
    "safety.p":        "Every operation at IPP Oil &amp; Gas is governed by strict safety protocols and environmental standards. Our personnel are trained to the highest technical and regulatory requirements of the oil industry.",
    "safety.cta":      "Our approach",

    /* — Footer */
    "footer.col1.label":  "Holding Company",
    "footer.tagline":     "IPP Ltd manages energy assets in South America with over a century of operational history in Patagonia, Argentina.",
    "footer.address1":    "Houston, Texas, USA",
    "footer.contact.cta": "Contact us",

    "footer.acc1.title":  "Get to know us",
    "footer.acc2.title":  "Our Operations",
    "footer.acc3.title":  "Legal",

    "footer.subsidiary":  "IPP Oil &amp; Gas",
    "footer.address2":    "Comodoro Rivadavia, Chubut, Argentina",
    "footer.copy":        "© 2025 IPP Ltd. All rights reserved.",
    "footer.terms":       "Terms of use",
    "footer.privacy":     "Privacy",

    /* — company.html */
    "company.hero.eyebrow": "Company",
    "company.hero.h1":      "A Houston-based energy holding company.",

    "company.s1.eyebrow":        "Since 1919",
    "company.s1.h2":             "Over a century of continuous oil production in Patagonia.",
    "company.s1.p":              "IPP Ltd holds and manages hydrocarbon concessions in Argentina through its operating subsidiary IPP Oil &amp; Gas. Our Alberto and Don Ernesto fields, located in the Golfo San Jorge Basin near Comodoro Rivadavia, Chubut, have been in continuous production since 1919 — making them among the longest-running oil operations in Argentina.",
    "company.s1.stat1.num":      "1919",
    "company.s1.stat1.label":    "Year operations began",
    "company.s1.stat2.num":      "100+",
    "company.s1.stat2.label":    "Years of uninterrupted production",

    "company.s2.eyebrow":        "Corporate Structure",
    "company.s2.h2":             "IPP Ltd and IPP Oil &amp; Gas.",
    "company.s2.card1.name":     "IPP Ltd",
    "company.s2.card1.tag":      "Houston, Texas — Holding",
    "company.s2.card1.p":        "IPP Ltd is the U.S.-incorporated parent holding company, responsible for strategic direction, investor relations, and asset management across our South American operations.",
    "company.s2.card2.name":     "IPP Oil &amp; Gas",
    "company.s2.card2.tag":      "Comodoro Rivadavia — Operadora",
    "company.s2.card2.p":        "IPP Oil &amp; Gas is our Argentine operating subsidiary, managing day-to-day field operations, production, well interventions, and commercialization of petroleum products across both concessions.",

    "company.s3.eyebrow":        "Our Values",
    "company.s3.h2":             "The principles that guide every operation.",
    "company.s3.v1.title":       "Safety",
    "company.s3.v1.p":           "Every operation begins and ends with safety. We apply rigorous protocols to protect our people, communities, and environment.",
    "company.s3.v2.title":       "Integrity",
    "company.s3.v2.p":           "We operate with full transparency and accountability toward our partners, regulators, and the communities where we work.",
    "company.s3.v3.title":       "Excellence",
    "company.s3.v3.p":           "We pursue continuous improvement in every process, applying efficient practices and the highest technical standards.",
    "company.s3.v4.title":       "Sustainability",
    "company.s3.v4.p":           "We are committed to responsible resource development that balances economic performance with environmental stewardship.",

    "company.s4.h2":             "Ready to learn about our operations?",
    "company.s4.btn1":           "Our Operations",
    "company.s4.btn2":           "Contact Us",
  },

  /* ── ESPAÑOL ─────────────────────────────────────────────── */
  es: {
    /* — Navegación */
    "nav.company":      "Empresa",
    "nav.operations":   "Operaciones",
    "nav.products":     "Productos",
    "nav.safety":       "Seguridad",
    "nav.contact":      "Contacto",

    /* — Carrusel hero — Slide 1 */
    "slide1.title":  "Liberando el potencial energético de la Argentina.",
    "slide1.desc":   "IPP Ltd es un holding energético con sede en Houston, Texas, con activos petroleros productivos en la Patagonia argentina.",
    "slide1.cta":    "Nuestras Operaciones",

    /* — Carrusel hero — Slide 2 */
    "slide2.title":  "Un siglo produciendo petróleo en la Patagonia.",
    "slide2.desc":   "Nuestras concesiones en la Cuenca del Golfo San Jorge producen ininterrumpidamente desde 1919 — entre las operaciones petroleras más longevas de Argentina.",
    "slide2.cta":    "Quiénes Somos",

    /* — Carrusel hero — Slide 3 */
    "slide3.title":  "Dos concesiones. Un siglo. Producción ininterrumpida.",
    "slide3.desc":   "Los campos Alberto y Don Ernesto operan bajo un marco legal único que otorga ventajas excepcionales a los inversores de largo plazo.",
    "slide3.cta":    "Explorar los Campos",

    /* — Sección statement */
    "statement.text": "Creemos que el futuro energético de la Argentina se construye sobre <em>activos probados</em>, expertise técnico de profundidad y un siglo de compromiso operativo ininterrumpido.",
    "statement.cta":  "Descubrí quiénes somos",

    /* — Lo que hacemos (intro centrada) */
    "whatwedo.eyebrow": "Lo que hacemos",
    "whatwedo.h2":      "Activos energéticos que impulsan Sudamérica.",
    "whatwedo.desc":    "Gestionamos la exploración, el desarrollo y la producción de hidrocarburos en la Cuenca del Golfo San Jorge, y comercializamos productos petrolíferos refinados para mercados regionales y globales.",
    "whatwedo.cta":     "Ver nuestras operaciones",

    /* — Quiénes somos */
    "who.eyebrow":   "Empresa",
    "who.h2":        "Un holding estadounidense con un siglo de historia petrolera.",
    "who.p":         "Constituida en Houston, Texas, IPP Ltd gestiona activos energéticos en Sudamérica a través de IPP Oil &amp; Gas, nuestra subsidiaria operadora en Argentina. Nuestras concesiones en la Cuenca del Golfo San Jorge producen ininterrumpidamente desde 1919, convirtiéndolas en unas de las operaciones petroleras más longevas del país.",

    "who.col1.h3":   "Operaciones Upstream",
    "who.col1.p":    "IPP Oil &amp; Gas opera yacimientos maduros y productivos en Chubut, Argentina, con reservas probadas certificadas y un programa activo de incremento de producción.",

    "who.col2.h3":   "Régimen de Concesión Especial",
    "who.col2.p":    "Nuestras concesiones operan bajo el histórico Código de Minería argentino, un marco legal único que otorga ventajas fiscales excepcionales y derechos de concesión a perpetuidad — mejorando significativamente la economía del proyecto frente a operadores convencionales.",

    "who.col3.h3":   "Infraestructura Establecida",
    "who.col3.p":    "Ambos campos cuentan con infraestructura operativa completa: conexión a la red eléctrica, instalaciones de separación de gas y acceso directo por oleoducto a instalaciones de almacenamiento y terminales de exportación internacional.",

    /* — Líneas de negocio */
    "biz.eyebrow":     "Nuestro Negocio",
    "biz.h2":          "Dos líneas de negocio diferenciadas.",

    "biz.card1.h3":    "Operación del Yacimiento",
    "biz.card1.p":     "A través de IPP Oil &amp; Gas, gestionamos la exploración, desarrollo y producción de hidrocarburos en las concesiones Alberto y Don Ernesto de la Cuenca del Golfo San Jorge. Nuestro equipo supervisa programas de intervención de pozos, optimización de producción e infraestructura de campo en ambas concesiones.",
    "biz.card1.link":  "Ver operaciones",

    "biz.card2.h3":    "Productos Petroleros",
    "biz.card2.p":     "Comercializamos una amplia gama de productos petrolíferos refinados para mercados locales e internacionales, incluyendo nafta, combustibles marinos y fuel oils industriales. Nuestra conexión directa con infraestructura de exportación permite una entrega eficiente a compradores regionales y globales.",
    "biz.card2.link":  "Nuestros productos",

    /* — Seguridad */
    "safety.eyebrow":  "Valores",
    "safety.h2":       "Seguridad. Calidad. Responsabilidad ambiental.",
    "safety.p":        "Cada operación de IPP Oil &amp; Gas está regida por estrictos protocolos de seguridad y estándares ambientales. Nuestro personal está capacitado según los más altos requisitos técnicos y normativos de la industria petrolera.",
    "safety.cta":      "Nuestro enfoque",

    /* — Pie de página */
    "footer.col1.label":  "Holding",
    "footer.tagline":     "IPP Ltd gestiona activos energéticos en Sudamérica con más de un siglo de historia operativa en la Patagonia argentina.",
    "footer.address1":    "Houston, Texas, EE.UU.",
    "footer.contact.cta": "Contacto",

    "footer.acc1.title":  "Conócenos",
    "footer.acc2.title":  "Nuestras Operaciones",
    "footer.acc3.title":  "Legal",

    "footer.subsidiary":  "IPP Oil &amp; Gas",
    "footer.address2":    "Comodoro Rivadavia, Chubut, Argentina",
    "footer.copy":        "© 2025 IPP Ltd. Todos los derechos reservados.",
    "footer.terms":       "Términos de uso",
    "footer.privacy":     "Privacidad",

    /* — company.html */
    "company.hero.eyebrow": "Empresa",
    "company.hero.h1":      "Un holding energético con sede en Houston.",

    "company.s1.eyebrow":        "Desde 1919",
    "company.s1.h2":             "Más de un siglo de producción petrolera ininterrumpida en la Patagonia.",
    "company.s1.p":              "IPP Ltd gestiona concesiones de hidrocarburos en Argentina a través de su subsidiaria operadora IPP Oil &amp; Gas. Nuestros campos Alberto y Don Ernesto, ubicados en la Cuenca del Golfo San Jorge cerca de Comodoro Rivadavia, Chubut, están en producción continua desde 1919 — convirtiéndolos en unas de las operaciones petroleras más longevas de Argentina.",
    "company.s1.stat1.num":      "1919",
    "company.s1.stat1.label":    "Año de inicio",
    "company.s1.stat2.num":      "100+",
    "company.s1.stat2.label":    "Años de producción ininterrumpida",

    "company.s2.eyebrow":        "Estructura Corporativa",
    "company.s2.h2":             "IPP Ltd e IPP Oil &amp; Gas.",
    "company.s2.card1.name":     "IPP Ltd",
    "company.s2.card1.tag":      "Houston, Texas — Holding",
    "company.s2.card1.p":        "IPP Ltd es la empresa holding matriz constituida en EE.UU., responsable de la dirección estratégica, relaciones con inversores y gestión de activos en nuestras operaciones sudamericanas.",
    "company.s2.card2.name":     "IPP Oil &amp; Gas",
    "company.s2.card2.tag":      "Comodoro Rivadavia — Operadora",
    "company.s2.card2.p":        "IPP Oil &amp; Gas es nuestra subsidiaria operadora argentina, que gestiona las operaciones de campo, producción, intervención de pozos y comercialización de productos petroleros en ambas concesiones.",

    "company.s3.eyebrow":        "Nuestros Valores",
    "company.s3.h2":             "Los principios que guían cada operación.",
    "company.s3.v1.title":       "Seguridad",
    "company.s3.v1.p":           "Cada operación comienza y termina con seguridad. Aplicamos protocolos rigurosos para proteger a nuestro personal, comunidades y medio ambiente.",
    "company.s3.v2.title":       "Integridad",
    "company.s3.v2.p":           "Operamos con plena transparencia y responsabilidad hacia nuestros socios, reguladores y las comunidades donde trabajamos.",
    "company.s3.v3.title":       "Excelencia",
    "company.s3.v3.p":           "Perseguimos la mejora continua en cada proceso, aplicando prácticas eficientes y los más altos estándares técnicos.",
    "company.s3.v4.title":       "Sostenibilidad",
    "company.s3.v4.p":           "Estamos comprometidos con el desarrollo responsable de recursos que equilibra el rendimiento económico con la gestión ambiental.",

    "company.s4.h2":             "¿Listo para conocer nuestras operaciones?",
    "company.s4.btn1":           "Nuestras Operaciones",
    "company.s4.btn2":           "Contacto",
  }
};

/* =============================================================
   setLanguage(lang)
   ============================================================= */
function setLanguage(lang) {
  if (!i18n[lang]) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key] !== undefined) {
      el.innerHTML = i18n[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (i18n[lang][key] !== undefined) {
      el.setAttribute("placeholder", i18n[lang][key]);
    }
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("lang-active", btn.dataset.lang === lang);
  });

  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("ipp-lang", lang);
}

/* Init */
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("ipp-lang") || "en";
  setLanguage(saved);
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
});
