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

    /* — operations.html */
    "ops.hero.eyebrow":          "OPERATIONS",
    "ops.hero.h1":               "Two producing oil fields in the heart of Patagonia.",

    "ops.s1.eyebrow":            "GOLFO SAN JORGE BASIN",
    "ops.s1.h2":                 "Over a century of continuous production.",
    "ops.s1.p":                  "IPP Oil &amp; Gas operates the Alberto and Don Ernesto concessions in the Golfo San Jorge Basin, Province of Chubut, Argentina — located approximately 5 kilometers from the city of Comodoro Rivadavia. Hydrocarbon extraction in these fields began in 1919, making them among the longest continuously producing concessions in Argentina.",

    "ops.s2.h2":                 "Our two concessions.",
    "ops.s2.card1.eyebrow":      "FIELD ALBERTO",
    "ops.s2.card1.h3":           "Alberto Field",
    "ops.s2.card1.p":            "The Alberto concession covers approximately 197 hectares in the central northern flank of the Golfo San Jorge Basin. With 132 wells drilled throughout its history, the field contains certified proven reserves and benefits from fully developed operational infrastructure including electrical substations and direct pipeline access to regional export terminals.",
    "ops.s2.card2.eyebrow":      "FIELD DON ERNESTO",
    "ops.s2.card2.h3":           "Don Ernesto Field",
    "ops.s2.card2.p":            "The Don Ernesto concession covers approximately 99 hectares, with 159 wells drilled during its production history. The field shares the geological characteristics of the Golfo San Jorge Basin, with reservoirs located at approximately 2,000 meters depth within proven productive formations including Mina El Carmen, Comodoro Rivadavia, and Salamanca.",

    "ops.s3.eyebrow":            "INFRASTRUCTURE",
    "ops.s3.h2":                 "Established infrastructure supporting immediate production.",
    "ops.s3.i1.title":           "Electrical",
    "ops.s3.i1.p":               "Both fields are connected to the regional 13.2 kV high-voltage network through four 500 KVA substations, operating at approximately 10% of installed capacity.",
    "ops.s3.i2.title":           "Gas",
    "ops.s3.i2.p":               "Each field contains gas separation facilities with a combined capacity of approximately 50,000 cubic meters per day, connected directly to the Camuzzi Gas del Sur trunk pipeline.",
    "ops.s3.i3.title":           "Oil Pipeline",
    "ops.s3.i3.p":               "Crude oil is transported through an 8-inch pipeline to the Kilómetro 9 storage facility, connecting to a 14-inch trunk line with direct access to the TERMAP export terminal at Caleta Córdova.",
    "ops.s3.i4.title":           "Special Regime",
    "ops.s3.i4.p":               "Our concessions operate under Argentina's historic Mining Code, a unique legal framework that provides perpetual ownership rights and exceptional fiscal advantages compared to conventional hydrocarbon operators.",

    "ops.s4.h2":                 "Interested in our assets?",
    "ops.s4.btn1":               "Contact Us",
    "ops.s4.btn2":               "Our Products",

    /* — products.html */
    "prod.hero.eyebrow":         "PRODUCTS",
    "prod.hero.h1":              "A full range of refined petroleum products.",

    "prod.s1.eyebrow":           "COMMERCIALIZATION",
    "prod.s1.h2":                "Local and international markets.",
    "prod.s1.p":                 "Through IPP Oil &amp; Gas, we commercialize a comprehensive portfolio of refined petroleum products for local and international buyers. Our direct connection to the TERMAP export terminal at Caleta Córdova enables efficient and continuous delivery to regional and global markets.",

    "prod.s2.h2":                "Our product portfolio.",
    "prod.s2.p1.name":           "Naphtha",
    "prod.s2.p1.p":              "High-quality naphtha for petrochemical and refining applications, meeting international specifications.",
    "prod.s2.p2.name":           "Gas Oil Grade 2",
    "prod.s2.p2.p":              "Standard diesel fuel for automotive and industrial use, produced to Argentine and international quality standards.",
    "prod.s2.p3.name":           "Gas Oil Grade 3",
    "prod.s2.p3.p":              "Premium diesel formulation with enhanced performance characteristics for demanding industrial applications.",
    "prod.s2.p4.name":           "Fuel Oil",
    "prod.s2.p4.p":              "Heavy fuel oil for industrial boilers, power generation, and large-scale thermal applications.",
    "prod.s2.p5.name":           "Marine Gas Oil",
    "prod.s2.p5.p":              "Marine-grade distillate fuel meeting international maritime standards for vessel propulsion and auxiliary systems.",
    "prod.s2.p6.name":           "IFO 180\u2013380",
    "prod.s2.p6.p":              "Intermediate fuel oil blends for marine and industrial use, available in viscosity grades 180 and 380 CST.",

    "prod.s3.eyebrow":           "EXPORT INFRASTRUCTURE",
    "prod.s3.h2":                "Direct access to international markets.",
    "prod.s3.p":                 "Our crude oil and refined products are transported through an established pipeline network directly to the TERMAP terminal at Caleta Córdova, Chubut — one of Argentina's primary petroleum export facilities. This infrastructure enables rapid and cost-effective delivery to international buyers without reliance on third-party logistics.",

    "prod.s4.h2":                "Looking to source petroleum products?",
    "prod.s4.btn1":              "Contact Us",

    /* — safety.html */
    "sfty.hero.eyebrow":         "SAFETY &amp; QUALITY",
    "sfty.hero.h1":              "Safety. Quality. Environmental stewardship.",

    "sfty.s1.p":                 "Every operation at IPP Oil &amp; Gas begins and ends with safety. We consider safety an indispensable aspect of all activities — for our personnel, our clients, and the communities where we operate.",

    "sfty.s2.eyebrow":           "OUR APPROACH",
    "sfty.s2.h2":                "Three pillars of operational excellence.",
    "sfty.s2.p1.title":          "Safety",
    "sfty.s2.p1.p":              "We apply rigorous safety protocols across all field operations. All personnel receive in-depth training on the technical characteristics of each product and the safety regulations associated with each operation. Incident prevention controls are mandatory at every stage.",
    "sfty.s2.p2.title":          "Quality",
    "sfty.s2.p2.p":              "Our products meet all quality standards, which are verified through periodic controls. We respect, demand, and rigorously follow all legal and management regulations required by the business and needed by our clients. Precision in production is a constant requirement — technical specifications are considered key pillars of our growth.",
    "sfty.s2.p3.title":          "Environment",
    "sfty.s2.p3.p":              "We operate with full respect for the environment and the communities surrounding our fields. Environmental impact assessments and responsible resource management are integral to every operational decision at IPP Oil &amp; Gas.",

    "sfty.s3.eyebrow":           "TECHNICAL CAPABILITY",
    "sfty.s3.h2":                "Advanced analysis and measurement.",
    "sfty.s3.p":                 "IPP Oil &amp; Gas has significant analytical capacity to control its products using technology applied to hydrocarbons. Research and development of measurement methods is considered a core strength — the ultimate objective is to refine the evaluation of raw materials and confirm that all developed products meet their complete technical specifications.",

    "sfty.s4.h2":                "Want to know more about our operations?",
    "sfty.s4.btn1":              "Contact Us",
    "sfty.s4.btn2":              "Our Operations",

    /* — contact.html */
    "contact.hero.eyebrow":          "CONTACT",
    "contact.hero.h1":               "Get in touch with IPP Ltd.",

    "contact.s1.form.eyebrow":       "SEND A MESSAGE",
    "contact.s1.form.h2":            "We'd like to hear from you.",
    "contact.form.label.name":       "Full Name",
    "contact.form.label.company":    "Company (optional)",
    "contact.form.label.email":      "Email",
    "contact.form.label.phone":      "Phone (optional)",
    "contact.form.label.subject":    "Subject",
    "contact.form.label.message":    "Message",
    "contact.form.subject.default":  "Select a topic\u2026",
    "contact.form.subject.opt1":     "Commercial inquiry",
    "contact.form.subject.opt2":     "Investment information",
    "contact.form.subject.opt3":     "Operations",
    "contact.form.subject.opt4":     "Other",
    "contact.form.ph.name":          "Your full name",
    "contact.form.ph.company":       "Company name",
    "contact.form.ph.email":         "your@email.com",
    "contact.form.ph.phone":         "+1 (555) 000-0000",
    "contact.form.ph.message":       "Tell us about your inquiry\u2026",
    "contact.form.btn":              "Send Message",
    "contact.form.note":             "We will respond within 2 business days.",

    "contact.s1.info.eyebrow":       "CONTACT INFORMATION",
    "contact.s1.info.h4a":           "IPP Ltd (Holding)",
    "contact.s1.info.h4b":           "IPP Oil &amp; Gas (Operations)",

    "contact.s2.map":                "Map \u2014 Comodoro Rivadavia, Chubut",

    /* — Rotating text (home) */
    "rotating.label": "Who we are",
    "rotating.word1": "Operators",
    "rotating.word2": "Investors",
    "rotating.word3": "Partners",

    /* — News section (home) */
    "news.eyebrow":      "Newsroom",
    "news.title":        "Latest at IPP",
    "news.card1.title":  "IPP Oil &amp; Gas reaches new production milestone at Alberto Field",
    "news.card2.title":  "Don Ernesto Field completes infrastructure upgrade program",
    "news.card3.title":  "IPP Ltd presents results at Houston energy investor forum",
    "news.readmore":     "Read more →",
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

    /* — operations.html */
    "ops.hero.eyebrow":          "OPERACIONES",
    "ops.hero.h1":               "Dos yacimientos productivos en el corazón de la Patagonia.",

    "ops.s1.eyebrow":            "CUENCA DEL GOLFO SAN JORGE",
    "ops.s1.h2":                 "Más de un siglo de producción continua.",
    "ops.s1.p":                  "IPP Oil &amp; Gas opera las concesiones Alberto y Don Ernesto en la Cuenca del Golfo San Jorge, Provincia de Chubut, Argentina — ubicadas a aproximadamente 5 kilómetros de la ciudad de Comodoro Rivadavia. La extracción de hidrocarburos en estos campos comenzó en 1919, convirtiéndolos en unas de las concesiones en producción continua más longevas de Argentina.",

    "ops.s2.h2":                 "Nuestras dos concesiones.",
    "ops.s2.card1.eyebrow":      "YACIMIENTO ALBERTO",
    "ops.s2.card1.h3":           "Yacimiento Alberto",
    "ops.s2.card1.p":            "La concesión Alberto abarca aproximadamente 197 hectáreas en el flanco central norte de la Cuenca del Golfo San Jorge. Con 132 pozos perforados a lo largo de su historia, el campo contiene reservas probadas certificadas y cuenta con infraestructura operativa completa, incluyendo subestaciones eléctricas y acceso directo por oleoducto a terminales de exportación regionales.",
    "ops.s2.card2.eyebrow":      "YACIMIENTO DON ERNESTO",
    "ops.s2.card2.h3":           "Yacimiento Don Ernesto",
    "ops.s2.card2.p":            "La concesión Don Ernesto abarca aproximadamente 99 hectáreas, con 159 pozos perforados durante su historia productiva. El campo comparte las características geológicas de la Cuenca del Golfo San Jorge, con reservorios ubicados a aproximadamente 2.000 metros de profundidad en formaciones productivas probadas como Mina El Carmen, Comodoro Rivadavia y Salamanca.",

    "ops.s3.eyebrow":            "INFRAESTRUCTURA",
    "ops.s3.h2":                 "Infraestructura establecida que soporta producción inmediata.",
    "ops.s3.i1.title":           "Eléctrica",
    "ops.s3.i1.p":               "Ambos campos están conectados a la red de alta tensión regional de 13,2 kV a través de cuatro subestaciones de 500 KVA, operando al aproximadamente 10% de la capacidad instalada.",
    "ops.s3.i2.title":           "Gas",
    "ops.s3.i2.p":               "Cada campo cuenta con instalaciones de separación de gas con una capacidad combinada de aproximadamente 50.000 metros cúbicos por día, conectadas directamente al gasoducto troncal de Camuzzi Gas del Sur.",
    "ops.s3.i3.title":           "Oleoducto",
    "ops.s3.i3.p":               "El crudo se transporta a través de un oleoducto de 8 pulgadas hasta la planta de almacenamiento Kilómetro 9, conectándose a un ducto troncal de 14 pulgadas con acceso directo al terminal de exportación TERMAP en Caleta Córdova.",
    "ops.s3.i4.title":           "Régimen Especial",
    "ops.s3.i4.p":               "Nuestras concesiones operan bajo el histórico Código de Minería argentino, un marco legal único que otorga derechos de concesión a perpetuidad y ventajas fiscales excepcionales frente a los operadores convencionales de hidrocarburos.",

    "ops.s4.h2":                 "¿Interesado en nuestros activos?",
    "ops.s4.btn1":               "Contáctenos",
    "ops.s4.btn2":               "Nuestros Productos",

    /* — products.html */
    "prod.hero.eyebrow":         "PRODUCTOS",
    "prod.hero.h1":              "Una gama completa de productos petrolíferos refinados.",

    "prod.s1.eyebrow":           "COMERCIALIZACIÓN",
    "prod.s1.h2":                "Mercados locales e internacionales.",
    "prod.s1.p":                 "A través de IPP Oil &amp; Gas, comercializamos una cartera completa de productos petrolíferos refinados para compradores locales e internacionales. Nuestra conexión directa con el terminal de exportación TERMAP en Caleta Córdova permite una entrega eficiente y continua a mercados regionales y globales.",

    "prod.s2.h2":                "Nuestra cartera de productos.",
    "prod.s2.p1.name":           "Nafta",
    "prod.s2.p1.p":              "Nafta de alta calidad para aplicaciones petroquímicas y de refinación, cumpliendo especificaciones internacionales.",
    "prod.s2.p2.name":           "Gas Oil Grado 2",
    "prod.s2.p2.p":              "Gasoil estándar para uso automotriz e industrial, producido según normas de calidad argentinas e internacionales.",
    "prod.s2.p3.name":           "Gas Oil Grado 3",
    "prod.s2.p3.p":              "Formulación premium de gasoil con características de rendimiento mejoradas para aplicaciones industriales exigentes.",
    "prod.s2.p4.name":           "Fuel Oil",
    "prod.s2.p4.p":              "Fuel oil pesado para calderas industriales, generación de energía y aplicaciones térmicas a gran escala.",
    "prod.s2.p5.name":           "Gasoil Marino",
    "prod.s2.p5.p":              "Combustible marino destilado que cumple estándares marítimos internacionales para propulsión de embarcaciones y sistemas auxiliares.",
    "prod.s2.p6.name":           "IFO 180\u2013380",
    "prod.s2.p6.p":              "Mezclas de fuel oil intermedio para uso marino e industrial, disponibles en grados de viscosidad 180 y 380 CST.",

    "prod.s3.eyebrow":           "INFRAESTRUCTURA DE EXPORTACIÓN",
    "prod.s3.h2":                "Acceso directo a mercados internacionales.",
    "prod.s3.p":                 "Nuestro crudo y productos refinados se transportan a través de una red de oleoductos establecida directamente al terminal TERMAP en Caleta Córdova, Chubut — una de las principales instalaciones de exportación de petróleo de Argentina. Esta infraestructura permite una entrega rápida y rentable a compradores internacionales sin depender de logística de terceros.",

    "prod.s4.h2":                "¿Busca adquirir productos petrolíferos?",
    "prod.s4.btn1":              "Contáctenos",

    /* — safety.html */
    "sfty.hero.eyebrow":         "SEGURIDAD Y CALIDAD",
    "sfty.hero.h1":              "Seguridad. Calidad. Responsabilidad ambiental.",

    "sfty.s1.p":                 "Cada operación de IPP Oil &amp; Gas comienza y termina con la seguridad. Consideramos la seguridad un aspecto indispensable de toda actividad — para nuestro personal, nuestros clientes y las comunidades donde operamos.",

    "sfty.s2.eyebrow":           "NUESTRO ENFOQUE",
    "sfty.s2.h2":                "Tres pilares de excelencia operacional.",
    "sfty.s2.p1.title":          "Seguridad",
    "sfty.s2.p1.p":              "Aplicamos rigurosos protocolos de seguridad en todas las operaciones de campo. Todo el personal recibe capacitación profunda sobre las características técnicas de cada producto y la normativa de seguridad asociada a cada operación. Los controles de prevención de incidentes son obligatorios en cada etapa.",
    "sfty.s2.p2.title":          "Calidad",
    "sfty.s2.p2.p":              "Nuestros productos cumplen con todos los estándares de calidad, verificados mediante controles periódicos. Respetamos, exigimos y seguimos rigurosamente todas las normativas legales y de gestión que el negocio requiere y que los clientes necesitan. La precisión en la producción es una exigencia constante — las especificaciones técnicas son consideradas pilares básicos de nuestro crecimiento.",
    "sfty.s2.p3.title":          "Medio Ambiente",
    "sfty.s2.p3.p":              "Operamos con pleno respeto al medio ambiente y a las comunidades que rodean nuestros campos. Las evaluaciones de impacto ambiental y la gestión responsable de recursos son parte integral de cada decisión operativa de IPP Oil &amp; Gas.",

    "sfty.s3.eyebrow":           "CAPACIDAD TÉCNICA",
    "sfty.s3.h2":                "Análisis y medición avanzados.",
    "sfty.s3.p":                 "IPP Oil &amp; Gas cuenta con gran capacidad de análisis para controlar sus productos mediante tecnología aplicada a hidrocarburos. La investigación y el desarrollo de métodos de medición es considerada una fortaleza central — el objetivo último es afinar la evaluación de las materias primas y confirmar que los productos cumplen con todas sus especificaciones técnicas.",

    "sfty.s4.h2":                "¿Quiere saber más sobre nuestras operaciones?",
    "sfty.s4.btn1":              "Contáctenos",
    "sfty.s4.btn2":              "Nuestras Operaciones",

    /* — contact.html */
    "contact.hero.eyebrow":          "CONTACTO",
    "contact.hero.h1":               "Comuníquese con IPP Ltd.",

    "contact.s1.form.eyebrow":       "ENVIAR MENSAJE",
    "contact.s1.form.h2":            "Nos gustaría saber de usted.",
    "contact.form.label.name":       "Nombre completo",
    "contact.form.label.company":    "Empresa (opcional)",
    "contact.form.label.email":      "Correo electrónico",
    "contact.form.label.phone":      "Teléfono (opcional)",
    "contact.form.label.subject":    "Asunto",
    "contact.form.label.message":    "Mensaje",
    "contact.form.subject.default":  "Seleccione un tema\u2026",
    "contact.form.subject.opt1":     "Consulta comercial",
    "contact.form.subject.opt2":     "Información de inversión",
    "contact.form.subject.opt3":     "Operaciones",
    "contact.form.subject.opt4":     "Otro",
    "contact.form.ph.name":          "Su nombre completo",
    "contact.form.ph.company":       "Nombre de empresa",
    "contact.form.ph.email":         "su@correo.com",
    "contact.form.ph.phone":         "+54 (297) 000-0000",
    "contact.form.ph.message":       "Cuéntenos sobre su consulta\u2026",
    "contact.form.btn":              "Enviar Mensaje",
    "contact.form.note":             "Responderemos dentro de 2 días hábiles.",

    "contact.s1.info.eyebrow":       "INFORMACIÓN DE CONTACTO",
    "contact.s1.info.h4a":           "IPP Ltd (Holding)",
    "contact.s1.info.h4b":           "IPP Oil &amp; Gas (Operaciones)",

    "contact.s2.map":                "Mapa \u2014 Comodoro Rivadavia, Chubut",

    /* — Texto rotante (home) */
    "rotating.label": "Quiénes somos",
    "rotating.word1": "Operadores",
    "rotating.word2": "Inversores",
    "rotating.word3": "Socios",

    /* — Novedades (home) */
    "news.eyebrow":      "Sala de prensa",
    "news.title":        "Últimas novedades de IPP",
    "news.card1.title":  "IPP Oil &amp; Gas alcanza un nuevo hito de producción en el Campo Alberto",
    "news.card2.title":  "El Campo Don Ernesto completa su programa de mejora de infraestructura",
    "news.card3.title":  "IPP Ltd presenta resultados en el foro de inversores energéticos de Houston",
    "news.readmore":     "Leer más →",
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
