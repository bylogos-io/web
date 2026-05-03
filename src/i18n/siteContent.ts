export type AppLocale = "es" | "en" | "pt";

export const localeOptions = [
    { code: "es", shortLabel: "ES", nativeLabel: "Español" },
    { code: "en", shortLabel: "EN", nativeLabel: "English" },
    { code: "pt", shortLabel: "PT", nativeLabel: "Português" },
] as const;

const siteContent = {
    es: {
        seo: {
            ogLocale: "es_ES",
            languageAlternates: {
                "es-ES": "/es",
                "en-US": "/en",
                "pt-BR": "/pt",
            },
            layout: {
                titleDefault: "LogOS | Unificando IT y OT para Infraestructura Industrial",
                description:
                    "LogOS: La solución mixta de infraestructura y software que conecta el mundo analógico con la IA. Reducimos pérdidas en HH, optimizamos el control industrial y automatizamos reportes para Oil & Gas, Energía y Data Centers.",
                keywords: [
                    "LogOS",
                    "convergencia IT OT",
                    "infraestructura industrial",
                    "inteligencia artificial industrial",
                    "automatización de reportes",
                    "reducción de HH",
                    "eficiencia operativa",
                    "monitoreo OT",
                    "control industrial",
                    "SCADA",
                    "IIoT",
                    "Oil & Gas",
                    "Data Centers",
                    "Energy & Power",
                    "Food & Beverage",
                    "modernización infraestructura legada",
                    "gestión de activos industriales",
                    "gemelo digital",
                    "Edge Computing",
                ],
                openGraphTitle: "LogOS | Solución Mixta IT/OT para Infraestructura Crítica",
                openGraphDescription:
                    "LogOS adapta tu infraestructura analógica a la era de la IA. Reduce pérdidas de HH y revoluciona la toma de decisiones mediante control detallado y automatización de reportes.",
                openGraphImageAlt: "LogOS - Unificando IT y OT para Infraestructura Industrial",
                twitterTitle: "LogOS | Conectando el Campo OT con el Área IT",
                twitterDescription:
                    "Deja de analizar tu infraestructura a mano. LogOS automatiza reportes y adapta sistemas legados a algoritmos de inteligencia artificial.",
            },
            home: {
                title: "LogOS | Adaptando Infraestructura Industrial a la era de la IA",
                description:
                    "LogOS crea el puente entre el mundo analógico OT y el área IT. Solución mixta para modernizar infraestructura, reducir pérdidas en HH y revolucionar la toma de decisiones con AI.",
            },
            about: {
                title: "About",
                description:
                    "LogOS nace para resolver la brecha entre el mundo analógico y la IA. Nuestra misión es facilitar la vida de los técnicos y reducir pérdidas en HH mediante tecnología mixta de vanguardia.",
            },
            industries: {
                title: "Soluciones Industriales IT/OT | Sectores y Casos de Uso",
                description:
                    "Software elástico y hardware fácil de integrar para cualquier industria: Oil & Gas, Food & Beverage, Agua, Data Centers y Energía. Moderniza tus operaciones con LogOS.",
            },
            pricing: {
                title: "Planes y Precios",
                description:
                    "Invierte en eficiencia. Conoce nuestros planes para digitalizar tu infraestructura, reducir pérdidas en HH y automatizar reportes con LogOS.",
            },
            platform: {
                title: "Plataforma",
                description:
                    "Monitoreo en tiempo real, IA, gemelos digitales y reportes automáticos sobre la misma capa edge. Conoce la plataforma LogOS.",
            },
            partners: {
                title: "Partners",
                description:
                    "Programa de partners LogOS para integradores, EPCs y consultoras OT. Certificación, soporte de ingeniería y margen recurrente.",
            },
            contact: {
                title: "Contacto",
                description:
                    "Conversemos sobre tu operación. Demo, partnership o consulta técnica: te respondemos en menos de 24 horas hábiles.",
            },
        },
        common: {
            logosWordmarkAlt: "LogOS",
            socialLinkAriaLabel: "Visitar red social",
        },
        languageSwitcher: {
            label: "Cambiar idioma",
            menuTitle: "Idioma del sitio",
            currentLanguageLabel: "Idioma actual",
        },
        header: {
            logoAriaLabel: "Inicio",
            mobileMenuButtonAriaLabel: "Abrir menú de navegación",
            closeMenuAriaLabel: "Cerrar menú",
            menuTitle: "Menú",
            followUs: "SÍGUENOS",
            contactCta: "Contacto",
            navigation: [
                { label: "Inicio", href: "/" },
                { label: "Plataforma", href: "/platform" },
                { label: "Casos de uso", href: "/industries" },
                { label: "Novedades", href: "/news" },
                { label: "Socios", href: "/partners" },
                { label: "Nosotros", href: "/about" },
                { label: "Contacto", href: "/contact" },
            ],
        },
        footer: {
            tagline: "Revoluciona infraestructura industrial en tiempo real.",
            protocolsTitle: "Protocolos soportados",
            directContactTitle: "Contacto directo",
            contactButton: "Solicitar demo técnica",
            copyright: "© {year} LogOS. Todos los derechos reservados.",
            privacy: "Política de privacidad",
            terms: "Términos de servicio",
            contactInfoLabel: "Email técnico",
            protocols: ["Modbus RTU/TCP", "OPC UA (DA, AC, HDA)", "MQTT / MQTT-SN"],
        },
        home: {
            hero: {
                title: "El futuro industrial está en el borde.",
                subtitle: "GEMELOS DIGITALES, IIOT E INDUSTRIAL AI.",
            },
            clientsMarqueeLabel: "Confían en nosotros",
            demoVideo: {
                label: "ESTÁ ACÁ",
                title: "Mira cómo funciona",
                brand: "LogOS",
                description:
                    "Revisa el flujo completo de monitoreo, visualización y operación asistida por IA desde una sola plataforma.",
            },
            edgeArchitecture: {
                label: "ARQUITECTURA",
                titleStart: "Edge Computing e",
                titleAccent: "Industrial AI",
                nodes: {
                    field: { title: "Campo OT", subtitle: "Sensores, PLCs, etc." },
                    edge: { title: "Edge", subtitle: "LogOS" },
                    user: { title: "Usuario", subtitle: "Operación & Decisión" },
                },
                paragraphs: [
                    {
                        title: "Eficiencia y baja latencia",
                        body: "Procesamos los datos donde se generan. Las decisiones de control y los modelos de IA se ejecutan localmente, sin depender de Internet ni de servicios cloud que añaden retardo y costos por tráfico.",
                    },
                    {
                        title: "Gobernanza y seguridad",
                        body: "Tus datos operacionales nunca salen de tu planta. Mantienes la propiedad y el control total sobre la información sensible, cumpliendo políticas de seguridad industrial y regulaciones locales.",
                    },
                ],
            },
            features: {
                titleStart: "Funcionamiento",
                titleAccent: "Modular",
                description: "Arma tu propia solución escogiendo los módulos que necesitas!",
                items: [
                    {
                        title: "Monitoreo",
                        description:
                            "Supervisión en tiempo real de todos los parámetros eléctricos con latencia menor a 1 segundo.",
                    },
                    {
                        title: "Diagramas Unilineales",
                        description: "Esquemas interactivos con representación dinámica del estado de la instalación.",
                    },
                    {
                        title: "Registro de datos",
                        description:
                            "Acceso histórico completo a registros pasados con análisis de tendencias y patrones.",
                    },
                    {
                        title: "Alarmas inteligentes",
                        description: "Alarmas en base a eventos y predicciones para prevención de fallas.",
                    },
                    {
                        title: "Integraciones",
                        description:
                            "Mantente cerca de tu operación con integraciones de mensajería en tiempo real con WhatsApp, Telegram, Gmail y más.",
                    },
                    {
                        title: "Reportes Automáticos",
                        description:
                            "Generación de reportes de consumo automáticos con información detallada del estado.",
                    },
                    {
                        title: "Inteligencia Artificial",
                        description: "Asistente inteligente para un mejor análisis de cargas.",
                    },
                    {
                        title: "Gemelo Digital",
                        description:
                            "Representa tu proceso en el mundo digital con una copia exacta de tu instalación.",
                    },
                    {
                        title: "Acceso dondequiera que estés",
                        description:
                            "Toda tu información sincronizada y disponible desde cualquier dispositivo, sin importar dónde te encuentres.",
                    },
                ],
            },
            hardware: {
                eyebrow: "¿NO TIENES INFRAESTRUCTURA?",
                titleStart: "Hardware",
                titleAccent: "Industrial",
                description:
                    "Si tu planta aún no tiene los equipos para correr LogOS, te ofrecemos hardware industrial pre-instalado y validado. Llave en mano, listo para conectar.",
                vatExcluded: "IVA NO INCLUIDO",
                technicalSpecs: "ESPECIFICACIONES TÉCNICAS",
                useCaseLabel: "Caso de uso:",
                quoteButton: "SOLICITAR COTIZACIÓN",
                partnership:
                    "LogOS está probado y optimizado para hardware SEEED Studio, garantizando máximo rendimiento, seguridad y compatibilidad total en entornos industriales críticos de alta exigencia.",
                options: [
                    {
                        subtitle: "Panel de Control Interactivo",
                        description:
                            "Terminal industrial con pantalla táctil integrada para control directo y visualización en tiempo real con sistema LogOS pre-instalado.",
                        features: [
                            'Pantalla táctil 10.1"',
                            "Cámara integrada",
                            "WiFi 6 + Bluetooth 5.0",
                            "PoE+ alimentación",
                        ],
                        specs: ["Resolución 1280x800", "IP65 clasificación", "Serial RS485", "IEC 61850 compatible"],
                        useCase: "Ideal para salas de control, cabinas de operador y puntos de supervisión local.",
                        highlight: "Interfaz Local",
                    },
                    {
                        subtitle: "Gateway Edge Industrial",
                        description:
                            "Computadora industrial compacta optimizada para ejecutar LogOS como servidor web local y gateway de comunicaciones de alto rendimiento.",
                        features: [
                            "Rendimiento de nivel servidor",
                            "6 meses de retención",
                            "Ethernet Gigabit x2",
                            "ARM Cortex-A72 Quad-core",
                        ],
                        specs: ["8GB RAM DDR4", "Sin ventiladores", "Riel DIN para montaje", "Temperaturas críticas"],
                        useCase:
                            "Perfecto para despliegues locales, edge computing y servidores locales de alta disponibilidad.",
                        highlight: "Comunicación",
                    },
                    {
                        subtitle: "Procesador Inteligente",
                        description:
                            "Hardware industrial equipado con potente procesamiento neuronal para inferencia de modelos predictivos de la plataforma LogOS en tiempo real.",
                        features: [
                            "Aceleración de AI Edge",
                            "Máximo rendimiento",
                            "Inferencia optimizada",
                            "16GB RAM LPDDR4x",
                        ],
                        specs: [
                            "Raspberry Pi 5",
                            "Acelerador Hailo 8",
                            "Riel DIN o montaje en pared",
                            "Entornos industriales",
                        ],
                        useCase:
                            "Ideal para procesamiento complejo local y análisis de video / imagenes en tiempo real.",
                        highlight: "Cerebro Inteligente",
                    },
                ],
            },
            comparison: {
                eyebrow: "LA CUARTA",
                title: "Revolución Industrial",
                description:
                    "El monitoreo de datos y la IA han llegado para cambiar las reglas del juego industrial. LogOS unifica tu operación en una sola inteligencia.",
                beforeLabel: "ANTES: LEGACY",
                afterLabel: "AHORA: ECOSISTEMA LOGOS",
                savingsTitle: "AHORRA EN HH Y OBTIENES EFICIENCIA",
                savingsDescription: "Optimiza tu uso de los recursos",
                beforeItems: [
                    { title: "Silos de Datos", desc: "Información fragmentada y difícil de auditar en tiempo real." },
                    {
                        title: "Costo de Infraestructura",
                        desc: "Servidores independientes, licencias separadas y hardware cerrado.",
                    },
                    {
                        title: "Mantenimiento Reactivo",
                        desc: "El sistema solo avisa cuando el fallo ya ha ocurrido. Mantenimiento costoso.",
                    },
                    {
                        title: "Brechas de Seguridad",
                        desc: "Protocolos antiguos y vulnerables sin actualizaciones constantes.",
                    },
                    { title: "Interfaces Incómodas", desc: "Interfaz de usuario desordenada y difícil de usar." },
                    { title: "Interoperabilidad Nula", desc: "No se puede integrar con sistemas externos." },
                ],
                afterItems: [
                    {
                        title: "Inteligencia Predictiva",
                        desc: "Anticípate a fallas críticas antes de que ocurran mediante modelos de IA.",
                    },
                    {
                        title: "Single Source of Truth",
                        desc: "Tu operación completa en una sola plataforma, auditable y transparente.",
                    },
                    {
                        title: "Eficiencia Energética",
                        desc: "Reportes y análisis autónomos para que puedas optimizar tu consumo eléctrico.",
                    },
                    {
                        title: "TCO Reducido",
                        desc: "Elimina CAPEX pesado; escala tu infraestructura según tus necesidades.",
                    },
                    {
                        title: "Continuidad Operacional",
                        desc: "Monitoreo 24/7 desde la nube y alertas de misión crítica dondequiera que estés.",
                    },
                    {
                        title: "Ciberseguridad Total",
                        desc: "Encriptación de punto a punto y cumplimiento de estándares internacionales.",
                    },
                ],
            },
            testimonials: {
                eyebrow: "CASOS DE ÉXITO",
                titleStart: "Resultados que hablan",
                titleAccent: "por sí mismos",
                description:
                    "Empresas líderes confían en LogOS para gestionar sus infraestructuras eléctricas más críticas.",
                keyResultLabel: "Resultado clave:",
                stats: [
                    { value: "10", label: "Meses de monitoreo" },
                    { value: "99%", label: "Disponibilidad" },
                    { value: "1036M+", label: "Registros de Monitoreo" },
                    { value: "24/7", label: "Soporte Técnico" },
                ],
                items: [
                    {
                        industry: "Medicina",
                        quote: "LogOS nos ha permitido reducir el tiempo de respuesta ante emergencias. La integración con nuestros sistemas legacy fue perfecta.",
                        metrics: "Reacción 60% más rápida.",
                    },
                    {
                        industry: "Alimentos",
                        quote: "Con LogOS podemos monitorear el consumo energético en cada proceso de producción y optimizarlo para reducir el desperdicio.",
                        metrics: "Consumo energético optimizado.",
                    },
                    {
                        industry: "Energía Renovable",
                        quote: "La SUITE de desarrollo de LogOS es impecable, nos facilita la creación de soluciones para nuestros clientes.",
                        metrics: "Desarrollo 50% más rápido.",
                    },
                ],
            },
            newsletter: {
                successTitle: "Bienvenido!",
                successDescription:
                    "Tu suscripción ha sido confirmada correctamente. Pronto recibirás nuestras actualizaciones técnicas y novedades industriales.",
                subscribeAnother: "Suscribir otro correo",
                eyebrow: "CONTACTO",
                titleStart: "Expertiz Técnica",
                titleAccent: "con nosotros",
                description:
                    "Únete a nuestra comunidad industrial para recibir las últimas actualizaciones de producto o escríbenos directamente a",
                benefitsTitle: "Valor exclusivo para ti",
                formTitle: "Suscríbete ahora",
                formSubtitle: "Mantente a la vanguardia industrial",
                nameLabel: "Nombre y Apellido",
                emailLabel: "email@empresa.com",
                submitting: "SUSCRIBIENDO...",
                submit: "SUSCRIBIRSE GRATIS",
                privacyNote: "* Respetamos tu privacidad. No enviamos spam.",
                supportedBy: "Apoyados por",
                invalidEmail: "Por favor, introduce un email válido",
                subscribeError: "Hubo un problema al procesar tu suscripción. Inténtalo de nuevo.",
                benefits: [
                    {
                        title: "Actualizaciones técnicas",
                        description: "Nuevas funcionalidades, protocolos soportados y mejoras de rendimiento de LogOS.",
                    },
                    {
                        title: "Casos de uso industriales",
                        description:
                            "Implementaciones reales, configuraciones optimizadas y mejores prácticas de campo.",
                    },
                    {
                        title: "Tendencias del sector",
                        description:
                            "Análisis de mercado, nuevos estándares IEC y evolución tecnológica del Sector Eléctrico.",
                    },
                    {
                        title: "Alertas de seguridad",
                        description:
                            "Vulnerabilidades, parches críticos y recomendaciones proactivas de ciberseguridad industrial.",
                    },
                ],
            },
            landingV2: {
                hero: {
                    eyebrow: "ADIÓS AL MONITOREO LEGACY",
                    titleLead: "Conecta tu industria con la",
                    titleEmphasis: "IA.",
                    sub: "LogOS es la infraestructura que digitaliza tu campo existente sin reemplazarlo.",
                    subSecondary: "Datos y decisiones en el borde, monitoreo donde estés.",
                    subTertiary: "Preparamos tu industria para la era de la IA: gemelos digitales como visualizaciones 3D en tiempo real con asistencia inteligente — no una tabla de Excel.",
                    audience: "Para plantas con equipos OT en monitoreo manual, Excel o SCADA aislado.",
                    highlight: "Incluye Gemelo Digital 3D · Monitoreo en vivo",
                    ctaPrimary: "Solicitar demo técnica",
                    ctaSecondary: "Ver cómo funciona",
                    ctaPrimaryHref: "/contact",
                    ctaSecondaryHref: "#demo-video",
                    callouts: [
                        { label: "LATENCIA", value: "<1s" },
                        { label: "ARQUITECTURA", value: "Edge Native" },
                        { label: "PROTOCOLOS", value: "Modbus, OPC, MQTT..." },
                        { label: "DESPLIEGUE EN", value: "7 días" },
                    ],
                },
                integrations: {
                    label: "INTEGRACIONES NATIVAS",
                    sub: "Hardware-agnostic. Conecta cualquier infraestructura sin reemplazar.",
                    protocolsLabel: "PROTOCOLOS",
                    protocols: ["Modbus RTU/TCP", "OPC-UA", "MQTT / MQTT-SN", "Profibus", "Telnet", "IEC 61850"],
                    vendorsLabel: "FABRICANTES",
                    vendors: ["Siemens", "Allen-Bradley", "Schneider", "Rockwell", "ABB", "Phoenix Contact"],
                },
                pillars: {
                    eyebrow: "ARQUITECTURA",
                    title: "Cuatro pilares. Una plataforma.",
                    sub: "El stack mínimo para cerrar la brecha entre tu campo OT y tu IT.",
                    items: [
                        {
                            n: "01",
                            title: "Conecta lo legacy",
                            claim: "Modbus, OPC UA, MQTT, IEC 61850 y 40+ familias de PLC soportadas.",
                            outcome: "Sin reemplazar tu infraestructura. Sin parar la operación.",
                        },
                        {
                            n: "02",
                            title: "Decide en el borde",
                            claim: "IA local, retención 6+ meses, opera sin internet.",
                            outcome: "Tus datos no salen de la planta. Soberanía y baja latencia.",
                        },
                        {
                            n: "03",
                            title: "Opera donde estés",
                            claim: "Dashboards web, alertas WhatsApp/Telegram, reportes automáticos.",
                            outcome: "Tu planta en el bolsillo. Reduce tiempos de respuesta a minutos.",
                        },
                        {
                            n: "04",
                            title: "Predice antes de fallar",
                            claim: "Modelos predictivos sobre el histórico del activo.",
                            outcome: "Mantenimiento basado en condición. Menos paradas no planificadas.",
                        },
                    ],
                },
                beforeAfter: {
                    eyebrow: "ANTES / DESPUÉS",
                    title: "De Excel a inteligencia operativa.",
                    sub: "Lo que cambia el día que LogOS se pone en marcha.",
                    before: {
                        label: "INFRAESTRUCTURA TRADICIONAL",
                        items: [
                            { title: "SCADA aislado", body: "Datos atrapados en la sala de control." },
                            { title: "Reportes manuales en Excel", body: "Horas-hombre que no aportan valor." },
                            { title: "Alertas vía radio o teléfono", body: "Tiempo de respuesta en horas." },
                            {
                                title: "Mantenimiento reactivo",
                                body: "Fallas que se descubren cuando ya pararon la planta.",
                            },
                            {
                                title: "Sin trazabilidad histórica",
                                body: "Auditorías dependientes de la memoria del operador.",
                            },
                        ],
                    },
                    after: {
                        label: "OPERACIÓN CON LOGOS",
                        items: [
                            {
                                title: "Datos unificados en tiempo real",
                                body: "Una sola fuente de verdad para campo, IT y dirección.",
                            },
                            { title: "Reportes generados solos", body: "PDF semanal en tu correo. Sin Excel manual." },
                            {
                                title: "Alertas en WhatsApp/Telegram",
                                body: "Tiempo de respuesta en minutos, desde donde estés.",
                            },
                            {
                                title: "Mantenimiento predictivo",
                                body: "IA que anticipa fallas antes de que detengan la línea.",
                            },
                            {
                                title: "Histórico auditable 6+ meses",
                                body: "Tendencias, cumplimiento y aprendizaje continuo.",
                            },
                        ],
                    },
                },
                edge: {
                    eyebrow: "ARQUITECTURA EDGE",
                    titleStart: "Edge computing e",
                    titleAccent: "Industrial AI.",
                    sub: "Datos donde se generan. Decisiones donde importan.",
                    nodes: {
                        field: {
                            title: "Campo OT",
                            tag: "01 · ENTRADA",
                            lines: [
                                "Sensores 4-20mA / RS485",
                                "PLCs Siemens, AB, Schneider",
                                "Modbus, OPC UA, IEC 61850",
                            ],
                        },
                        edge: {
                            title: "LogOS Edge",
                            tag: "02 · CÓMPUTO",
                            lines: ["IA local sin internet", "Retención 6 meses", "Procesamiento sub-segundo"],
                        },
                        user: {
                            title: "Usuario",
                            tag: "03 · SALIDA",
                            lines: [
                                "Dashboards web responsivos",
                                "Alertas WhatsApp / Telegram",
                                "Reportes PDF automáticos",
                            ],
                        },
                    },
                    benefits: [
                        {
                            title: "Baja latencia operativa",
                            body: "Decisiones de control e inferencia de IA corren localmente. Sub-segundo extremo a extremo.",
                        },
                        {
                            title: "Soberanía de datos",
                            body: "Tu data operativa nunca sale de la planta sin tu autorización. Cumplimiento por diseño.",
                        },
                    ],
                },
                verticals: {
                    eyebrow: "INDUSTRIAS",
                    title: "Diseñado para infraestructura crítica.",
                    sub: "Siete verticales en producción. Y la tuya, sea cual sea.",
                    items: [
                        {
                            tag: "OIL & GAS",
                            title: "Petróleo y Gas",
                            line: "Telemetría remota 24/7 sobre SCADA legacy.",
                        },
                        {
                            tag: "DATACENTER",
                            title: "Centros de Datos",
                            line: "PUE, BMS legacy y prevención de caídas.",
                        },
                        {
                            tag: "AGUAS",
                            title: "Aguas y Saneamiento",
                            line: "Telemetría confiable para redes distribuidas.",
                        },
                        {
                            tag: "ENERGÍA",
                            title: "Generación y Distribución",
                            line: "Activos aislados conectados a la nube de forma segura.",
                        },
                        {
                            tag: "F&B",
                            title: "Alimentos y Bebidas",
                            line: "Trazabilidad y KPIs de planta automatizados.",
                        },
                        {
                            tag: "MANUFACTURA",
                            title: "Manufactura",
                            line: "OEE, control de proceso y trazabilidad en líneas de producción.",
                        },
                        {
                            tag: "HVAC",
                            title: "Climatización",
                            line: "Control y monitoreo HVAC para optimizar consumo energético y confort.",
                        },
                        {
                            tag: "TU INDUSTRIA",
                            title: "¿La tuya no aparece?",
                            line: "LogOS es agnóstico a la industria. Si tienes campo OT, lo conectamos.",
                            agnostic: true,
                        },
                    ],
                    cta: "Ver todos los casos",
                    ctaHref: "/industries",
                },
                heroCase: {
                    eyebrow: "CASO ESTRELLA",
                    quote: "LogOS reemplazó nuestros reportes manuales y nos dio visibilidad sobre 99% de los activos. Reaccionamos un 60% más rápido a emergencias.",
                    cite: "Equipo de Operaciones",
                    role: "Redsalud · Sector Salud",
                    inProductionSince: "2025-03-01",
                    inProductionLabel: "En producción",
                    monthsUnit: "meses",
                    yearsUnit: "años",
                    metrics: [
                        { value: "60%", label: "Reacción más rápida" },
                        { value: "99%", label: "Disponibilidad monitoreada" },
                        { value: "1.036M+", label: "Registros procesados" },
                    ],
                },
                security: {
                    eyebrow: "SEGURIDAD POR DISEÑO",
                    title: "Cumplimiento industrial sin fricción.",
                    sub: "Edge soberano, comunicación cifrada, control de acceso por rol.",
                    badges: [
                        { name: "IEC 62443", tag: "Ciberseguridad industrial" },
                        { name: "ISO 27001", tag: "Gestión de seguridad" },
                        { name: "Soberanía datos", tag: "Edge local, sin cloud forzado" },
                        { name: "RBAC + 2FA", tag: "Control de acceso granular" },
                    ],
                },
                founder: {
                    eyebrow: "DESDE EL CAMPO",
                    line: "Nacimos en planta. Vimos a técnicos perder horas haciendo reportes en Excel mientras la IA esperaba. LogOS arregla eso.",
                },
                newsletterCompact: {
                    title: "Mantente al borde.",
                    sub: "Updates de producto, casos de campo y alertas de ciberseguridad industrial.",
                    placeholder: "email@empresa.com",
                    cta: "Suscribirse",
                    privacy: "Sin spam. Cancela cuando quieras.",
                },
            },
        },
        about: {
            heroEyebrow: "MANIFESTO",
            heroTitle: "¿Por qué LogOS?",
            heroHeadline: "El futuro de la industria está en el edge",
            heroSub: "Modernizamos infraestructura industrial sin reemplazar lo que ya funciona. Procesamos donde se generan los datos, mantenemos el control en planta y llevamos IA al campo, no a la nube. Construido desde Hispanoamérica para operaciones que no pueden permitirse caer.",
            heroBadgeLabel: "EST. 2024 · LATAM",
            whyEyebrow: "POR QUÉ",
            whyKicker: "Cerramos la brecha entre IT y OT.",
            paragraphs: [
                "Estamos cerrando la brecha entre el IT y el OT en la infraestructura industrial que sostiene el mundo moderno. La industria opera con PLCs y sistemas legacy que no permiten la recolección, el análisis de datos ni la correcta implementación de la IA. LogOS conecta este entorno para entregar monitoreo, predicción y análisis operativo en tiempo real respecto a los datos aprovechados de campo, aplicando herramientas digitales en entornos analógicos. Entregamos herramientas modernas al O&M, aumentando considerablemente la productividad.",
                "Entendemos el desafío y temor a probar nuevas tecnologías en áreas críticas; por eso creamos LogOS, operando desde Hispanoamérica, como una solución amigable que se integra fácilmente a tu infraestructura sin interrumpir lo que funciona. Aportamos lo necesario para que la industria se atreva a dar el salto hacia la IA.",
            ],
            principlesTitle: "Lo que nos mueve",
            principlesDescription:
                "Tres principios guían cada decisión técnica y de producto en LogOS.",
            principles: [
                {
                    title: "Operación primero",
                    description:
                        "Nuestro punto de partida es siempre el técnico de planta. Si una solución no le simplifica la vida, no la construimos.",
                },
                {
                    title: "Soberanía del dato",
                    description:
                        "Tus datos operacionales son tuyos. Procesamos en el edge y nunca obligamos a sacar información sensible de tu planta.",
                },
                {
                    title: "Pragmatismo industrial",
                    description:
                        "Trabajamos sobre lo que ya existe. Modernizamos sin reemplazar PLCs ni interrumpir procesos que funcionan.",
                },
            ],
            foundersTitle: "Nuestros fundadores",
            founders: [{ role: "Co-Founder & CEO / CTO" }, { role: "Co-Founder & Board Advisor" }],
        },
        industries: {
            heroEyebrow: "CASOS DE USO",
            heroTitle: "Operaciones críticas en industrias exigentes",
            heroDescription: "Energía, infraestructura crítica, agua, manufactura y más.",
            featuredEyebrow: "CASOS DESTACADOS",
            featuredCaption: "FOTO: Planta industrial",
            featuredChallengeLabel: "DESAFÍO",
            featuredSolutionLabel: "SOLUCIÓN",
            featuredImpactLabel: "IMPACTO OPERATIVO",
            othersEyebrow: "LISTADO DE CASOS",
            othersTitle: "Listado de casos",
            othersDescription:
                "Cómo aplicamos LogOS en distintos sectores: desde misión crítica hasta despliegues a escala. Algunos clientes no son revelados públicamente por NDA.",
            kpisLabel: "MÉTRICAS",
            sliderTitle: "Industrias Inteligentes",
            previousAriaLabel: "Anterior",
            nextAriaLabel: "Siguiente",
            titleSection: "Soluciones por Sector",
            descriptionSection: "Explora cómo optimizamos cada industria con tecnología de punta.",
            footerTitle: "¿Tu industria no aparece aquí?",
            footerDescription:
                "Nuestra arquitectura hardware-agnostic permite la integración en prácticamente cualquier entorno industrial que requiera monitoreo y control avanzado.",
            footerButton: "Contáctanos",
            cards: [
                {
                    title: "Petróleo y Gas",
                    description:
                        "Moderniza sistemas de extracción y refinería legacy integrando telemetría en la nube sin interrumpir la operación actual.",
                    points: [
                        "Integración con PLCs y SCADA",
                        "Monitoreo remoto 24/7",
                        "Detección temprana de fallas con IA",
                    ],
                },
                {
                    title: "Centros de Datos",
                    description:
                        "Supervisión continua de infraestructura crítica (cooling, energía, ambiente) para maximizar la disponibilidad integrando sistemas legacy.",
                    points: ["Monitoreo de PUE", "Integración BMS legacy", "Alertas de prevención de caídas"],
                },
                {
                    title: "Aguas y Saneamiento",
                    description:
                        "Gestión centralizada de plantas de tratamiento y redes de distribución mediante recolección de datos agnóstica al hardware.",
                    points: [
                        "Telemetría de campo confiable",
                        "Alertas y prevención de fugas",
                        "Dashboards operativos en tiempo real",
                    ],
                },
                {
                    title: "Energía",
                    description:
                        "Transforma datos de generación y distribución en insights accionables, conectando activos aislados a la nube de manera segura.",
                    points: [
                        "Infraestructura legacy a la nube",
                        "Analítica de eficiencia energética",
                        "Monitoreo predictivo continuo",
                    ],
                },
                {
                    title: "Alimentos y Bebidas",
                    description:
                        "Asegura la calidad y la eficiencia conectando los sensores de piso directamente a herramientas de monitoreo y análisis.",
                    points: [
                        "Trazabilidad completa de variables",
                        "Control automatizado 24/7",
                        "Cumplimiento y reportes de KPIs",
                    ],
                },
                {
                    title: "Manufactura",
                    description:
                        "OEE, control de proceso y trazabilidad en líneas mixtas con PLCs heterogéneos y sistemas legacy de planta.",
                    points: [
                        "OEE y eficiencia operativa",
                        "Trazabilidad de lotes y turnos",
                        "Integración multi-marca de PLCs",
                    ],
                },
                {
                    title: "Climatización",
                    description:
                        "Control y monitoreo de sistemas HVAC en edificios e instalaciones críticas. Optimiza consumo energético y confort sin reemplazar equipos.",
                    points: [
                        "Optimización de consumo energético",
                        "Monitoreo de temperatura y humedad",
                        "Control supervisado remoto",
                    ],
                },
            ],
            sliderItems: [
                {
                    title: "Petróleo y Gas",
                    description:
                        "Lleva la inteligencia artificial y conectividad cloud a entornos de alta disponibilidad y exigencia.",
                },
                {
                    title: "Datos",
                    description:
                        "Supervisión continua de infraestructura crítica para garantizar disponibilidad y eficiencia operativa (PUE).",
                },
                {
                    title: "Aguas",
                    description:
                        "Optimiza la gestión hídrica integrando telemetría y monitoreo centralizado de activos distribuidos.",
                },
                {
                    title: "Energía",
                    description:
                        "Conecta infraestructura de generación legacy para lograr visibilidad, predicción y control.",
                },
                {
                    title: "Producción",
                    description:
                        "Trazabilidad, calidad y control garantizado al unir los datos del piso de producción con el IT.",
                },
                {
                    title: "Manufactura",
                    description:
                        "OEE, control de proceso y trazabilidad en líneas mixtas con PLCs heterogéneos.",
                },
                {
                    title: "Climatización",
                    description:
                        "Control y monitoreo de sistemas HVAC para optimizar consumo energético y confort.",
                },
            ],
            usageEyebrow: "USO DEL SOFTWARE",
            caseAriaLabel: "Caso",
            solutions: [
                "Conexión segura de PLCs/SCADA legacy con telemetría continua y modelos predictivos en el edge para anticipar fallas en tiempo real.",
                "Capa unificada sobre BMS y sistemas de cooling. Telemetría sub-segundo y alarmas de prevención de caídas con IA.",
                "Telemetría agnóstica al hardware sobre redes distribuidas. Monitoreo central con alertas tempranas de fugas y rendimiento.",
                "Conectividad cloud sobre activos aislados. Analítica de eficiencia energética y monitoreo continuo del estado.",
                "Datos del piso de planta unificados con IT. Trazabilidad de variables y reportes de KPIs automatizados.",
                "OEE en tiempo real sobre líneas mixtas. Integración multi-marca de PLCs y trazabilidad por lote y turno.",
                "Control supervisado de HVAC sobre equipos existentes. Optimización energética sin reemplazar infraestructura.",
            ],
            usageScenarios: [
                {
                    title: "Plataformas y refinerías sin pausa operativa",
                    body: "LogOS se conecta a PLCs y SCADAs existentes mediante OPC UA, Modbus y MQTT. Los operadores ven flujos de pozo, presiones y niveles en dashboards en tiempo real. La IA detecta desviaciones tempranas y dispara alertas a campo por WhatsApp o radio. Reportes regulatorios se generan automáticamente.",
                },
                {
                    title: "Visibilidad continua de PUE, cooling y energía",
                    body: "LogOS unifica BMS legacy, UPS, chillers y sensores ambientales en una sola capa. Los equipos de O&M monitorean PUE en vivo, anticipan caídas con alertas predictivas y revisan tendencias por sala. Cumple políticas de seguridad sin sacar datos del sitio.",
                },
                {
                    title: "Telemetría confiable sobre redes distribuidas",
                    body: "Conectamos sensores de caudal, presión y calidad de plantas y elevadoras dispersas. LogOS consolida datos en una vista central, alerta sobre fugas y rebalses, y genera reportes operativos automáticos. Funciona aunque caiga la conectividad por el procesamiento en el edge.",
                },
                {
                    title: "Activos de generación conectados sin tocar el control",
                    body: "LogOS lee desde generadores, transformadores y subestaciones en tiempo real. Los analistas ven eficiencia energética, predicen mantenimientos y reciben alertas operativas. Integración no intrusiva sobre infraestructura existente, sin reemplazar el sistema de control.",
                },
                {
                    title: "Trazabilidad y KPIs de planta automatizados",
                    body: "Cada variable del piso de planta — temperatura, pH, dosificación, tiempos de ciclo — se registra y correlaciona en LogOS. Los reportes de calidad y cumplimiento se generan solos. Las alarmas inteligentes avisan antes de que el lote salga de especificación.",
                },
                {
                    title: "OEE en vivo sobre líneas mixtas",
                    body: "LogOS habla con PLCs de distintas marcas, ERPs y MES. El equipo de manufactura ve OEE por línea, turno y máquina. Los reportes de eficiencia y trazabilidad de lotes se exportan automáticamente. Cambios de receta y cuellos de botella se detectan en minutos, no en auditorías.",
                },
                {
                    title: "HVAC supervisado y optimizado a distancia",
                    body: "LogOS se conecta a controladores HVAC existentes, sensores de temperatura, humedad y CO₂. Optimiza setpoints automáticamente, detecta consumo anómalo y permite control remoto sobre múltiples edificios. La gestión energética se vuelve continua y comparable entre sitios.",
                },
            ],
        },
        pricing: {
            eyebrow: "INVERSIÓN CLARA Y ESCALABLE",
            titleStart: "Planes y",
            titleAccent: "Precios",
            description:
                "Transparencia y escalabilidad. Nuestro modelo combina la instalación de infraestructura inicial con una suscripción mensual adaptable a las necesidades de tu operación.",
            installationTitle: "Instalación Inicial",
            installationPrice: "A la medida",
            installationSubtitle: "Estructurado según tus necesidades operativas",
            installationDescription:
                "Despliegue físico de la infraestructura. Conectamos y digitalizamos los equipos existentes en tu instalación con nuestros tableros de datos.",
            installationButton: "Cotizar Instalación",
            installationFeatures: [
                "Hardware y dispositivos de medición incluidos.",
                "Integración completa con sistemas OT existentes.",
                "Licencia inicial del software LogOS.",
                "Cantidad de tableros ajustada al tamaño de la infraestructura.",
            ],
            subscriptionTitle: "Suscripción Operativa",
            subscriptionPrice: "Desde $200",
            subscriptionPeriod: "/ mes",
            subscriptionSubtitle: "Suscripción operativa según tu infraestructura",
            subscriptionDescription:
                "Acceso continuo a la plataforma LogOS para monitorear, analizar y gestionar tus operaciones de forma centralizada y segura.",
            subscriptionButton: "Contactar a Ventas",
            subscriptionFeatures: [
                "Monitoreo cloud en tiempo real.",
                "Sistema de alertas críticas.",
                "2 usuarios activos incluidos.",
                "6 meses de retención histórica de datos.",
            ],
            modulesTitle: "Módulos Adicionales",
            modulesDescription:
                "Sobre la suscripción base, puedes ampliar las funcionalidades de LogOS según las necesidades operativas de tu infraestructura. El sistema modular permite que cada instalación escale progresivamente en capacidad y precio.",
            modules: [
                {
                    title: "Mensajería Avanzada",
                    description:
                        "Integración de alertas críticas con WhatsApp, Telegram o canales corporativos para reducir tiempos de respuesta.",
                },
                {
                    title: "Reportes Automatizados",
                    description:
                        "Generación y envío periódico de informes de rendimiento, consumo energético y KPIs operativos directamente a los tomadores de decisiones.",
                },
                {
                    title: "Gemelo Digital 3D",
                    description:
                        "Visualización inmersiva de tu infraestructura, permitiendo localizar en tiempo real el estado de válvulas, sensores y motores.",
                },
                {
                    title: "Mayor Retención de Datos",
                    description:
                        "Expande la memoria histórica de 6 meses a años, construyendo un gran volumen de datos esencial para análisis predictivos a largo plazo e IA.",
                },
                {
                    title: "Usuarios Adicionales",
                    description:
                        "Escala el acceso a la plataforma según crezca tu equipo de operación y mantenimiento, definiendo roles y privilegios por área.",
                },
                {
                    title: "Nuevos Dispositivos",
                    description:
                        "Capacidad de integrar más sensores, PLCs de nuevas marcas, tableros adicionales u otros equipos OT sin fricción.",
                },
            ],
        },
        privacy: {
            backHome: "Volver al inicio",
            title: "Política de Privacidad",
            contactIntro:
                "Para cualquier pregunta o comentario sobre esta política de privacidad, por favor contáctanos a:",
            sections: [
                {
                    title: "Responsabilidad del tratamiento de datos",
                    content:
                        "BYLOGOS SPA es responsable de la recolección, almacenamiento, procesamiento y protección de los datos obtenidos a través del software LogOS.",
                },
                {
                    title: "Tipos de datos recolectados",
                    content: "LogOS puede recolectar y procesar los siguientes datos:",
                    list: [
                        "Datos de usuario: nombre, correo electrónico, credenciales de acceso, roles y permisos.",
                        "Datos de clientes: información de la compañía, ubicaciones de plantas o instalaciones, y configuración de sistemas eléctricos.",
                        "Datos operativos: consumo eléctrico por dispositivo, registros de eventos y alarmas, información de sensores y dispositivos conectados (medición, estado, logs).",
                        "Datos de uso del software: interacciones con la plataforma, tiempos de conexión, errores y eventos de desempeño.",
                    ],
                },
                {
                    title: "Finalidad del tratamiento",
                    content: "Los datos recolectados se utilizan para:",
                    list: [
                        "Monitoreo y análisis de consumo eléctrico en tiempo real.",
                        "Optimización de procesos industriales mediante IA y algoritmos de NILM.",
                        "Generación de reportes y alertas operativas personalizadas.",
                        "Seguridad, auditoría y prevención de accesos no autorizados.",
                        "Mejora del software y soporte técnico al usuario.",
                    ],
                },
                {
                    title: "Bases del tratamiento",
                    content: "El tratamiento de datos se realiza bajo las siguientes bases:",
                    list: [
                        "Consentimiento explícito del usuario o representante legal de la empresa.",
                        "Cumplimiento de obligaciones contractuales y legales aplicables.",
                        "Interés legítimo de LogOS para mantener la operación, seguridad y mejora continua del software.",
                    ],
                },
                {
                    title: "Compartición y transferencia de datos",
                    content: [
                        "LogOS no venderá ni compartirá datos con terceros sin consentimiento explícito, salvo obligaciones legales.",
                        "Datos pueden ser transferidos a proveedores de servicios bajo acuerdos de confidencialidad y seguridad equivalentes.",
                        "Para clientes con múltiples instalaciones, los datos pueden procesarse localmente en dispositivos Edge Computing y almacenados en servidores para garantizar respaldo y seguridad.",
                    ],
                },
                {
                    title: "Seguridad de los datos",
                    content: [
                        "Todos los datos se almacenan de manera segura mediante cifrado en tránsito y en reposo.",
                        "Accesos administrativos se limitan mediante autenticación fuerte y control de permisos.",
                        "Se implementan medidas de monitoreo de integridad, detección de intrusiones y respaldo local de información crítica.",
                    ],
                },
                {
                    title: "Retención de los datos",
                    content: [
                        "Datos operativos se almacenan mientras sean necesarios para fines de operación, análisis y cumplimiento legal.",
                        "Datos personales se conservan hasta que el usuario solicite su eliminación o retiro del consentimiento.",
                    ],
                },
                {
                    title: "Derechos de los usuarios",
                    content: "Los usuarios tienen derecho a:",
                    list: [
                        "Acceder a sus datos personales y operativos.",
                        "Rectificar información incorrecta o incompleta.",
                        "Eliminar sus datos personales en cualquier momento.",
                        "Retirar su consentimiento en cualquier momento.",
                        "Recibir una copia de sus datos personales en formato legible.",
                    ],
                },
                {
                    title: "Modificaciones de la política",
                    content:
                        "LogOS se reserva el derecho de modificar esta política de privacidad en cualquier momento. Las modificaciones serán publicadas en esta misma página y entrarán en vigencia inmediatamente después de su publicación.",
                },
                { title: "Contacto" },
            ],
        },
        terms: {
            backHome: "Volver al inicio",
            title: "Términos y Condiciones",
            contactIntro: "Consultas sobre estos Términos pueden enviarse a:",
            sections: [
                {
                    title: "Aceptación de los Términos",
                    content:
                        "Al utilizar el software LogOS, desarrollado por BYLOGOS SPA, el usuario acepta estos Términos y Condiciones en su totalidad. Si no está de acuerdo, no debe utilizar la plataforma ni los servicios asociados.",
                },
                {
                    title: "Licencia de Uso",
                    list: [
                        "LogOS otorga al usuario una licencia limitada, no exclusiva e intransferible para utilizar el software conforme a estos Términos.",
                        "El software y todos sus componentes, incluidos algoritmos de IA, interfaces, documentación y datos generados, son propiedad exclusiva de BYLOGOS SPA.",
                        "Está prohibida la copia, modificación, distribución o sublicencia del software sin autorización explícita de BYLOGOS SPA.",
                    ],
                },
                {
                    title: "Uso del Software",
                    list: [
                        "El usuario se compromete a utilizar LogOS únicamente para fines legales y conforme a las instrucciones de operación.",
                        "Queda prohibido interferir con el funcionamiento de LogOS, intentar acceder a sistemas no autorizados o manipular datos de terceros.",
                        "La ejecución de LogOS en entornos Edge Computing garantiza que los datos permanezcan locales; cualquier transmisión de información se realizará conforme a la política de privacidad vigente.",
                    ],
                },
                {
                    title: "Responsabilidad y Garantías",
                    list: [
                        "LogOS se proporciona “tal cual” y no garantiza resultados específicos de optimización de consumo eléctrico o predicciones de IA.",
                        "BYLOGOS SPA no será responsable por daños directos, indirectos, incidentales, consecuentes o pérdidas derivadas del uso del software.",
                        "El usuario es responsable de implementar medidas de seguridad adicionales según sus necesidades industriales y legales.",
                    ],
                },
                {
                    title: "Actualizaciones y Modificaciones",
                    list: [
                        "BYLOGOS SPA puede actualizar LogOS en cualquier momento, incluyendo nuevas funcionalidades, mejoras de seguridad y correcciones de errores.",
                        "El usuario acepta que las actualizaciones pueden aplicarse automáticamente y sin previo aviso.",
                    ],
                },
                {
                    title: "Propiedad Intelectual",
                    list: [
                        "Todos los derechos de propiedad intelectual relacionados con LogOS, sus algoritmos, interfaces gráficas, documentación y contenido generado por la IA pertenecen exclusivamente a BYLOGOS SPA.",
                        "El uso no autorizado, reproducción, distribución o ingeniería inversa de cualquier componente está prohibido.",
                    ],
                },
                {
                    title: "Terminación",
                    list: [
                        "BYLOGOS SPA puede suspender o cancelar el acceso al software en caso de incumplimiento de estos Términos.",
                        "Tras la terminación, el usuario deberá eliminar todas las copias del software y cualquier dato derivado de él, salvo que la ley exija su retención.",
                    ],
                },
                { title: "Contacto" },
            ],
        },
        notFound: {
            badge: "Página no encontrada",
            title: "Página",
            titleAccent: "no encontrada",
            description: "La ruta solicitada no existe. Verifica la URL o utiliza los enlaces de navegación.",
            diagnosticsTitle: "Diagnóstico del sistema",
            recoveryTitle: "Recuperación",
            recoveryDescription: "Selecciona una de las siguientes opciones para continuar navegando.",
            goHome: "Volver al inicio",
            reviewUrl: "Revisar la URL",
            newsletter: "Newsletter",
            reviewAction: "Revisar",
            subscribeAction: "Suscribir",
            previousPage: "Página anterior",
            platformLabel: "Plataforma • Tiempo de actividad: 99.9%",
            servicesActive: "Servicios activos",
            edgeConnected: "Conectado a edge",
            supportLabel: "Soporte técnico:",
            suggestions: [
                {
                    title: "Volver al inicio",
                    description: "Regresa a la página principal de LogOS.",
                    action: "Ir a inicio",
                    href: "/",
                },
                {
                    title: "Revisar la URL",
                    description: "Revisa la dirección que estás buscando.",
                    action: "Revisar",
                },
                {
                    title: "Newsletter",
                    description: "Suscríbete a nuestra bandeja de entrada y entérate de todo.",
                    action: "Suscribir",
                    href: "#newsletter",
                },
            ],
            diagnostics: [
                { label: "HTTP Status", value: "404", status: "error" },
                { label: "Conexión", value: "Activa", status: "success" },
                { label: "Protocolo", value: "HTTPS", status: "success" },
                { label: "Tiempo de respuesta", value: "45ms", status: "success" },
            ],
        },
        platform: {
            heroEyebrow: "PLATAFORMA",
            heroTitleStart: "Una plataforma para",
            heroTitleAccent: "operar tu industria",
            heroDescription:
                "LogOS unifica monitoreo, control, IA y gemelos digitales sobre tu infraestructura existente. Software modular que se adapta a tu operación, no al revés.",
            heroCtaPrimary: "Solicitar demo",
            heroCtaSecondary: "Ver casos de uso",
            modulesTitle: "Módulos del software",
            modulesDescription:
                "Combina los módulos que necesitas. Cada uno se conecta sobre la misma capa edge y comparte datos, alertas y contexto.",
            modules: [
                {
                    title: "Monitoreo en tiempo real",
                    description:
                        "Visualiza variables eléctricas, mecánicas y de proceso con latencia menor a 1 segundo desde cualquier dispositivo.",
                },
                {
                    title: "Diagramas unilineales",
                    description:
                        "Esquemas interactivos que reflejan dinámicamente el estado de la instalación y permiten navegar la planta como un mapa vivo.",
                },
                {
                    title: "Registro histórico",
                    description:
                        "Acceso completo a series de tiempo con análisis de tendencias, comparación de períodos y exportación.",
                },
                {
                    title: "Alarmas inteligentes",
                    description:
                        "Reglas, eventos y predicciones con IA para anticipar fallas y enrutar notificaciones a quien corresponde.",
                },
                {
                    title: "Integraciones",
                    description:
                        "WhatsApp, Telegram, correo y APIs abiertas. La operación llega donde está tu equipo, sin obligar a abrir un dashboard.",
                },
                {
                    title: "Reportes automáticos",
                    description:
                        "Reportes técnicos y ejecutivos generados solos, listos para auditoría y para conversación con dirección.",
                },
                {
                    title: "Asistente de IA",
                    description:
                        "Copiloto entrenado en tu operación: responde preguntas sobre cargas, fallas y comportamiento histórico en lenguaje natural.",
                },
                {
                    title: "Gemelo digital",
                    description:
                        "Réplica funcional de tu instalación para simular escenarios, ensayar cambios y validar decisiones antes del campo.",
                },
                {
                    title: "Acceso multi-dispositivo",
                    description:
                        "Información sincronizada en web y móvil, con permisos granulares por planta, área y rol.",
                },
            ],
            architectureTitle: "Edge primero, cloud cuando importa",
            architectureDescription:
                "Procesamos los datos donde se generan. Tu información operacional queda en planta y solo viaja lo que tú decides exponer.",
            architecturePoints: [
                "Latencia local sub-segundo para control y alarmas críticas.",
                "Cumplimiento con políticas de seguridad industrial y regulaciones locales.",
                "Sin dependencia de Internet para mantener la planta operando.",
            ],
            ctaTitle: "¿Listo para verlo en tu planta?",
            ctaDescription: "Te mostramos LogOS corriendo sobre un caso real similar al tuyo en menos de 30 minutos.",
            ctaButton: "Agendar demo técnica",
            process: {
                eyebrow: "CÓMO FUNCIONA",
                title: "Cómo es el proceso de integración",
                sub: "Tres pasos para llevar tu planta legacy a operación con LogOS.",
                steps: [
                    {
                        title: "Diagnóstico operativo",
                        body: "Visitamos tu planta, mapeamos PLCs, SCADAs y protocolos en uso. Definimos puntos críticos de monitoreo, control y reporte. Sin tocar lo que ya funciona.",
                        items: ["Levantamiento OT", "Mapeo de protocolos", "Plan de despliegue"],
                    },
                    {
                        title: "Despliegue Edge",
                        body: "Instalamos LogOS sobre hardware industrial certificado. Conectamos OPC UA, Modbus, MQTT y APIs internas. Validamos telemetría en sitio antes de pasar a producción.",
                        items: ["Hardware llave en mano", "Integración no intrusiva", "Validación en sitio"],
                    },
                    {
                        title: "Operación con IA",
                        body: "Activamos dashboards, alarmas predictivas, reportes automáticos y el copiloto de IA. Tu equipo opera con visibilidad total y soporte continuo de ingeniería.",
                        items: ["Dashboards en vivo", "Alarmas predictivas", "Asistente de IA"],
                    },
                ],
                ctaHint: "Al final del proceso →",
            },
            why: {
                eyebrow: "FUNDAMENTOS",
                title: "¿Por qué LogOS?",
                sub: "Tres razones por las que la industria elige LogOS sobre soluciones tradicionales.",
                edge: {
                    eyebrow: "EDGE / CLOUD",
                    title: "¿Por qué Edge Computing?",
                    sub: "El control no puede depender de Internet. LogOS corre primero en el edge, no en la nube.",
                    onPremTitle: "LogOS · Edge Computing",
                    onPremTag: "ON-PREMISE",
                    onPremPoints: [
                        "Latencia sub-segundo para control y alarmas críticas",
                        "Tu data operacional se queda en planta",
                        "Funciona aunque caiga Internet",
                        "Cumple políticas industriales de seguridad",
                    ],
                    cloudTitle: "Otros · Cloud Computing",
                    cloudTag: "DEPENDIENTE",
                    cloudPoints: [
                        "Latencia atada al ancho de banda",
                        "Data sensible viaja fuera de tu red",
                        "Sin Internet la planta está ciega",
                        "Costo y throughput escalan con el tráfico",
                    ],
                },
                allInOne: {
                    eyebrow: "PLATAFORMA UNIFICADA",
                    title: "Todo en una sola plataforma",
                    sub: "SCADA, gemelo digital, monitoreo y control conviven en LogOS. Sin silos, sin integraciones rotas.",
                    hubLabel: "LogOS",
                    silos: [
                        { label: "SCADA", note: "Supervisión y control" },
                        { label: "Gemelo digital", note: "Réplica funcional" },
                        { label: "Monitoreo", note: "Telemetría y KPIs" },
                        { label: "Alarmas + IA", note: "Predictivo y reactivo" },
                    ],
                    outcomeLabel: "RESULTADO",
                    outcome: "Una sola fuente de verdad para tu operación. Cero fricción entre datos, decisión y acción.",
                },
                comparison: {
                    eyebrow: "ANTES Y DESPUÉS",
                    title: "Lo que cambia con LogOS",
                    beforeLabel: "ANTES",
                    afterLabel: "CON LogOS",
                    rows: [
                        {
                            topic: "Visibilidad",
                            before: "Reportes manuales semanales",
                            after: "Dashboards en tiempo real",
                        },
                        {
                            topic: "Reacción ante fallas",
                            before: "Detección post-evento",
                            after: "Alertas predictivas con IA",
                        },
                        {
                            topic: "Integración",
                            before: "Silos por marca y protocolo",
                            after: "Una capa sobre PLCs, SCADA y MQTT",
                        },
                        {
                            topic: "Reportería",
                            before: "Horas-hombre repetitivas",
                            after: "Reportes automáticos auditables",
                        },
                        {
                            topic: "Escalabilidad",
                            before: "Re-cableado por cada cambio",
                            after: "Software-defined, despliegue remoto",
                        },
                    ],
                },
            },
        },
        partners: {
            heroEyebrow: "PARTNERS",
            heroTitleStart: "Trabajemos juntos para",
            heroTitleAccent: "modernizar la industria",
            heroDescription:
                "No es un programa cerrado ni un set de tiers. Es una invitación abierta a integradores, consultoras y EPCs que quieran sumar LogOS a sus soluciones. Conversamos, encontramos formas de colaborar y construimos desde ahí.",
            heroCta: "Conversemos",
            benefitsTitle: "Cómo solemos colaborar",
            benefitsSub: "Estas son ideas, no obligaciones. Cada partner termina con un acuerdo distinto según lo que mejor le sirva a su operación y a sus clientes.",
            benefits: [
                {
                    title: "Habilitación para instalar",
                    description: "Te capacitamos para que tu propio equipo instale y configure LogOS en planta. No es un curso formal: es trabajar juntos hasta que el despliegue sea fluido para ti.",
                },
                {
                    title: "Editor habilitado",
                    description: "Habilitamos tu acceso al editor para que puedas integrar LogOS dentro de las soluciones que ya ofreces. Tu producto, tu marca, nuestra capa por debajo.",
                },
                {
                    title: "Proyectos compartidos",
                    description: "Levantamos casos juntos. Negociamos en cada proyecto qué parte hace cada uno: ingeniería, ejecución, soporte, lo que tenga sentido.",
                },
                {
                    title: "Aporte real a la industria",
                    description: "El espíritu del programa: cada planta que digitalizamos junto a un partner es una operación más eficiente, más segura y con menos horas-hombre desperdiciadas.",
                },
                {
                    title: "Descuento de partner",
                    description: "Quienes trabajan con nosotros acceden a precios distintos a los del mercado abierto. La conversación es directa y por contexto.",
                },
                {
                    title: "Panel para partners (opcional)",
                    description: "Acceso a alarmas y un dashboard con recomendaciones por cliente: qué mantenimiento ofrecer, qué activos están en riesgo, qué upgrades tienen sentido. Es un add-on aparte que conversamos en contacto.",
                },
            ],
            ideasTitle: "Algunas ideas de cómo podríamos trabajar",
            ideasSub: "Dependiendo de cómo opera tu equipo, esto puede tomar formas muy distintas. Estos son puntos de partida, no rieles.",
            ideas: [
                "Sumar LogOS como capa de monitoreo dentro de proyectos de automatización que ya estás vendiendo.",
                "Levantar una oferta de mantenimiento predictivo apoyada en alarmas y dashboards de LogOS.",
                "Ofrecer hardware industrial certificado pre-instalado a tus clientes, con LogOS listo para correr.",
                "Llevar LogOS a una vertical específica donde tu equipo ya tiene relaciones y experiencia.",
                "Construir una integración propia sobre nuestras APIs para extender lo que LogOS hace nativamente.",
            ],
            ctaTitle: "Hablemos sin compromiso",
            ctaDescription: "No hay un formulario formal de partner. Cuéntanos qué haces y qué clientes atiendes, y desde ahí vemos qué tiene sentido para ambos.",
            ctaButton: "Conversemos",
        },
        contact: {
            heroEyebrow: "CONTACTO",
            heroTitle: "Hablemos",
            heroDescription:
                "Demo, partnership, prensa o solo curiosidad técnica. Escríbenos y te respondemos en menos de 24 horas hábiles.",
            form: {
                firstNameLabel: "NOMBRE",
                lastNameLabel: "APELLIDO",
                emailLabel: "EMAIL",
                companyLabel: "EMPRESA",
                reasonLabel: "RAZÓN DE CONTACTO",
                reasonPlaceholder: "Selecciona una razón",
                commentLabel: "COMENTARIO",
                firstNamePlaceholder: "Tu nombre",
                lastNamePlaceholder: "Tu apellido",
                emailPlaceholder: "email@empresa.com",
                companyPlaceholder: "Nombre de la empresa",
                commentPlaceholder: "¿Algo que debamos saber?",
                reasonOptions: [
                    { value: "PARTNERSHIP", label: "ALIANZA" },
                    { value: "DEMO", label: "DEMO" },
                    { value: "CUSTOMER", label: "CLIENTE" },
                    { value: "PRESS", label: "PRENSA" },
                    { value: "INVESTOR", label: "INVERSIÓN" },
                    { value: "GENERAL", label: "GENERAL" },
                    { value: "OTHER", label: "OTRO" },
                ],
                submit: "Enviar mensaje",
                submitting: "Enviando...",
                successTitle: "Mensaje enviado",
                successDescription: "Recibimos tu mensaje. Te contactamos pronto.",
                errorTitle: "No pudimos enviar el mensaje",
                errorDescription: "Intenta de nuevo en unos minutos o escríbenos directamente a contact@bylogos.io.",
                requiredError: "Este campo es obligatorio.",
                emailError: "Ingresa un email válido.",
            },
            altContactTitle: "Otros canales",
            altContactDescription:
                "Si prefieres email directo, escríbenos a contact@bylogos.io. Para soporte técnico de clientes activos, usa el canal dedicado en la plataforma.",
        },
    },
    en: {
        seo: {
            ogLocale: "en_US",
            languageAlternates: {
                "es-ES": "/es",
                "en-US": "/en",
                "pt-BR": "/pt",
            },
            layout: {
                titleDefault: "LogOS | Unifying IT and OT for Industrial Infrastructure",
                description:
                    "LogOS is the combined infrastructure and software solution that connects the analog world with AI. We reduce labor-hour losses, optimize industrial control, and automate reporting for Oil & Gas, Energy, and Data Centers.",
                keywords: [
                    "LogOS",
                    "IT OT convergence",
                    "industrial infrastructure",
                    "industrial artificial intelligence",
                    "report automation",
                    "labor hour reduction",
                    "operational efficiency",
                    "OT monitoring",
                    "industrial control",
                    "SCADA",
                    "IIoT",
                    "Oil & Gas",
                    "Data Centers",
                    "Energy & Power",
                    "Food & Beverage",
                    "legacy infrastructure modernization",
                    "industrial asset management",
                    "digital twin",
                    "Edge Computing",
                ],
                openGraphTitle: "LogOS | Hybrid IT/OT Solution for Critical Infrastructure",
                openGraphDescription:
                    "LogOS adapts your analog infrastructure to the AI era. Reduce labor-hour losses and transform decision-making with detailed control and automated reporting.",
                openGraphImageAlt: "LogOS - Unifying IT and OT for Industrial Infrastructure",
                twitterTitle: "LogOS | Connecting the OT Field with the IT Layer",
                twitterDescription:
                    "Stop analyzing your infrastructure manually. LogOS automates reporting and adapts legacy systems to artificial intelligence workflows.",
            },
            home: {
                title: "LogOS | Bringing Industrial Infrastructure into the AI Era",
                description:
                    "LogOS bridges the analog OT world and the IT layer. A hybrid solution to modernize infrastructure, reduce labor-hour losses, and transform decision-making with AI.",
            },
            about: {
                title: "About",
                description:
                    "LogOS was created to close the gap between the analog world and AI. Our mission is to make technicians' lives easier and reduce labor-hour losses through cutting-edge hybrid technology.",
            },
            industries: {
                title: "Industrial IT/OT Solutions | Sectors and Use Cases",
                description:
                    "Elastic software and easy-to-integrate hardware for any industry: Oil & Gas, Food & Beverage, Water, Data Centers, and Energy. Modernize your operations with LogOS.",
            },
            pricing: {
                title: "Plans and Pricing",
                description:
                    "Invest in efficiency. Explore our plans to digitize your infrastructure, reduce labor-hour losses, and automate reporting with LogOS.",
            },
            platform: {
                title: "Platform",
                description:
                    "Real-time monitoring, AI, digital twins, and automated reports on the same edge layer. Meet the LogOS platform.",
            },
            partners: {
                title: "Partners",
                description:
                    "LogOS partner program for integrators, EPCs, and OT consultancies. Certification, engineering support, and recurring margin.",
            },
            contact: {
                title: "Contact",
                description:
                    "Let's talk about your operation. Demo, partnership, or technical question — we'll get back within one business day.",
            },
        },
        common: {
            logosWordmarkAlt: "LogOS",
            socialLinkAriaLabel: "Visit social profile",
        },
        languageSwitcher: {
            label: "Switch language",
            menuTitle: "Site language",
            currentLanguageLabel: "Current language",
        },
        header: {
            logoAriaLabel: "Home",
            mobileMenuButtonAriaLabel: "Open navigation menu",
            closeMenuAriaLabel: "Close menu",
            menuTitle: "Menu",
            followUs: "FOLLOW US",
            contactCta: "Contact",
            navigation: [
                { label: "Home", href: "/" },
                { label: "Platform", href: "/platform" },
                { label: "Use cases", href: "/industries" },
                { label: "Insights", href: "/news" },
                { label: "Partners", href: "/partners" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
            ],
        },
        footer: {
            tagline: "Transform industrial infrastructure in real time.",
            protocolsTitle: "Supported protocols",
            directContactTitle: "Direct contact",
            contactButton: "Request a technical demo",
            copyright: "© {year} LogOS. All rights reserved.",
            privacy: "Privacy policy",
            terms: "Terms of service",
            contactInfoLabel: "Technical email",
            protocols: ["Modbus RTU/TCP", "OPC UA (DA, AC, HDA)", "MQTT / MQTT-SN"],
        },
        home: {
            hero: {
                title: "The industrial future is Edge.",
                subtitle: "DIGITAL TWINS, IIOT & INDUSTRIAL AI.",
            },
            clientsMarqueeLabel: "Trusted by industry leaders",
            demoVideo: {
                label: "WATCH IT",
                title: "See how",
                brand: "LogOS works",
                description:
                    "Explore the full monitoring, visualization, and AI-assisted operations flow from a single platform.",
            },
            edgeArchitecture: {
                label: "ARCHITECTURE",
                titleStart: "Edge Computing &",
                titleAccent: "Industrial AI",
                nodes: {
                    field: { title: "OT Field", subtitle: "Sensors, PLCs, etc." },
                    edge: { title: "Edge", subtitle: "LogOS" },
                    user: { title: "User", subtitle: "Operation & Decision" },
                },
                paragraphs: [
                    {
                        title: "Efficiency and low latency",
                        body: "Data is processed where it's generated. Control decisions and AI models run locally, with no dependency on Internet or cloud services that add delay and traffic-based costs.",
                    },
                    {
                        title: "Governance and security",
                        body: "Operational data never leaves your plant. You retain ownership and full control over sensitive information, complying with industrial security policies and local regulations.",
                    },
                ],
            },
            features: {
                titleStart: "Modular",
                titleAccent: "Operations",
                description: "Build your own solution by choosing only the modules your operation needs.",
                items: [
                    {
                        title: "Monitoring",
                        description:
                            "Real-time supervision of every electrical parameter with latency below one second.",
                    },
                    {
                        title: "Single-Line Diagrams",
                        description: "Interactive diagrams with a live representation of installation status.",
                    },
                    {
                        title: "Data Historian",
                        description: "Full historical access to past records with trend and pattern analysis.",
                    },
                    {
                        title: "Smart Alarms",
                        description: "Event- and prediction-based alarms designed to prevent failures.",
                    },
                    {
                        title: "Integrations",
                        description:
                            "Stay close to your operation with real-time messaging integrations for WhatsApp, Telegram, Gmail, and more.",
                    },
                    {
                        title: "Automated Reports",
                        description: "Automatic consumption reports with detailed operational status information.",
                    },
                    {
                        title: "Artificial Intelligence",
                        description: "An intelligent assistant for deeper load and performance analysis.",
                    },
                    {
                        title: "Digital Twin",
                        description: "Mirror your process in the digital world with an exact copy of your facility.",
                    },
                    {
                        title: "Access from anywhere",
                        description:
                            "All your information stays synchronized and available from any device, wherever you are.",
                    },
                ],
            },
            hardware: {
                eyebrow: "NO INFRASTRUCTURE?",
                titleStart: "No problem.",
                titleAccent: "We provide it.",
                description:
                    "If your plant doesn't have the equipment to run LogOS yet, we ship pre-installed and validated industrial hardware. Turnkey, ready to connect.",
                vatExcluded: "VAT NOT INCLUDED",
                technicalSpecs: "TECHNICAL SPECIFICATIONS",
                useCaseLabel: "Use case:",
                quoteButton: "REQUEST A QUOTE",
                partnership:
                    "LogOS is tested and optimized for SEEED Studio hardware, ensuring maximum performance, security, and full compatibility in high-demand critical industrial environments.",
                options: [
                    {
                        subtitle: "Interactive Control Panel",
                        description:
                            "Industrial terminal with an integrated touchscreen for direct control and real-time visualization, preloaded with LogOS.",
                        features: ['10.1" touchscreen', "Integrated camera", "WiFi 6 + Bluetooth 5.0", "PoE+ power"],
                        specs: ["1280x800 resolution", "IP65 rating", "RS485 serial", "IEC 61850 compatible"],
                        useCase: "Ideal for control rooms, operator cabinets, and local supervision points.",
                        highlight: "Local Interface",
                    },
                    {
                        subtitle: "Industrial Edge Gateway",
                        description:
                            "Compact industrial computer optimized to run LogOS as a local web server and high-performance communications gateway.",
                        features: [
                            "Server-grade performance",
                            "6 months retention",
                            "Dual Gigabit Ethernet",
                            "ARM Cortex-A72 Quad-core",
                        ],
                        specs: ["8GB DDR4 RAM", "Fanless", "DIN rail mount", "Critical temperatures"],
                        useCase: "Perfect for local deployments, edge computing, and highly available on-site servers.",
                        highlight: "Connectivity",
                    },
                    {
                        subtitle: "Intelligent Processor",
                        description:
                            "Industrial hardware with powerful neural processing for real-time predictive model inference on the LogOS platform.",
                        features: [
                            "Edge AI acceleration",
                            "Maximum performance",
                            "Optimized inference",
                            "16GB LPDDR4x RAM",
                        ],
                        specs: [
                            "Raspberry Pi 5",
                            "Hailo 8 accelerator",
                            "DIN rail or wall mount",
                            "Industrial environments",
                        ],
                        useCase: "Ideal for advanced local processing and real-time video or image analytics.",
                        highlight: "AI Core",
                    },
                ],
            },
            comparison: {
                eyebrow: "THE FOURTH",
                title: "Industrial Revolution",
                description:
                    "Data monitoring and AI are reshaping industrial rules. LogOS unifies your operation into one intelligent layer.",
                beforeLabel: "BEFORE: LEGACY",
                afterLabel: "NOW: THE LOGOS ECOSYSTEM",
                savingsTitle: "SAVE LABOR HOURS AND GAIN EFFICIENCY",
                savingsDescription: "Optimize how you use your resources",
                beforeItems: [
                    { title: "Data Silos", desc: "Fragmented information that is difficult to audit in real time." },
                    {
                        title: "Infrastructure Cost",
                        desc: "Standalone servers, separate licenses, and closed hardware stacks.",
                    },
                    {
                        title: "Reactive Maintenance",
                        desc: "The system only warns you once the failure has already happened, driving up maintenance costs.",
                    },
                    {
                        title: "Security Gaps",
                        desc: "Outdated and vulnerable protocols without continuous updates.",
                    },
                    { title: "Clumsy Interfaces", desc: "A messy user interface that is hard to use." },
                    { title: "No Interoperability", desc: "No integration with external systems." },
                ],
                afterItems: [
                    {
                        title: "Predictive Intelligence",
                        desc: "Anticipate critical failures before they happen with AI-driven models.",
                    },
                    {
                        title: "Single Source of Truth",
                        desc: "Your full operation on one auditable and transparent platform.",
                    },
                    {
                        title: "Energy Efficiency",
                        desc: "Autonomous reports and analysis so you can optimize electrical consumption.",
                    },
                    {
                        title: "Lower TCO",
                        desc: "Eliminate heavy CAPEX and scale your infrastructure as needed.",
                    },
                    {
                        title: "Operational Continuity",
                        desc: "24/7 cloud monitoring and mission-critical alerts wherever you are.",
                    },
                    {
                        title: "End-to-End Cybersecurity",
                        desc: "Point-to-point encryption and compliance with international standards.",
                    },
                ],
            },
            testimonials: {
                eyebrow: "SUCCESS STORIES",
                titleStart: "Results that speak",
                titleAccent: "for themselves",
                description: "Leading companies trust LogOS to manage their most critical electrical infrastructure.",
                keyResultLabel: "Key result:",
                stats: [
                    { value: "10", label: "Months of monitoring" },
                    { value: "99%", label: "Availability" },
                    { value: "1036M+", label: "Monitoring records" },
                    { value: "24/7", label: "Technical support" },
                ],
                items: [
                    {
                        industry: "Healthcare",
                        quote: "LogOS has helped us cut emergency response time. The integration with our legacy systems was seamless.",
                        metrics: "60% faster response.",
                    },
                    {
                        industry: "Food",
                        quote: "With LogOS we can monitor energy use in every production stage and optimize it to reduce waste.",
                        metrics: "Energy consumption optimized.",
                    },
                    {
                        industry: "Renewable Energy",
                        quote: "The LogOS development suite is outstanding. It makes building solutions for our customers much faster.",
                        metrics: "50% faster development.",
                    },
                ],
            },
            newsletter: {
                successTitle: "Welcome!",
                successDescription:
                    "Your subscription has been confirmed successfully. You’ll soon receive our technical updates and industrial insights.",
                subscribeAnother: "Subscribe another email",
                eyebrow: "CONTACT",
                titleStart: "Technical expertise",
                titleAccent: "with us",
                description:
                    "Join our industrial community to receive the latest product updates, or write to us directly at",
                benefitsTitle: "Exclusive value for you",
                formTitle: "Subscribe now",
                formSubtitle: "Stay ahead in industry",
                nameLabel: "Full name",
                emailLabel: "email@company.com",
                submitting: "SUBSCRIBING...",
                submit: "SUBSCRIBE FOR FREE",
                privacyNote: "* We respect your privacy. No spam.",
                supportedBy: "Supported by",
                invalidEmail: "Please enter a valid email address",
                subscribeError: "There was a problem processing your subscription. Please try again.",
                benefits: [
                    {
                        title: "Technical updates",
                        description: "New features, supported protocols, and LogOS performance improvements.",
                    },
                    {
                        title: "Industrial use cases",
                        description: "Real deployments, optimized configurations, and field-proven best practices.",
                    },
                    {
                        title: "Industry trends",
                        description: "Market analysis, new IEC standards, and the evolution of the electrical sector.",
                    },
                    {
                        title: "Security alerts",
                        description:
                            "Vulnerabilities, critical patches, and proactive industrial cybersecurity recommendations.",
                    },
                ],
            },
            landingV2: {
                hero: {
                    eyebrow: "GOODBYE LEGACY MONITORING",
                    titleLead: "Bring AI to your",
                    titleEmphasis: "industry.",
                    sub: "LogOS is the infrastructure that digitizes your existing field without replacing it.",
                    subSecondary: "Data and decisions at the edge, monitoring wherever you are.",
                    subTertiary: "We prepare your industry for the AI era: digital twins as real-time 3D visualizations with intelligent assistance — not an Excel spreadsheet.",
                    audience:
                        "Built for plants with OT assets running on manual monitoring, Excel or isolated SCADA.",
                    highlight: "Includes 3D Digital Twin · Live monitoring",
                    ctaPrimary: "Request technical demo",
                    ctaSecondary: "See how it works",
                    ctaPrimaryHref: "/contact",
                    ctaSecondaryHref: "#demo-video",
                    callouts: [
                        { label: "LATENCY", value: "<1s" },
                        { label: "ARCHITECTURE", value: "Edge Native" },
                        { label: "PROTOCOLS", value: "Modbus, OPC UA, MQTT" },
                        { label: "DEPLOYMENT", value: "7 days" },
                    ],
                },
                integrations: {
                    label: "NATIVE INTEGRATIONS",
                    sub: "Hardware-agnostic. Connect without replacing.",
                    protocolsLabel: "PROTOCOLS",
                    protocols: ["Modbus RTU/TCP", "OPC-UA", "MQTT / MQTT-SN", "Profibus", "Telnet", "IEC 61850"],
                    vendorsLabel: "VENDORS",
                    vendors: ["Siemens", "Allen-Bradley", "Schneider", "Rockwell", "ABB", "Phoenix Contact"],
                },
                pillars: {
                    eyebrow: "ARCHITECTURE",
                    title: "Four pillars. One platform.",
                    sub: "The minimum stack to close the gap between your OT field and your IT.",
                    items: [
                        {
                            n: "01",
                            title: "Connect the legacy",
                            claim: "Modbus, OPC UA, MQTT, IEC 61850 and 40+ supported PLC families.",
                            outcome: "No rip-and-replace. No operational downtime.",
                        },
                        {
                            n: "02",
                            title: "Decide at the edge",
                            claim: "Local AI, 6+ months retention, runs offline.",
                            outcome: "Your data never leaves the plant. Sovereignty and low latency.",
                        },
                        {
                            n: "03",
                            title: "Operate from anywhere",
                            claim: "Web dashboards, WhatsApp/Telegram alerts, automated reports.",
                            outcome: "Your plant in your pocket. Cut response time to minutes.",
                        },
                        {
                            n: "04",
                            title: "Predict before failure",
                            claim: "Predictive models over your asset's historical data.",
                            outcome: "Condition-based maintenance. Fewer unplanned stops.",
                        },
                    ],
                },
                beforeAfter: {
                    eyebrow: "BEFORE / AFTER",
                    title: "From Excel to operational intelligence.",
                    sub: "What changes the day LogOS goes live.",
                    before: {
                        label: "TRADITIONAL STACK",
                        items: [
                            { title: "Isolated SCADA", body: "Data trapped in the control room." },
                            { title: "Manual Excel reports", body: "Wasted labor hours that add no value." },
                            { title: "Radio or phone alerts", body: "Response time measured in hours." },
                            { title: "Reactive maintenance", body: "Failures discovered after the line is down." },
                            { title: "No historical traceability", body: "Audits that depend on operator memory." },
                        ],
                    },
                    after: {
                        label: "WITH LOGOS",
                        items: [
                            {
                                title: "Unified real-time data",
                                body: "One source of truth for field, IT and leadership.",
                            },
                            {
                                title: "Auto-generated reports",
                                body: "Weekly PDF in your inbox. No more manual Excel.",
                            },
                            { title: "WhatsApp/Telegram alerts", body: "Response in minutes, from anywhere." },
                            { title: "Predictive maintenance", body: "AI flags failures before they stop the line." },
                            {
                                title: "Auditable 6+ month history",
                                body: "Trends, compliance and continuous learning.",
                            },
                        ],
                    },
                },
                edge: {
                    eyebrow: "EDGE ARCHITECTURE",
                    titleStart: "Edge computing &",
                    titleAccent: "Industrial AI.",
                    sub: "Data where it's generated. Decisions where they matter.",
                    nodes: {
                        field: {
                            title: "OT Field",
                            tag: "01 · INPUT",
                            lines: [
                                "4-20mA / RS485 sensors",
                                "PLCs Siemens, AB, Schneider",
                                "Modbus, OPC UA, IEC 61850",
                            ],
                        },
                        edge: {
                            title: "LogOS Edge",
                            tag: "02 · COMPUTE",
                            lines: ["Local AI without internet", "6 months retention", "Sub-second processing"],
                        },
                        user: {
                            title: "User",
                            tag: "03 · OUTPUT",
                            lines: ["Responsive web dashboards", "WhatsApp / Telegram alerts", "Automated PDF reports"],
                        },
                    },
                    benefits: [
                        {
                            title: "Operational low-latency",
                            body: "Control decisions and AI inference run locally. Sub-second end-to-end.",
                        },
                        {
                            title: "Data sovereignty",
                            body: "Your operational data never leaves the plant without authorization. Compliance by design.",
                        },
                    ],
                },
                verticals: {
                    eyebrow: "INDUSTRIES",
                    title: "Built for critical infrastructure.",
                    sub: "Seven verticals in production. Plus yours, whatever it is.",
                    items: [
                        { tag: "OIL & GAS", title: "Oil & Gas", line: "24/7 remote telemetry over legacy SCADA." },
                        { tag: "DATACENTER", title: "Data Centers", line: "PUE, legacy BMS and outage prevention." },
                        {
                            tag: "WATER",
                            title: "Water & Sanitation",
                            line: "Reliable telemetry for distributed networks.",
                        },
                        {
                            tag: "ENERGY",
                            title: "Generation & Distribution",
                            line: "Isolated assets safely connected to cloud.",
                        },
                        { tag: "F&B", title: "Food & Beverage", line: "Plant traceability and automated KPIs." },
                        {
                            tag: "MANUFACTURING",
                            title: "Manufacturing",
                            line: "OEE, process control and traceability across production lines.",
                        },
                        {
                            tag: "HVAC",
                            title: "HVAC",
                            line: "HVAC control and monitoring to optimize energy use and comfort.",
                        },
                        {
                            tag: "YOUR INDUSTRY",
                            title: "Yours not listed?",
                            line: "LogOS is industry-agnostic. If you have an OT field, we connect it.",
                            agnostic: true,
                        },
                    ],
                    cta: "See all use cases",
                    ctaHref: "/industries",
                },
                heroCase: {
                    eyebrow: "FLAGSHIP CASE",
                    quote: "LogOS replaced our manual reporting and gave us visibility over 99% of our assets. We respond 60% faster to emergencies.",
                    cite: "Operations team",
                    role: "Redsalud · Healthcare",
                    inProductionSince: "2025-03-01",
                    inProductionLabel: "In production",
                    monthsUnit: "months",
                    yearsUnit: "years",
                    metrics: [
                        { value: "60%", label: "Faster response" },
                        { value: "99%", label: "Monitored uptime" },
                        { value: "1.036M+", label: "Records processed" },
                    ],
                },
                security: {
                    eyebrow: "SECURE BY DESIGN",
                    title: "Industrial compliance, no friction.",
                    sub: "Sovereign edge, encrypted comms, role-based access control.",
                    badges: [
                        { name: "IEC 62443", tag: "Industrial cybersecurity" },
                        { name: "ISO 27001", tag: "Information security" },
                        { name: "Data sovereignty", tag: "Local edge, no forced cloud" },
                        { name: "RBAC + 2FA", tag: "Granular access control" },
                    ],
                },
                founder: {
                    eyebrow: "FROM THE FIELD",
                    line: "We were born on the plant floor. We watched technicians waste hours on Excel reports while AI sat idle. LogOS fixes that.",
                },
                newsletterCompact: {
                    title: "Stay at the edge.",
                    sub: "Product updates, field cases and industrial cybersecurity alerts.",
                    placeholder: "email@company.com",
                    cta: "Subscribe",
                    privacy: "No spam. Unsubscribe anytime.",
                },
            },
        },
        about: {
            heroEyebrow: "MANIFESTO",
            heroTitle: "Why LogOS?",
            heroHeadline: "The future of industry runs on the edge",
            heroSub: "We modernize industrial infrastructure without replacing what already works. We process where data is generated, keep control on plant, and bring AI to the field — not to the cloud. Built in Latin America for operations that cannot afford to go down.",
            heroBadgeLabel: "EST. 2024 · LATAM",
            whyEyebrow: "WHY",
            whyKicker: "We close the gap between IT and OT.",
            paragraphs: [
                "We are closing the gap between IT and OT across the industrial infrastructure that supports the modern world. Industry still relies on PLCs and legacy systems that do not enable data collection, analytics, or proper AI adoption. LogOS connects that environment to deliver real-time monitoring, prediction, and operational analysis from field data, bringing digital tools into analog environments. We put modern tools in the hands of O&M teams and significantly increase productivity.",
                "We understand the challenge and hesitation that comes with trying new technologies in critical environments. That is why we created LogOS from Latin America as a friendly solution that integrates easily into your infrastructure without disrupting what already works. We provide what industry needs to confidently take the leap into AI.",
            ],
            principlesTitle: "What drives us",
            principlesDescription: "Three principles guide every technical and product decision at LogOS.",
            principles: [
                {
                    title: "Operations first",
                    description:
                        "Our starting point is always the plant technician. If a solution doesn't make their life easier, we don't build it.",
                },
                {
                    title: "Data sovereignty",
                    description:
                        "Your operational data is yours. We process at the edge and never force sensitive information off your plant.",
                },
                {
                    title: "Industrial pragmatism",
                    description:
                        "We work on top of what already exists. We modernize without replacing PLCs or interrupting processes that work.",
                },
            ],
            foundersTitle: "Our founders",
            founders: [{ role: "Co-Founder & CEO / CTO" }, { role: "Co-Founder & Board Advisor" }],
        },
        industries: {
            heroEyebrow: "USE CASES",
            heroTitle: "Mission-critical operations across demanding industries",
            heroDescription: "Energy, critical infrastructure, water, manufacturing, and more.",
            featuredEyebrow: "FEATURED CASES",
            featuredCaption: "PHOTO: Industrial plant",
            featuredChallengeLabel: "CHALLENGE",
            featuredSolutionLabel: "SOLUTION",
            featuredImpactLabel: "OPERATIONAL IMPACT",
            othersEyebrow: "CASE LIST",
            othersTitle: "Case list",
            othersDescription:
                "How we apply LogOS across sectors: from mission-critical operations to large-scale rollouts. Some customers are not publicly disclosed due to NDAs.",
            kpisLabel: "METRICS",
            sliderTitle: "Intelligent Industries",
            previousAriaLabel: "Previous",
            nextAriaLabel: "Next",
            titleSection: "Solutions by Sector",
            descriptionSection: "Explore how we optimize each industry with advanced technology.",
            footerTitle: "Is your industry not listed here?",
            footerDescription:
                "Our hardware-agnostic architecture can integrate with virtually any industrial environment that requires advanced monitoring and control.",
            footerButton: "Contact us",
            cards: [
                {
                    title: "Oil & Gas",
                    description:
                        "Modernize legacy extraction and refining systems by integrating cloud telemetry without interrupting current operations.",
                    points: ["PLC and SCADA integration", "24/7 remote monitoring", "Early AI-based fault detection"],
                },
                {
                    title: "Data Centers",
                    description:
                        "Continuous monitoring of critical infrastructure such as cooling, power, and environment to maximize availability while integrating legacy systems.",
                    points: ["PUE monitoring", "Legacy BMS integration", "Proactive outage prevention alerts"],
                },
                {
                    title: "Water & Sanitation",
                    description:
                        "Centralized management of treatment plants and distribution networks through hardware-agnostic data collection.",
                    points: [
                        "Reliable field telemetry",
                        "Leak prevention and alerting",
                        "Real-time operational dashboards",
                    ],
                },
                {
                    title: "Energy",
                    description:
                        "Turn generation and distribution data into actionable insight by securely connecting isolated assets to the cloud.",
                    points: [
                        "Legacy infrastructure to cloud",
                        "Energy efficiency analytics",
                        "Continuous preventive monitoring",
                    ],
                },
                {
                    title: "Food & Beverage",
                    description:
                        "Ensure quality and efficiency by connecting shop-floor sensors directly to monitoring and analytics tools.",
                    points: ["Full variable traceability", "Automated 24/7 control", "Compliance and KPI reporting"],
                },
                {
                    title: "Manufacturing",
                    description:
                        "OEE, process control, and traceability across mixed production lines with heterogeneous PLCs and legacy plant systems.",
                    points: [
                        "OEE and operational efficiency",
                        "Batch and shift traceability",
                        "Multi-vendor PLC integration",
                    ],
                },
                {
                    title: "HVAC",
                    description:
                        "Control and monitoring of HVAC systems in critical buildings and facilities. Optimize energy use and comfort without replacing equipment.",
                    points: [
                        "Energy consumption optimization",
                        "Temperature and humidity monitoring",
                        "Remote supervisory control",
                    ],
                },
            ],
            sliderItems: [
                {
                    title: "Oil & Gas",
                    description: "Bring AI and cloud connectivity into high-availability, high-demand environments.",
                },
                {
                    title: "Data",
                    description:
                        "Continuously supervise critical infrastructure to ensure availability and operating efficiency (PUE).",
                },
                {
                    title: "Water",
                    description:
                        "Optimize water management by integrating telemetry and centralized monitoring across distributed assets.",
                },
                {
                    title: "Energy",
                    description: "Connect legacy generation infrastructure for visibility, prediction, and control.",
                },
                {
                    title: "Production",
                    description:
                        "Guarantee traceability, quality, and control by connecting production-floor data with IT.",
                },
                {
                    title: "Manufacturing",
                    description: "OEE, process control, and traceability across mixed production lines with heterogeneous PLCs.",
                },
                {
                    title: "HVAC",
                    description: "Control and monitoring of HVAC systems to optimize energy use and comfort.",
                },
            ],
            usageEyebrow: "SOFTWARE IN USE",
            caseAriaLabel: "Case",
            solutions: [
                "Secure connection to legacy PLCs/SCADAs with continuous telemetry and edge predictive models to anticipate failures in real time.",
                "Unified layer over legacy BMS and cooling systems. Sub-second telemetry and AI-driven outage prevention alerts.",
                "Hardware-agnostic telemetry across distributed networks. Central monitoring with early leak and performance alerts.",
                "Cloud connectivity over isolated assets. Energy efficiency analytics and continuous condition monitoring.",
                "Plant-floor data unified with IT. Variable traceability and automated KPI reporting.",
                "Real-time OEE across mixed lines. Multi-vendor PLC integration and traceability per batch and shift.",
                "Supervisory HVAC control over existing equipment. Energy optimization without replacing infrastructure.",
            ],
            usageScenarios: [
                {
                    title: "Platforms and refineries with no operational downtime",
                    body: "LogOS connects to existing PLCs and SCADAs via OPC UA, Modbus, and MQTT. Operators see well flows, pressures, and levels in real-time dashboards. AI detects early deviations and triggers field alerts via WhatsApp or radio. Regulatory reports are generated automatically.",
                },
                {
                    title: "Continuous visibility of PUE, cooling, and power",
                    body: "LogOS unifies legacy BMS, UPS, chillers, and environmental sensors into a single layer. O&M teams monitor PUE live, anticipate outages with predictive alerts, and review trends per room. Complies with security policies without taking data offsite.",
                },
                {
                    title: "Reliable telemetry over distributed networks",
                    body: "We connect flow, pressure, and quality sensors across scattered plants and lift stations. LogOS consolidates data into a central view, alerts on leaks and overflows, and generates automatic operational reports. Keeps working through connectivity drops thanks to edge processing.",
                },
                {
                    title: "Generation assets connected without touching control",
                    body: "LogOS reads from generators, transformers, and substations in real time. Analysts see energy efficiency, predict maintenance, and receive operational alerts. Non-intrusive integration over existing infrastructure, without replacing the control system.",
                },
                {
                    title: "Automated plant traceability and KPIs",
                    body: "Every plant-floor variable — temperature, pH, dosing, cycle times — is logged and correlated in LogOS. Quality and compliance reports generate themselves. Smart alarms warn before a batch goes out of specification.",
                },
                {
                    title: "Live OEE across mixed lines",
                    body: "LogOS talks to PLCs from different vendors, ERPs, and MES. Manufacturing teams see OEE by line, shift, and machine. Efficiency and batch traceability reports export automatically. Recipe changes and bottlenecks are detected in minutes, not audits.",
                },
                {
                    title: "HVAC supervised and optimized remotely",
                    body: "LogOS connects to existing HVAC controllers, temperature, humidity, and CO₂ sensors. Optimizes setpoints automatically, detects abnormal consumption, and enables remote control across multiple buildings. Energy management becomes continuous and comparable across sites.",
                },
            ],
        },
        pricing: {
            eyebrow: "CLEAR, SCALABLE INVESTMENT",
            titleStart: "Plans &",
            titleAccent: "Pricing",
            description:
                "Transparency and scalability. Our model combines upfront infrastructure deployment with a monthly subscription that adapts to your operation.",
            installationTitle: "Initial Deployment",
            installationPrice: "Tailored pricing",
            installationSubtitle: "Structured around your operational needs",
            installationDescription:
                "Physical infrastructure rollout. We connect and digitize the equipment already installed at your facility using our data panels.",
            installationButton: "Quote deployment",
            installationFeatures: [
                "Hardware and measurement devices included.",
                "Full integration with existing OT systems.",
                "Initial LogOS software license.",
                "Number of panels adapted to infrastructure size.",
            ],
            subscriptionTitle: "Operational Subscription",
            subscriptionPrice: "From $200",
            subscriptionPeriod: "/ month",
            subscriptionSubtitle: "Operational subscription matched to your infrastructure",
            subscriptionDescription:
                "Continuous access to the LogOS platform to monitor, analyze, and manage your operations securely from one place.",
            subscriptionButton: "Contact sales",
            subscriptionFeatures: [
                "Real-time cloud monitoring.",
                "Critical alerting system.",
                "2 active users included.",
                "6 months of historical data retention.",
            ],
            modulesTitle: "Additional Modules",
            modulesDescription:
                "On top of the base subscription, you can extend LogOS according to your infrastructure’s operational needs. The modular system allows every deployment to scale progressively in both capability and price.",
            modules: [
                {
                    title: "Advanced Messaging",
                    description:
                        "Integrate critical alerts with WhatsApp, Telegram, or corporate channels to shorten response times.",
                },
                {
                    title: "Automated Reports",
                    description:
                        "Generate and deliver recurring performance, energy consumption, and KPI reports directly to decision-makers.",
                },
                {
                    title: "3D Digital Twin",
                    description:
                        "Immersive infrastructure visualization that lets you locate the status of valves, sensors, and motors in real time.",
                },
                {
                    title: "Extended Data Retention",
                    description:
                        "Expand historical storage from 6 months to years, building the large data foundation needed for long-term predictive analytics and AI.",
                },
                {
                    title: "Additional Users",
                    description:
                        "Scale platform access as your operations and maintenance team grows, with roles and permissions by area.",
                },
                {
                    title: "New Devices",
                    description:
                        "Integrate more sensors, PLCs from new vendors, extra panels, or other OT assets without friction.",
                },
            ],
        },
        privacy: {
            backHome: "Back to home",
            title: "Privacy Policy",
            contactIntro: "If you have any questions or comments about this privacy policy, please contact us at:",
            sections: [
                {
                    title: "Data processing responsibility",
                    content:
                        "BYLOGOS SPA is responsible for collecting, storing, processing, and protecting the data obtained through the LogOS software.",
                },
                {
                    title: "Types of data collected",
                    content: "LogOS may collect and process the following data:",
                    list: [
                        "User data: name, email address, access credentials, roles, and permissions.",
                        "Customer data: company information, plant or facility locations, and electrical system configuration.",
                        "Operational data: electrical consumption by device, event and alarm records, and information from connected sensors and devices such as measurements, status, and logs.",
                        "Software usage data: platform interactions, connection times, errors, and performance events.",
                    ],
                },
                {
                    title: "Purpose of processing",
                    content: "Collected data is used for:",
                    list: [
                        "Real-time electrical consumption monitoring and analysis.",
                        "Industrial process optimization through AI and NILM algorithms.",
                        "Personalized reports and operational alerts.",
                        "Security, auditing, and prevention of unauthorized access.",
                        "Software improvement and technical support.",
                    ],
                },
                {
                    title: "Legal basis for processing",
                    content: "Data processing is based on:",
                    list: [
                        "Explicit consent from the user or the company’s legal representative.",
                        "Compliance with applicable contractual and legal obligations.",
                        "LogOS’s legitimate interest in maintaining operations, security, and continuous software improvement.",
                    ],
                },
                {
                    title: "Data sharing and transfer",
                    content: [
                        "LogOS will not sell or share data with third parties without explicit consent, except when legally required.",
                        "Data may be transferred to service providers under equivalent confidentiality and security agreements.",
                        "For customers with multiple sites, data may be processed locally on edge computing devices and stored on servers to ensure backup and security.",
                    ],
                },
                {
                    title: "Data security",
                    content: [
                        "All data is stored securely using encryption in transit and at rest.",
                        "Administrative access is restricted through strong authentication and permission controls.",
                        "Integrity monitoring, intrusion detection, and local backup measures are implemented for critical information.",
                    ],
                },
                {
                    title: "Data retention",
                    content: [
                        "Operational data is stored as long as needed for operation, analysis, and legal compliance purposes.",
                        "Personal data is retained until the user requests deletion or withdraws consent.",
                    ],
                },
                {
                    title: "User rights",
                    content: "Users have the right to:",
                    list: [
                        "Access their personal and operational data.",
                        "Correct inaccurate or incomplete information.",
                        "Delete their personal data at any time.",
                        "Withdraw consent at any time.",
                        "Receive a readable copy of their personal data.",
                    ],
                },
                {
                    title: "Policy changes",
                    content:
                        "LogOS reserves the right to modify this privacy policy at any time. Changes will be published on this page and will take effect immediately after publication.",
                },
                { title: "Contact" },
            ],
        },
        terms: {
            backHome: "Back to home",
            title: "Terms and Conditions",
            contactIntro: "Questions about these Terms may be sent to:",
            sections: [
                {
                    title: "Acceptance of the Terms",
                    content:
                        "By using the LogOS software developed by BYLOGOS SPA, the user accepts these Terms and Conditions in full. If you do not agree, you must not use the platform or related services.",
                },
                {
                    title: "License of Use",
                    list: [
                        "LogOS grants the user a limited, non-exclusive, non-transferable license to use the software under these Terms.",
                        "The software and all of its components, including AI algorithms, interfaces, documentation, and generated data, are the exclusive property of BYLOGOS SPA.",
                        "Copying, modifying, distributing, or sublicensing the software without explicit authorization from BYLOGOS SPA is prohibited.",
                    ],
                },
                {
                    title: "Use of the Software",
                    list: [
                        "The user agrees to use LogOS only for lawful purposes and in accordance with operational instructions.",
                        "Interfering with the operation of LogOS, attempting to access unauthorized systems, or manipulating third-party data is prohibited.",
                        "Running LogOS in edge computing environments ensures data remains local; any information transfer will be handled according to the current privacy policy.",
                    ],
                },
                {
                    title: "Liability and Warranties",
                    list: [
                        "LogOS is provided “as is” and does not guarantee specific results in electrical consumption optimization or AI predictions.",
                        "BYLOGOS SPA shall not be liable for direct, indirect, incidental, consequential damages, or losses arising from use of the software.",
                        "The user is responsible for implementing any additional security measures required by their industrial and legal context.",
                    ],
                },
                {
                    title: "Updates and Modifications",
                    list: [
                        "BYLOGOS SPA may update LogOS at any time, including new features, security improvements, and bug fixes.",
                        "The user accepts that updates may be applied automatically and without prior notice.",
                    ],
                },
                {
                    title: "Intellectual Property",
                    list: [
                        "All intellectual property rights related to LogOS, its algorithms, graphical interfaces, documentation, and AI-generated content belong exclusively to BYLOGOS SPA.",
                        "Unauthorized use, reproduction, distribution, or reverse engineering of any component is prohibited.",
                    ],
                },
                {
                    title: "Termination",
                    list: [
                        "BYLOGOS SPA may suspend or cancel access to the software in the event of a breach of these Terms.",
                        "After termination, the user must delete all software copies and any derived data unless retention is required by law.",
                    ],
                },
                { title: "Contact" },
            ],
        },
        notFound: {
            badge: "Page not found",
            title: "Page",
            titleAccent: "not found",
            description: "The requested route does not exist. Check the URL or use the navigation links below.",
            diagnosticsTitle: "System diagnostics",
            recoveryTitle: "Recovery",
            recoveryDescription: "Choose one of the following options to keep browsing.",
            goHome: "Back to home",
            reviewUrl: "Review the URL",
            newsletter: "Newsletter",
            reviewAction: "Review",
            subscribeAction: "Subscribe",
            previousPage: "Previous page",
            platformLabel: "Platform • Uptime: 99.9%",
            servicesActive: "Services active",
            edgeConnected: "Connected to edge",
            supportLabel: "Technical support:",
            suggestions: [
                {
                    title: "Back to home",
                    description: "Return to the main LogOS page.",
                    action: "Go home",
                    href: "/",
                },
                {
                    title: "Review the URL",
                    description: "Double-check the address you are trying to reach.",
                    action: "Review",
                },
                {
                    title: "Newsletter",
                    description: "Subscribe to stay in the loop with our latest updates.",
                    action: "Subscribe",
                    href: "#newsletter",
                },
            ],
            diagnostics: [
                { label: "HTTP Status", value: "404", status: "error" },
                { label: "Connection", value: "Active", status: "success" },
                { label: "Protocol", value: "HTTPS", status: "success" },
                { label: "Response time", value: "45ms", status: "success" },
            ],
        },
        platform: {
            heroEyebrow: "PLATFORM",
            heroTitleStart: "One platform to",
            heroTitleAccent: "run your industry",
            heroDescription:
                "LogOS unifies monitoring, control, AI, and digital twins on top of your existing infrastructure. Modular software that adapts to your operation, not the other way around.",
            heroCtaPrimary: "Request a demo",
            heroCtaSecondary: "See use cases",
            modulesTitle: "Software modules",
            modulesDescription:
                "Mix the modules you need. Each one runs on the same edge layer and shares data, alerts, and context.",
            modules: [
                {
                    title: "Real-time monitoring",
                    description: "View electrical, mechanical, and process variables with sub-second latency from any device.",
                },
                {
                    title: "Single-line diagrams",
                    description: "Interactive schematics that reflect plant state in real time and let you navigate the facility as a living map.",
                },
                {
                    title: "Historical records",
                    description: "Full time-series access with trend analysis, period comparison, and export.",
                },
                {
                    title: "Smart alarms",
                    description: "Rules, events, and AI-driven predictions that anticipate failures and route notifications to the right person.",
                },
                {
                    title: "Integrations",
                    description: "WhatsApp, Telegram, email, and open APIs. Operations reach your team without forcing them to open a dashboard.",
                },
                {
                    title: "Automated reporting",
                    description: "Technical and executive reports generated automatically, audit-ready and fit for leadership conversations.",
                },
                {
                    title: "AI assistant",
                    description: "A copilot trained on your operation: answers questions about loads, faults, and historical behavior in natural language.",
                },
                {
                    title: "Digital twin",
                    description: "Functional replica of your facility to simulate scenarios, rehearse changes, and validate decisions before the field.",
                },
                {
                    title: "Multi-device access",
                    description: "Information synced across web and mobile, with granular permissions per plant, area, and role.",
                },
            ],
            architectureTitle: "Edge first, cloud when it matters",
            architectureDescription:
                "We process data where it is generated. Your operational information stays on site and only what you choose to expose travels out.",
            architecturePoints: [
                "Sub-second local latency for control and critical alarms.",
                "Compliance with industrial security policies and local regulations.",
                "No internet dependency to keep the plant running.",
            ],
            ctaTitle: "Ready to see it on your plant?",
            ctaDescription: "We will show LogOS running on a real case similar to yours in under 30 minutes.",
            ctaButton: "Schedule a technical demo",
            process: {
                eyebrow: "HOW IT WORKS",
                title: "The integration process",
                sub: "Three steps to take your legacy plant into LogOS operation.",
                steps: [
                    {
                        title: "Operational diagnosis",
                        body: "We visit your plant, map PLCs, SCADAs, and protocols in use. We define critical monitoring, control, and reporting points without touching what already works.",
                        items: ["OT survey", "Protocol mapping", "Deployment plan"],
                    },
                    {
                        title: "Edge deployment",
                        body: "We install LogOS on certified industrial hardware. We connect OPC UA, Modbus, MQTT, and internal APIs. Telemetry is validated on site before going to production.",
                        items: ["Turnkey hardware", "Non-intrusive integration", "On-site validation"],
                    },
                    {
                        title: "AI-powered operation",
                        body: "We activate dashboards, predictive alarms, automated reports, and the AI copilot. Your team operates with full visibility and continuous engineering support.",
                        items: ["Live dashboards", "Predictive alarms", "AI assistant"],
                    },
                ],
                ctaHint: "End of process →",
            },
            why: {
                eyebrow: "FUNDAMENTALS",
                title: "Why LogOS?",
                sub: "Three reasons industry chooses LogOS over traditional stacks.",
                edge: {
                    eyebrow: "EDGE / CLOUD",
                    title: "Why Edge Computing?",
                    sub: "Control cannot depend on the internet. LogOS runs at the edge first, not in the cloud.",
                    onPremTitle: "LogOS · Edge-first",
                    onPremTag: "ON-PREMISE",
                    onPremPoints: [
                        "Sub-second latency for control and critical alarms",
                        "Operational data stays on your plant",
                        "Works even if internet drops",
                        "Aligned with industrial security policies",
                    ],
                    cloudTitle: "Traditional cloud-only",
                    cloudTag: "DEPENDENT",
                    cloudPoints: [
                        "Latency tied to bandwidth",
                        "Sensitive data leaves your network",
                        "No internet, plant goes blind",
                        "Cost and throughput scale with traffic",
                    ],
                },
                allInOne: {
                    eyebrow: "UNIFIED PLATFORM",
                    title: "Everything in one platform",
                    sub: "SCADA, digital twin, monitoring, and control live in LogOS. No silos, no broken integrations.",
                    hubLabel: "LogOS",
                    silos: [
                        { label: "SCADA", note: "Supervision and control" },
                        { label: "Digital twin", note: "Functional replica" },
                        { label: "Monitoring", note: "Telemetry and KPIs" },
                        { label: "Alarms + AI", note: "Predictive and reactive" },
                    ],
                    outcomeLabel: "OUTCOME",
                    outcome: "Single source of truth for your operation. Zero friction between data, decision, and action.",
                },
                comparison: {
                    eyebrow: "BEFORE / AFTER",
                    title: "What changes with LogOS",
                    beforeLabel: "BEFORE",
                    afterLabel: "WITH LogOS",
                    rows: [
                        { topic: "Visibility", before: "Weekly manual reports", after: "Real-time dashboards" },
                        { topic: "Failure response", before: "Post-event detection", after: "Predictive AI alerts" },
                        { topic: "Integration", before: "Silos per vendor and protocol", after: "One layer over PLCs, SCADA, and MQTT" },
                        { topic: "Reporting", before: "Repetitive labor hours", after: "Auditable automated reports" },
                        { topic: "Scaling", before: "Re-cabling for every change", after: "Software-defined remote deploys" },
                    ],
                },
            },
        },
        partners: {
            heroEyebrow: "PARTNERS",
            heroTitleStart: "Let's work together to",
            heroTitleAccent: "modernize industry",
            heroDescription:
                "Not a closed program, not a fixed set of tiers. An open invitation to integrators, consultancies, and EPCs that want to add LogOS to what they already offer. We talk, we find ways to collaborate, and we build from there.",
            heroCta: "Let's talk",
            benefitsTitle: "How we usually collaborate",
            benefitsSub: "These are ideas, not obligations. Every partner ends up with a different agreement based on what works best for their operation and their customers.",
            benefits: [
                {
                    title: "Install enablement",
                    description: "We bring your team up to speed so you can install and configure LogOS on plant. Not a formal course — we work side by side until your deployments flow.",
                },
                {
                    title: "Editor access",
                    description: "We enable your access to the editor so you can integrate LogOS inside the solutions you already sell. Your product, your brand, our layer underneath.",
                },
                {
                    title: "Joint projects",
                    description: "We build cases together. We negotiate per project who owns what: engineering, execution, support — whatever fits.",
                },
                {
                    title: "Real industry contribution",
                    description: "The spirit of the program: each plant we digitalize together is a more efficient, safer operation with fewer wasted labor hours.",
                },
                {
                    title: "Partner pricing",
                    description: "Working with us means access to pricing different from the open market. The conversation is direct and based on context.",
                },
                {
                    title: "Partner panel (optional)",
                    description: "Access to alarms and a dashboard with per-customer recommendations: what maintenance to offer, which assets are at risk, which upgrades make sense. A separate add-on we discuss in contact.",
                },
            ],
            ideasTitle: "Some ideas on how we could work together",
            ideasSub: "Depending on how your team operates, this can take very different shapes. Starting points, not rails.",
            ideas: [
                "Add LogOS as a monitoring layer inside automation projects you are already selling.",
                "Build a predictive maintenance offering powered by LogOS alarms and dashboards.",
                "Offer pre-installed certified industrial hardware to your customers, ready to run LogOS.",
                "Take LogOS into a specific vertical where your team already has relationships and depth.",
                "Build your own integration on top of our APIs to extend what LogOS does natively.",
            ],
            ctaTitle: "Let's talk, no commitment",
            ctaDescription: "There is no formal partner application. Tell us what you do and which customers you serve, and from there we figure out what makes sense for both sides.",
            ctaButton: "Let's talk",
        },
        contact: {
            heroEyebrow: "CONTACT",
            heroTitle: "Let's talk",
            heroDescription:
                "Demo, partnership, press, or pure technical curiosity. Drop us a line and we reply within one business day.",
            form: {
                firstNameLabel: "FIRST NAME",
                lastNameLabel: "LAST NAME",
                emailLabel: "EMAIL",
                companyLabel: "COMPANY",
                reasonLabel: "REASON FOR CONTACT",
                reasonPlaceholder: "Select a reason",
                commentLabel: "COMMENT",
                firstNamePlaceholder: "Your name",
                lastNamePlaceholder: "Your last name",
                emailPlaceholder: "email@company.com",
                companyPlaceholder: "Company name",
                commentPlaceholder: "Something we should know?",
                reasonOptions: [
                    { value: "PARTNERSHIP", label: "PARTNERSHIP" },
                    { value: "DEMO", label: "DEMO" },
                    { value: "CUSTOMER", label: "CUSTOMER" },
                    { value: "PRESS", label: "PRESS" },
                    { value: "INVESTOR", label: "INVESTOR" },
                    { value: "GENERAL", label: "GENERAL" },
                    { value: "OTHER", label: "OTHER" },
                ],
                submit: "Send message",
                submitting: "Sending...",
                successTitle: "Message sent",
                successDescription: "We got your message. We'll be in touch soon.",
                errorTitle: "We couldn't send the message",
                errorDescription: "Try again in a few minutes or write us directly at contact@bylogos.io.",
                requiredError: "This field is required.",
                emailError: "Enter a valid email.",
            },
            altContactTitle: "Other channels",
            altContactDescription:
                "If you prefer direct email, write to contact@bylogos.io. For technical support of active customers, use the dedicated channel inside the platform.",
        },
    },
    pt: {
        seo: {
            ogLocale: "pt_BR",
            languageAlternates: {
                "es-ES": "/es",
                "en-US": "/en",
                "pt-BR": "/pt",
            },
            layout: {
                titleDefault: "LogOS | Unificando TI e TO para Infraestrutura Industrial",
                description:
                    "LogOS é a solução combinada de infraestrutura e software que conecta o mundo analógico à IA. Reduzimos perdas de horas-homem, otimizamos o controle industrial e automatizamos relatórios para Oil & Gas, Energia e Data Centers.",
                keywords: [
                    "LogOS",
                    "convergência TI TO",
                    "infraestrutura industrial",
                    "inteligência artificial industrial",
                    "automação de relatórios",
                    "redução de horas-homem",
                    "eficiência operacional",
                    "monitoramento OT",
                    "controle industrial",
                    "SCADA",
                    "IIoT",
                    "Oil & Gas",
                    "Data Centers",
                    "Energia",
                    "Food & Beverage",
                    "modernização de infraestrutura legada",
                    "gestão de ativos industriais",
                    "gêmeo digital",
                    "Edge Computing",
                ],
                openGraphTitle: "LogOS | Solução Híbrida TI/TO para Infraestrutura Crítica",
                openGraphDescription:
                    "LogOS adapta sua infraestrutura analógica à era da IA. Reduza perdas de horas-homem e transforme a tomada de decisão com controle detalhado e relatórios automatizados.",
                openGraphImageAlt: "LogOS - Unificando TI e TO para Infraestrutura Industrial",
                twitterTitle: "LogOS | Conectando o Campo OT à Camada de TI",
                twitterDescription:
                    "Pare de analisar sua infraestrutura manualmente. O LogOS automatiza relatórios e adapta sistemas legados a fluxos com inteligência artificial.",
            },
            home: {
                title: "LogOS | Levando a Infraestrutura Industrial para a Era da IA",
                description:
                    "LogOS conecta o mundo analógico OT à camada de TI. Uma solução híbrida para modernizar a infraestrutura, reduzir perdas de horas-homem e transformar a tomada de decisão com IA.",
            },
            about: {
                title: "About",
                description:
                    "A LogOS nasceu para fechar a lacuna entre o mundo analógico e a IA. Nossa missão é facilitar a vida dos técnicos e reduzir perdas de horas-homem por meio de tecnologia híbrida de ponta.",
            },
            industries: {
                title: "Soluções Industriais TI/TO | Setores e Casos de Uso",
                description:
                    "Software elástico e hardware fácil de integrar para qualquer indústria: Oil & Gas, Food & Beverage, Água, Data Centers e Energia. Modernize suas operações com a LogOS.",
            },
            pricing: {
                title: "Planos e Preços",
                description:
                    "Invista em eficiência. Conheça nossos planos para digitalizar sua infraestrutura, reduzir perdas de horas-homem e automatizar relatórios com a LogOS.",
            },
            platform: {
                title: "Plataforma",
                description:
                    "Monitoramento em tempo real, IA, gêmeos digitais e relatórios automáticos sobre a mesma camada edge. Conheça a plataforma LogOS.",
            },
            partners: {
                title: "Partners",
                description:
                    "Programa de partners da LogOS para integradores, EPCs e consultorias OT. Certificação, suporte de engenharia e margem recorrente.",
            },
            contact: {
                title: "Contato",
                description:
                    "Vamos conversar sobre sua operação. Demonstração, parceria ou consulta técnica: respondemos em até um dia útil.",
            },
        },
        common: {
            logosWordmarkAlt: "LogOS",
            socialLinkAriaLabel: "Visitar rede social",
        },
        languageSwitcher: {
            label: "Mudar idioma",
            menuTitle: "Idioma do site",
            currentLanguageLabel: "Idioma atual",
        },
        header: {
            logoAriaLabel: "Início",
            mobileMenuButtonAriaLabel: "Abrir menu de navegação",
            closeMenuAriaLabel: "Fechar menu",
            menuTitle: "Menu",
            followUs: "SIGA-NOS",
            contactCta: "Contato",
            navigation: [
                { label: "Início", href: "/" },
                { label: "Plataforma", href: "/platform" },
                { label: "Casos de uso", href: "/industries" },
                { label: "Novidades", href: "/news" },
                { label: "Parceiros", href: "/partners" },
                { label: "Sobre", href: "/about" },
                { label: "Contato", href: "/contact" },
            ],
        },
        footer: {
            tagline: "Transforme a infraestrutura industrial em tempo real.",
            protocolsTitle: "Protocolos suportados",
            directContactTitle: "Contato direto",
            contactButton: "Solicitar demonstração técnica",
            copyright: "© {year} LogOS. Todos os direitos reservados.",
            privacy: "Política de privacidade",
            terms: "Termos de serviço",
            contactInfoLabel: "Email técnico",
            protocols: ["Modbus RTU/TCP", "OPC UA (DA, AC, HDA)", "MQTT / MQTT-SN"],
        },
        home: {
            hero: {
                title: "O futuro industrial está na borda.",
                subtitle: "GÊMEOS DIGITAIS, IIOT E IA INDUSTRIAL.",
            },
            clientsMarqueeLabel: "Confiam em nós",
            demoVideo: {
                label: "VEJA AQUI",
                title: "Veja como o",
                brand: "LogOS funciona",
                description:
                    "Explore todo o fluxo de monitoramento, visualização e operação assistida por IA em uma única plataforma.",
            },
            edgeArchitecture: {
                label: "ARQUITETURA",
                titleStart: "Edge Computing e",
                titleAccent: "IA Industrial",
                nodes: {
                    field: { title: "Campo OT", subtitle: "Sensores, CLPs, etc." },
                    edge: { title: "Edge", subtitle: "LogOS" },
                    user: { title: "Usuário", subtitle: "Operação & Decisão" },
                },
                paragraphs: [
                    {
                        title: "Eficiência e baixa latência",
                        body: "Os dados são processados onde são gerados. As decisões de controle e os modelos de IA rodam localmente, sem depender da Internet nem de serviços cloud que adicionam atraso e custos por tráfego.",
                    },
                    {
                        title: "Governança e segurança",
                        body: "Seus dados operacionais nunca saem da planta. Você mantém a propriedade e o controle total sobre a informação sensível, cumprindo políticas de segurança industrial e regulamentações locais.",
                    },
                ],
            },
            features: {
                titleStart: "Operação",
                titleAccent: "Modular",
                description: "Monte sua própria solução escolhendo apenas os módulos que sua operação precisa.",
                items: [
                    {
                        title: "Monitoramento",
                        description:
                            "Supervisão em tempo real de todos os parâmetros elétricos com latência inferior a um segundo.",
                    },
                    {
                        title: "Diagramas Unifilares",
                        description: "Diagramas interativos com representação dinâmica do estado da instalação.",
                    },
                    {
                        title: "Histórico de Dados",
                        description: "Acesso completo aos registros passados com análise de tendências e padrões.",
                    },
                    {
                        title: "Alarmes Inteligentes",
                        description: "Alarmes baseados em eventos e previsões para prevenir falhas.",
                    },
                    {
                        title: "Integrações",
                        description:
                            "Fique próximo da operação com integrações de mensagens em tempo real com WhatsApp, Telegram, Gmail e muito mais.",
                    },
                    {
                        title: "Relatórios Automáticos",
                        description:
                            "Geração automática de relatórios de consumo com informações detalhadas do estado operacional.",
                    },
                    {
                        title: "Inteligência Artificial",
                        description: "Um assistente inteligente para análises mais profundas de carga e desempenho.",
                    },
                    {
                        title: "Gêmeo Digital",
                        description: "Represente seu processo no mundo digital com uma cópia exata da sua instalação.",
                    },
                    {
                        title: "Acesso de qualquer lugar",
                        description:
                            "Todas as suas informações sincronizadas e disponíveis em qualquer dispositivo, onde você estiver.",
                    },
                ],
            },
            hardware: {
                eyebrow: "SEM INFRAESTRUTURA?",
                titleStart: "Sem problema.",
                titleAccent: "Nós fornecemos.",
                description:
                    "Se sua planta ainda não tem os equipamentos para rodar a LogOS, entregamos hardware industrial pré-instalado e validado. Turnkey, pronto para conectar.",
                vatExcluded: "IVA NÃO INCLUÍDO",
                technicalSpecs: "ESPECIFICAÇÕES TÉCNICAS",
                useCaseLabel: "Caso de uso:",
                quoteButton: "SOLICITAR COTAÇÃO",
                partnership:
                    "A LogOS é testada e otimizada para hardware SEEED Studio, garantindo máximo desempenho, segurança e total compatibilidade em ambientes industriais críticos de alta exigência.",
                options: [
                    {
                        subtitle: "Painel de Controle Interativo",
                        description:
                            "Terminal industrial com tela sensível ao toque integrada para controle direto e visualização em tempo real, com o LogOS pré-instalado.",
                        features: [
                            'Tela touch de 10,1"',
                            "Câmera integrada",
                            "WiFi 6 + Bluetooth 5.0",
                            "Alimentação PoE+",
                        ],
                        specs: ["Resolução 1280x800", "Classificação IP65", "Serial RS485", "Compatível com IEC 61850"],
                        useCase: "Ideal para salas de controle, cabines de operador e pontos de supervisão local.",
                        highlight: "Interface Local",
                    },
                    {
                        subtitle: "Gateway Edge Industrial",
                        description:
                            "Computador industrial compacto otimizado para executar o LogOS como servidor web local e gateway de comunicações de alto desempenho.",
                        features: [
                            "Desempenho nível servidor",
                            "6 meses de retenção",
                            "Ethernet Gigabit dupla",
                            "ARM Cortex-A72 Quad-core",
                        ],
                        specs: ["8GB RAM DDR4", "Sem ventilação", "Montagem em trilho DIN", "Temperaturas críticas"],
                        useCase:
                            "Perfeito para implantações locais, edge computing e servidores on-site de alta disponibilidade.",
                        highlight: "Conectividade",
                    },
                    {
                        subtitle: "Processador Inteligente",
                        description:
                            "Hardware industrial com processamento neural potente para inferência em tempo real de modelos preditivos da plataforma LogOS.",
                        features: [
                            "Aceleração de Edge AI",
                            "Desempenho máximo",
                            "Inferência otimizada",
                            "16GB RAM LPDDR4x",
                        ],
                        specs: [
                            "Raspberry Pi 5",
                            "Acelerador Hailo 8",
                            "Trilho DIN ou montagem em parede",
                            "Ambientes industriais",
                        ],
                        useCase: "Ideal para processamento local avançado e análise de vídeo ou imagens em tempo real.",
                        highlight: "Núcleo de IA",
                    },
                ],
            },
            comparison: {
                eyebrow: "A QUARTA",
                title: "Revolução Industrial",
                description:
                    "O monitoramento de dados e a IA estão mudando as regras do jogo industrial. A LogOS unifica sua operação em uma única camada inteligente.",
                beforeLabel: "ANTES: LEGADO",
                afterLabel: "AGORA: ECOSSISTEMA LOGOS",
                savingsTitle: "ECONOMIZE HORAS-HOMEM E GANHE EFICIÊNCIA",
                savingsDescription: "Otimize o uso dos seus recursos",
                beforeItems: [
                    { title: "Silos de Dados", desc: "Informações fragmentadas e difíceis de auditar em tempo real." },
                    {
                        title: "Custo de Infraestrutura",
                        desc: "Servidores independentes, licenças separadas e hardware fechado.",
                    },
                    {
                        title: "Manutenção Reativa",
                        desc: "O sistema só avisa quando a falha já aconteceu, aumentando o custo de manutenção.",
                    },
                    {
                        title: "Falhas de Segurança",
                        desc: "Protocolos antigos e vulneráveis, sem atualizações contínuas.",
                    },
                    { title: "Interfaces Difíceis", desc: "Uma interface desorganizada e difícil de usar." },
                    { title: "Sem Interoperabilidade", desc: "Sem integração com sistemas externos." },
                ],
                afterItems: [
                    {
                        title: "Inteligência Preditiva",
                        desc: "Antecipe falhas críticas antes que aconteçam com modelos guiados por IA.",
                    },
                    {
                        title: "Fonte Única da Verdade",
                        desc: "Toda a sua operação em uma plataforma auditável e transparente.",
                    },
                    {
                        title: "Eficiência Energética",
                        desc: "Relatórios e análises autônomas para otimizar seu consumo elétrico.",
                    },
                    {
                        title: "TCO Reduzido",
                        desc: "Elimine CAPEX pesado e escale sua infraestrutura conforme necessário.",
                    },
                    {
                        title: "Continuidade Operacional",
                        desc: "Monitoramento em nuvem 24/7 e alertas de missão crítica onde você estiver.",
                    },
                    {
                        title: "Cibersegurança de Ponta a Ponta",
                        desc: "Criptografia ponta a ponta e conformidade com padrões internacionais.",
                    },
                ],
            },
            testimonials: {
                eyebrow: "CASOS DE SUCESSO",
                titleStart: "Resultados que falam",
                titleAccent: "por si",
                description:
                    "Empresas líderes confiam na LogOS para gerenciar suas infraestruturas elétricas mais críticas.",
                keyResultLabel: "Resultado-chave:",
                stats: [
                    { value: "10", label: "Meses de monitoramento" },
                    { value: "99%", label: "Disponibilidade" },
                    { value: "1036M+", label: "Registros de monitoramento" },
                    { value: "24/7", label: "Suporte técnico" },
                ],
                items: [
                    {
                        industry: "Saúde",
                        quote: "A LogOS nos ajudou a reduzir o tempo de resposta a emergências. A integração com nossos sistemas legados foi perfeita.",
                        metrics: "Resposta 60% mais rápida.",
                    },
                    {
                        industry: "Alimentos",
                        quote: "Com a LogOS, podemos monitorar o consumo de energia em cada etapa da produção e otimizá-lo para reduzir desperdícios.",
                        metrics: "Consumo de energia otimizado.",
                    },
                    {
                        industry: "Energia Renovável",
                        quote: "A suíte de desenvolvimento da LogOS é excelente. Ela acelera a criação de soluções para nossos clientes.",
                        metrics: "Desenvolvimento 50% mais rápido.",
                    },
                ],
            },
            newsletter: {
                successTitle: "Bem-vindo!",
                successDescription:
                    "Sua assinatura foi confirmada com sucesso. Em breve você receberá nossas atualizações técnicas e novidades do setor industrial.",
                subscribeAnother: "Assinar outro email",
                eyebrow: "CONTATO",
                titleStart: "Expertise técnica",
                titleAccent: "com a gente",
                description:
                    "Participe da nossa comunidade industrial para receber as últimas novidades de produto ou fale diretamente conosco em",
                benefitsTitle: "Valor exclusivo para você",
                formTitle: "Assine agora",
                formSubtitle: "Fique à frente na indústria",
                nameLabel: "Nome completo",
                emailLabel: "email@empresa.com",
                submitting: "ASSINANDO...",
                submit: "ASSINAR GRÁTIS",
                privacyNote: "* Respeitamos sua privacidade. Sem spam.",
                supportedBy: "Com apoio de",
                invalidEmail: "Por favor, informe um email válido",
                subscribeError: "Houve um problema ao processar sua assinatura. Tente novamente.",
                benefits: [
                    {
                        title: "Atualizações técnicas",
                        description: "Novos recursos, protocolos suportados e melhorias de desempenho da LogOS.",
                    },
                    {
                        title: "Casos de uso industriais",
                        description: "Implantações reais, configurações otimizadas e melhores práticas de campo.",
                    },
                    {
                        title: "Tendências do setor",
                        description:
                            "Análises de mercado, novos padrões IEC e a evolução tecnológica do setor elétrico.",
                    },
                    {
                        title: "Alertas de segurança",
                        description:
                            "Vulnerabilidades, patches críticos e recomendações proativas de cibersegurança industrial.",
                    },
                ],
            },
            landingV2: {
                hero: {
                    eyebrow: "ADEUS AO MONITORAMENTO LEGADO",
                    titleLead: "Conecte sua indústria à",
                    titleEmphasis: "IA.",
                    sub: "A LogOS é a infraestrutura que digitaliza seu campo existente sem substituí-lo.",
                    subSecondary: "Dados e decisões na borda, monitoramento onde você estiver.",
                    subTertiary: "Preparamos sua indústria para a era da IA: gêmeos digitais como visualizações 3D em tempo real com assistência inteligente — não uma planilha de Excel.",
                    audience: "Para plantas com ativos OT em monitoramento manual, Excel ou SCADA isolado.",
                    highlight: "Inclui Gêmeo Digital 3D · Monitoramento ao vivo",
                    ctaPrimary: "Solicitar demo técnica",
                    ctaSecondary: "Ver como funciona",
                    ctaPrimaryHref: "/contact",
                    ctaSecondaryHref: "#demo-video",
                    callouts: [
                        { label: "LATÊNCIA", value: "<1s" },
                        { label: "ARQUITETURA", value: "Edge Native" },
                        { label: "PROTOCOLOS", value: "Modbus, OPC UA, MQTT" },
                        { label: "IMPLANTAÇÃO", value: "7 dias" },
                    ],
                },
                integrations: {
                    label: "INTEGRAÇÕES NATIVAS",
                    sub: "Hardware-agnostic. Conecta sem substituir.",
                    protocolsLabel: "PROTOCOLOS",
                    protocols: ["Modbus RTU/TCP", "OPC-UA", "MQTT / MQTT-SN", "Profibus", "Telnet", "IEC 61850"],
                    vendorsLabel: "FABRICANTES",
                    vendors: ["Siemens", "Allen-Bradley", "Schneider", "Rockwell", "ABB", "Phoenix Contact"],
                },
                pillars: {
                    eyebrow: "ARQUITETURA",
                    title: "Quatro pilares. Uma plataforma.",
                    sub: "O stack mínimo para fechar a lacuna entre seu campo OT e seu TI.",
                    items: [
                        {
                            n: "01",
                            title: "Conecta o legado",
                            claim: "Modbus, OPC UA, MQTT, IEC 61850 e mais de 40 famílias de PLC.",
                            outcome: "Sem substituir sua infraestrutura. Sem parar a operação.",
                        },
                        {
                            n: "02",
                            title: "Decide na borda",
                            claim: "IA local, retenção 6+ meses, opera sem internet.",
                            outcome: "Seus dados não saem da planta. Soberania e baixa latência.",
                        },
                        {
                            n: "03",
                            title: "Opera de qualquer lugar",
                            claim: "Dashboards web, alertas WhatsApp/Telegram, relatórios automáticos.",
                            outcome: "Sua planta no bolso. Reduza o tempo de resposta a minutos.",
                        },
                        {
                            n: "04",
                            title: "Antecipa falhas",
                            claim: "Modelos preditivos sobre o histórico do ativo.",
                            outcome: "Manutenção baseada em condição. Menos paradas não planejadas.",
                        },
                    ],
                },
                beforeAfter: {
                    eyebrow: "ANTES / DEPOIS",
                    title: "De Excel à inteligência operacional.",
                    sub: "O que muda no dia em que a LogOS entra em operação.",
                    before: {
                        label: "INFRAESTRUTURA TRADICIONAL",
                        items: [
                            { title: "SCADA isolado", body: "Dados presos na sala de controle." },
                            { title: "Relatórios manuais em Excel", body: "Horas-homem sem valor agregado." },
                            { title: "Alertas por rádio ou telefone", body: "Tempo de resposta em horas." },
                            { title: "Manutenção reativa", body: "Falhas descobertas quando a planta já parou." },
                            {
                                title: "Sem rastreabilidade histórica",
                                body: "Auditorias dependentes da memória do operador.",
                            },
                        ],
                    },
                    after: {
                        label: "OPERAÇÃO COM LOGOS",
                        items: [
                            {
                                title: "Dados unificados em tempo real",
                                body: "Fonte única para campo, TI e diretoria.",
                            },
                            { title: "Relatórios gerados sozinhos", body: "PDF semanal no e-mail. Sem Excel manual." },
                            { title: "Alertas no WhatsApp/Telegram", body: "Tempo de resposta em minutos." },
                            { title: "Manutenção preditiva", body: "IA antecipa falhas antes da parada." },
                            {
                                title: "Histórico auditável 6+ meses",
                                body: "Tendências, conformidade e aprendizado contínuo.",
                            },
                        ],
                    },
                },
                edge: {
                    eyebrow: "ARQUITETURA EDGE",
                    titleStart: "Edge computing e",
                    titleAccent: "Industrial AI.",
                    sub: "Dados onde são gerados. Decisões onde importam.",
                    nodes: {
                        field: {
                            title: "Campo OT",
                            tag: "01 · ENTRADA",
                            lines: [
                                "Sensores 4-20mA / RS485",
                                "PLCs Siemens, AB, Schneider",
                                "Modbus, OPC UA, IEC 61850",
                            ],
                        },
                        edge: {
                            title: "LogOS Edge",
                            tag: "02 · COMPUTAÇÃO",
                            lines: ["IA local sem internet", "Retenção 6 meses", "Processamento subsegundo"],
                        },
                        user: {
                            title: "Usuário",
                            tag: "03 · SAÍDA",
                            lines: [
                                "Dashboards web responsivos",
                                "Alertas WhatsApp / Telegram",
                                "Relatórios PDF automáticos",
                            ],
                        },
                    },
                    benefits: [
                        {
                            title: "Baixa latência operacional",
                            body: "Decisões de controle e inferência rodam localmente. Sub-segundo ponta a ponta.",
                        },
                        {
                            title: "Soberania de dados",
                            body: "Seus dados operacionais nunca saem da planta sem autorização. Conformidade por design.",
                        },
                    ],
                },
                verticals: {
                    eyebrow: "SETORES",
                    title: "Projetado para infraestrutura crítica.",
                    sub: "Sete verticais em produção. E a sua, seja qual for.",
                    items: [
                        {
                            tag: "OIL & GAS",
                            title: "Petróleo e Gás",
                            line: "Telemetria remota 24/7 sobre SCADA legado.",
                        },
                        { tag: "DATACENTER", title: "Data Centers", line: "PUE, BMS legado e prevenção de quedas." },
                        {
                            tag: "ÁGUAS",
                            title: "Águas e Saneamento",
                            line: "Telemetria confiável para redes distribuídas.",
                        },
                        {
                            tag: "ENERGIA",
                            title: "Geração e Distribuição",
                            line: "Ativos isolados conectados à nuvem com segurança.",
                        },
                        {
                            tag: "F&B",
                            title: "Alimentos e Bebidas",
                            line: "Rastreabilidade e KPIs de planta automatizados.",
                        },
                        {
                            tag: "MANUFATURA",
                            title: "Manufatura",
                            line: "OEE, controle de processo e rastreabilidade em linhas de produção.",
                        },
                        {
                            tag: "HVAC",
                            title: "Climatização",
                            line: "Controle e monitoramento HVAC para otimizar consumo energético e conforto.",
                        },
                        {
                            tag: "SUA INDÚSTRIA",
                            title: "A sua não aparece?",
                            line: "A LogOS é agnóstica à indústria. Se você tem um campo OT, conectamos.",
                            agnostic: true,
                        },
                    ],
                    cta: "Ver todos os casos",
                    ctaHref: "/industries",
                },
                heroCase: {
                    eyebrow: "CASO DESTAQUE",
                    quote: "A LogOS substituiu nossos relatórios manuais e nos deu visibilidade sobre 99% dos ativos. Reagimos 60% mais rápido a emergências.",
                    cite: "Equipe de operações",
                    role: "Redsalud · Saúde",
                    inProductionSince: "2025-03-01",
                    inProductionLabel: "Em produção",
                    monthsUnit: "meses",
                    yearsUnit: "anos",
                    metrics: [
                        { value: "60%", label: "Resposta mais rápida" },
                        { value: "99%", label: "Disponibilidade" },
                        { value: "1.036M+", label: "Registros processados" },
                    ],
                },
                security: {
                    eyebrow: "SEGURANÇA POR DESIGN",
                    title: "Conformidade industrial sem fricção.",
                    sub: "Edge soberano, comunicação criptografada, controle de acesso por papel.",
                    badges: [
                        { name: "IEC 62443", tag: "Cibersegurança industrial" },
                        { name: "ISO 27001", tag: "Gestão de segurança" },
                        { name: "Soberania de dados", tag: "Edge local, sem nuvem forçada" },
                        { name: "RBAC + 2FA", tag: "Controle de acesso granular" },
                    ],
                },
                founder: {
                    eyebrow: "DESDE O CAMPO",
                    line: "Nascemos no chão de fábrica. Vimos técnicos perderem horas em planilhas enquanto a IA esperava. A LogOS resolve isso.",
                },
                newsletterCompact: {
                    title: "Fique na borda.",
                    sub: "Atualizações de produto, casos de campo e alertas de cibersegurança industrial.",
                    placeholder: "email@empresa.com",
                    cta: "Inscrever",
                    privacy: "Sem spam. Cancele quando quiser.",
                },
            },
        },
        about: {
            heroEyebrow: "MANIFESTO",
            heroTitle: "Por que LogOS?",
            heroHeadline: "O futuro da indústria está no edge",
            heroSub: "Modernizamos a infraestrutura industrial sem substituir o que já funciona. Processamos onde os dados são gerados, mantemos o controle na planta e levamos a IA ao campo — não à nuvem. Construído desde a América Latina para operações que não podem cair.",
            heroBadgeLabel: "EST. 2024 · LATAM",
            whyEyebrow: "POR QUÊ",
            whyKicker: "Fechamos a lacuna entre TI e TO.",
            paragraphs: [
                "Estamos fechando a lacuna entre TI e TO na infraestrutura industrial que sustenta o mundo moderno. A indústria ainda opera com PLCs e sistemas legados que não permitem coleta de dados, análise ou adoção correta de IA. A LogOS conecta esse ambiente para entregar monitoramento, previsão e análise operacional em tempo real a partir de dados de campo, levando ferramentas digitais para ambientes analógicos. Colocamos ferramentas modernas nas mãos das equipes de O&M e aumentamos significativamente a produtividade.",
                "Entendemos o desafio e a hesitação em testar novas tecnologias em áreas críticas. Por isso criamos a LogOS, operando a partir da Hispano-América, como uma solução amigável que se integra facilmente à sua infraestrutura sem interromper o que já funciona. Entregamos o necessário para que a indústria dê o salto para a IA com confiança.",
            ],
            principlesTitle: "O que nos move",
            principlesDescription: "Três princípios orientam cada decisão técnica e de produto na LogOS.",
            principles: [
                {
                    title: "Operação primeiro",
                    description:
                        "Nosso ponto de partida é sempre o técnico de planta. Se uma solução não simplifica a vida dele, não construímos.",
                },
                {
                    title: "Soberania do dado",
                    description:
                        "Seus dados operacionais são seus. Processamos no edge e nunca obrigamos a tirar informação sensível da planta.",
                },
                {
                    title: "Pragmatismo industrial",
                    description:
                        "Trabalhamos sobre o que já existe. Modernizamos sem substituir PLCs nem interromper processos que funcionam.",
                },
            ],
            foundersTitle: "Nossos fundadores",
            founders: [{ role: "Co-Founder & CEO / CTO" }, { role: "Co-Founder & Board Advisor" }],
        },
        industries: {
            heroEyebrow: "CASOS DE USO",
            heroTitle: "Operações de missão crítica em indústrias exigentes",
            heroDescription: "Energia, infraestrutura crítica, água, manufatura e mais.",
            featuredEyebrow: "CASOS EM DESTAQUE",
            featuredCaption: "FOTO: Planta industrial",
            featuredChallengeLabel: "DESAFIO",
            featuredSolutionLabel: "SOLUÇÃO",
            featuredImpactLabel: "IMPACTO OPERACIONAL",
            othersEyebrow: "LISTA DE CASOS",
            othersTitle: "Lista de casos",
            othersDescription:
                "Como aplicamos a LogOS em diferentes setores: de operações de missão crítica a implantações em escala. Alguns clientes não são divulgados publicamente por NDA.",
            kpisLabel: "MÉTRICAS",
            sliderTitle: "Indústrias Inteligentes",
            previousAriaLabel: "Anterior",
            nextAriaLabel: "Próximo",
            titleSection: "Soluções por Setor",
            descriptionSection: "Descubra como otimizamos cada indústria com tecnologia avançada.",
            footerTitle: "Sua indústria não aparece aqui?",
            footerDescription:
                "Nossa arquitetura agnóstica de hardware permite integração com praticamente qualquer ambiente industrial que precise de monitoramento e controle avançados.",
            footerButton: "Fale conosco",
            cards: [
                {
                    title: "Petróleo e Gás",
                    description:
                        "Modernize sistemas legados de extração e refino integrando telemetria em nuvem sem interromper a operação atual.",
                    points: [
                        "Integração com PLCs e SCADA",
                        "Monitoramento remoto 24/7",
                        "Detecção antecipada de falhas com IA",
                    ],
                },
                {
                    title: "Data Centers",
                    description:
                        "Monitoramento contínuo de infraestrutura crítica, como refrigeração, energia e ambiente, para maximizar a disponibilidade com integração de sistemas legados.",
                    points: ["Monitoramento de PUE", "Integração com BMS legado", "Alertas predictivos de queda"],
                },
                {
                    title: "Água e Saneamento",
                    description:
                        "Gestão centralizada de estações de tratamento e redes de distribuição por meio de coleta de dados agnóstica ao hardware.",
                    points: [
                        "Telemetria de campo confiável",
                        "Alertas e prevenção de vazamentos",
                        "Dashboards operacionais em tempo real",
                    ],
                },
                {
                    title: "Energia",
                    description:
                        "Transforme dados de geração e distribuição em insights acionáveis, conectando ativos isolados à nuvem com segurança.",
                    points: [
                        "Infraestrutura legada para a nuvem",
                        "Análises de eficiência energética",
                        "Monitoramento predictivo contínuo",
                    ],
                },
                {
                    title: "Alimentos e Bebidas",
                    description:
                        "Garanta qualidade e eficiência conectando sensores do chão de fábrica diretamente a ferramentas de monitoramento e análise.",
                    points: [
                        "Rastreabilidade completa das variáveis",
                        "Controle automatizado 24/7",
                        "Conformidade e relatórios de KPIs",
                    ],
                },
                {
                    title: "Manufatura",
                    description:
                        "OEE, controle de processo e rastreabilidade em linhas mistas com PLCs heterogêneos e sistemas legados de planta.",
                    points: [
                        "OEE e eficiência operacional",
                        "Rastreabilidade de lotes e turnos",
                        "Integração multi-marca de PLCs",
                    ],
                },
                {
                    title: "Climatização",
                    description:
                        "Controle e monitoramento de sistemas HVAC em edifícios e instalações críticas. Otimize consumo energético e conforto sem substituir equipamentos.",
                    points: [
                        "Otimização do consumo energético",
                        "Monitoramento de temperatura e umidade",
                        "Controle supervisório remoto",
                    ],
                },
            ],
            sliderItems: [
                {
                    title: "Petróleo e Gás",
                    description:
                        "Leve IA e conectividade em nuvem para ambientes de alta disponibilidade e alta exigência.",
                },
                {
                    title: "Dados",
                    description:
                        "Supervisione continuamente infraestrutura crítica para garantir disponibilidade e eficiência operacional (PUE).",
                },
                {
                    title: "Água",
                    description:
                        "Otimize a gestão hídrica integrando telemetria e monitoramento centralizado de ativos distribuídos.",
                },
                {
                    title: "Energia",
                    description:
                        "Conecte infraestrutura legada de geração para obter visibilidade, previsão e controle.",
                },
                {
                    title: "Produção",
                    description:
                        "Garanta rastreabilidade, qualidade e controle conectando dados do chão de fábrica à TI.",
                },
                {
                    title: "Manufatura",
                    description: "OEE, controle de processo e rastreabilidade em linhas mistas com PLCs heterogêneos.",
                },
                {
                    title: "Climatização",
                    description: "Controle e monitoramento de sistemas HVAC para otimizar consumo energético e conforto.",
                },
            ],
            usageEyebrow: "USO DO SOFTWARE",
            caseAriaLabel: "Caso",
            solutions: [
                "Conexão segura com PLCs/SCADAs legados, telemetria contínua e modelos preditivos no edge para antecipar falhas em tempo real.",
                "Camada unificada sobre BMS legados e sistemas de refrigeração. Telemetria sub-segundo e alertas preditivos de queda com IA.",
                "Telemetria agnóstica ao hardware sobre redes distribuídas. Monitoramento central com alertas antecipados de vazamentos e desempenho.",
                "Conectividade em nuvem sobre ativos isolados. Análises de eficiência energética e monitoramento contínuo de condição.",
                "Dados do chão de fábrica unificados com a TI. Rastreabilidade de variáveis e relatórios automáticos de KPIs.",
                "OEE em tempo real sobre linhas mistas. Integração multi-marca de PLCs e rastreabilidade por lote e turno.",
                "Controle supervisório de HVAC sobre equipamentos existentes. Otimização energética sem substituir infraestrutura.",
            ],
            usageScenarios: [
                {
                    title: "Plataformas e refinarias sem pausa operacional",
                    body: "A LogOS se conecta a PLCs e SCADAs existentes via OPC UA, Modbus e MQTT. Os operadores veem fluxos de poço, pressões e níveis em dashboards em tempo real. A IA detecta desvios precoces e dispara alertas em campo via WhatsApp ou rádio. Relatórios regulatórios são gerados automaticamente.",
                },
                {
                    title: "Visibilidade contínua de PUE, refrigeração e energia",
                    body: "A LogOS unifica BMS legados, UPS, chillers e sensores ambientais em uma única camada. Equipes de O&M monitoram PUE ao vivo, antecipam quedas com alertas preditivos e revisam tendências por sala. Cumpre políticas de segurança sem retirar dados do site.",
                },
                {
                    title: "Telemetria confiável sobre redes distribuídas",
                    body: "Conectamos sensores de vazão, pressão e qualidade de plantas e elevatórias dispersas. A LogOS consolida dados em uma visão central, alerta sobre vazamentos e transbordamentos, e gera relatórios operacionais automáticos. Continua funcionando mesmo com queda de conectividade pelo processamento no edge.",
                },
                {
                    title: "Ativos de geração conectados sem tocar no controle",
                    body: "A LogOS lê dados de geradores, transformadores e subestações em tempo real. Os analistas veem eficiência energética, preveem manutenções e recebem alertas operacionais. Integração não intrusiva sobre a infraestrutura existente, sem substituir o sistema de controle.",
                },
                {
                    title: "Rastreabilidade e KPIs de planta automatizados",
                    body: "Cada variável do chão de fábrica — temperatura, pH, dosagem, tempos de ciclo — é registrada e correlacionada na LogOS. Relatórios de qualidade e conformidade são gerados sozinhos. Alarmes inteligentes avisam antes que o lote saia de especificação.",
                },
                {
                    title: "OEE ao vivo sobre linhas mistas",
                    body: "A LogOS se comunica com PLCs de diferentes marcas, ERPs e MES. A equipe de manufatura vê OEE por linha, turno e máquina. Relatórios de eficiência e rastreabilidade de lotes são exportados automaticamente. Mudanças de receita e gargalos são detectados em minutos, não em auditorias.",
                },
                {
                    title: "HVAC supervisionado e otimizado remotamente",
                    body: "A LogOS se conecta a controladores HVAC existentes, sensores de temperatura, umidade e CO₂. Otimiza setpoints automaticamente, detecta consumo anômalo e permite controle remoto sobre múltiplos edifícios. A gestão energética se torna contínua e comparável entre sites.",
                },
            ],
        },
        pricing: {
            eyebrow: "INVESTIMENTO CLARO E ESCALÁVEL",
            titleStart: "Planos e",
            titleAccent: "Preços",
            description:
                "Transparência e escalabilidade. Nosso modelo combina a implantação inicial de infraestrutura com uma assinatura mensal adaptada à sua operação.",
            installationTitle: "Implantação Inicial",
            installationPrice: "Sob medida",
            installationSubtitle: "Estruturada conforme suas necessidades operacionais",
            installationDescription:
                "Implantação física da infraestrutura. Conectamos e digitalizamos os equipamentos já existentes na sua instalação com nossos painéis de dados.",
            installationButton: "Solicitar orçamento",
            installationFeatures: [
                "Hardware e dispositivos de medição incluídos.",
                "Integração completa com sistemas OT existentes.",
                "Licença inicial do software LogOS.",
                "Quantidade de painéis ajustada ao tamanho da infraestrutura.",
            ],
            subscriptionTitle: "Assinatura Operacional",
            subscriptionPrice: "A partir de $200",
            subscriptionPeriod: "/ mês",
            subscriptionSubtitle: "Assinatura operacional conforme sua infraestrutura",
            subscriptionDescription:
                "Acesso contínuo à plataforma LogOS para monitorar, analisar e gerenciar suas operações com segurança em um só lugar.",
            subscriptionButton: "Falar com vendas",
            subscriptionFeatures: [
                "Monitoramento em nuvem em tempo real.",
                "Sistema de alertas críticos.",
                "2 usuários ativos incluídos.",
                "6 meses de retenção de dados históricos.",
            ],
            modulesTitle: "Módulos Adicionais",
            modulesDescription:
                "Além da assinatura base, você pode ampliar o LogOS conforme as necessidades operacionais da sua infraestrutura. O sistema modular permite que cada implantação cresça progressivamente em capacidade e preço.",
            modules: [
                {
                    title: "Mensageria Avançada",
                    description:
                        "Integre alertas críticos com WhatsApp, Telegram ou canais corporativos para reduzir tempos de resposta.",
                },
                {
                    title: "Relatórios Automatizados",
                    description:
                        "Gere e envie relatórios recorrentes de desempenho, consumo de energia e KPIs diretamente para os tomadores de decisão.",
                },
                {
                    title: "Gêmeo Digital 3D",
                    description:
                        "Visualização imersiva da sua infraestrutura para localizar em tempo real o estado de válvulas, sensores e motores.",
                },
                {
                    title: "Maior Retenção de Dados",
                    description:
                        "Expanda o histórico de 6 meses para anos, construindo a base de dados necessária para análises preditivas e IA de longo prazo.",
                },
                {
                    title: "Usuários Adicionais",
                    description:
                        "Escalone o acesso à plataforma conforme sua equipe de operação e manutenção cresce, com funções e permissões por área.",
                },
                {
                    title: "Novos Dispositivos",
                    description:
                        "Integre mais sensores, PLCs de novos fabricantes, painéis adicionais ou outros ativos OT sem atrito.",
                },
            ],
        },
        privacy: {
            backHome: "Voltar ao início",
            title: "Política de Privacidade",
            contactIntro:
                "Se você tiver qualquer dúvida ou comentário sobre esta política de privacidade, fale conosco em:",
            sections: [
                {
                    title: "Responsabilidade pelo tratamento de dados",
                    content:
                        "A BYLOGOS SPA é responsável pela coleta, armazenamento, processamento e proteção dos dados obtidos por meio do software LogOS.",
                },
                {
                    title: "Tipos de dados coletados",
                    content: "A LogOS pode coletar e processar os seguintes dados:",
                    list: [
                        "Dados do usuário: nome, email, credenciais de acesso, funções e permissões.",
                        "Dados do cliente: informações da empresa, localização de plantas ou instalações e configuração dos sistemas elétricos.",
                        "Dados operacionais: consumo elétrico por dispositivo, registros de eventos e alarmes, além de informações de sensores e dispositivos conectados, como medições, estado e logs.",
                        "Dados de uso do software: interações com a plataforma, tempos de conexão, erros e eventos de desempenho.",
                    ],
                },
                {
                    title: "Finalidade do tratamento",
                    content: "Os dados coletados são utilizados para:",
                    list: [
                        "Monitoramento e análise do consumo elétrico em tempo real.",
                        "Otimização de processos industriais por meio de IA e algoritmos de NILM.",
                        "Relatórios personalizados e alertas operacionais.",
                        "Segurança, auditoria e prevenção de acessos não autorizados.",
                        "Melhoria do software e suporte técnico.",
                    ],
                },
                {
                    title: "Base legal do tratamento",
                    content: "O tratamento de dados baseia-se em:",
                    list: [
                        "Consentimento explícito do usuário ou do representante legal da empresa.",
                        "Cumprimento de obrigações contratuais e legais aplicáveis.",
                        "Interesse legítimo da LogOS em manter a operação, a segurança e a melhoria contínua do software.",
                    ],
                },
                {
                    title: "Compartilhamento e transferência de dados",
                    content: [
                        "A LogOS não venderá nem compartilhará dados com terceiros sem consentimento explícito, exceto quando exigido por lei.",
                        "Os dados podem ser transferidos a prestadores de serviço sob acordos equivalentes de confidencialidade e segurança.",
                        "Para clientes com múltiplas instalações, os dados podem ser processados localmente em dispositivos de edge computing e armazenados em servidores para garantir backup e segurança.",
                    ],
                },
                {
                    title: "Segurança dos dados",
                    content: [
                        "Todos os dados são armazenados com segurança, usando criptografia em trânsito e em repouso.",
                        "O acesso administrativo é limitado por autenticação forte e controles de permissão.",
                        "Medidas de monitoramento de integridade, detecção de intrusão e backup local são aplicadas às informações críticas.",
                    ],
                },
                {
                    title: "Retenção de dados",
                    content: [
                        "Os dados operacionais são armazenados enquanto forem necessários para fins operacionais, analíticos e de conformidade legal.",
                        "Os dados pessoais são mantidos até que o usuário solicite sua exclusão ou retire o consentimento.",
                    ],
                },
                {
                    title: "Direitos dos usuários",
                    content: "Os usuários têm o direito de:",
                    list: [
                        "Acessar seus dados pessoais e operacionais.",
                        "Corrigir informações incorretas ou incompletas.",
                        "Excluir seus dados pessoais a qualquer momento.",
                        "Retirar seu consentimento a qualquer momento.",
                        "Receber uma cópia legível de seus dados pessoais.",
                    ],
                },
                {
                    title: "Alterações na política",
                    content:
                        "A LogOS reserva-se o direito de modificar esta política de privacidade a qualquer momento. As alterações serão publicadas nesta página e entrarão em vigor imediatamente após a publicação.",
                },
                { title: "Contato" },
            ],
        },
        terms: {
            backHome: "Voltar ao início",
            title: "Termos e Condições",
            contactIntro: "Dúvidas sobre estes Termos podem ser enviadas para:",
            sections: [
                {
                    title: "Aceitação dos Termos",
                    content:
                        "Ao utilizar o software LogOS desenvolvido pela BYLOGOS SPA, o usuário aceita integralmente estes Termos e Condições. Caso não concorde, não deverá utilizar a plataforma nem os serviços relacionados.",
                },
                {
                    title: "Licença de Uso",
                    list: [
                        "A LogOS concede ao usuário uma licença limitada, não exclusiva e intransferível para utilizar o software de acordo com estes Termos.",
                        "O software e todos os seus componentes, incluindo algoritmos de IA, interfaces, documentação e dados gerados, são propriedade exclusiva da BYLOGOS SPA.",
                        "É proibido copiar, modificar, distribuir ou sublicenciar o software sem autorização explícita da BYLOGOS SPA.",
                    ],
                },
                {
                    title: "Uso do Software",
                    list: [
                        "O usuário compromete-se a utilizar o LogOS apenas para fins legais e de acordo com as instruções operacionais.",
                        "É proibido interferir no funcionamento do LogOS, tentar acessar sistemas não autorizados ou manipular dados de terceiros.",
                        "A execução do LogOS em ambientes de edge computing garante que os dados permaneçam locais; qualquer transferência de informações seguirá a política de privacidade vigente.",
                    ],
                },
                {
                    title: "Responsabilidade e Garantias",
                    list: [
                        "O LogOS é fornecido “como está” e não garante resultados específicos de otimização do consumo elétrico ou previsões de IA.",
                        "A BYLOGOS SPA não será responsável por danos diretos, indiretos, incidentais, consequenciais ou perdas decorrentes do uso do software.",
                        "O usuário é responsável por implementar medidas adicionais de segurança conforme seu contexto industrial e legal.",
                    ],
                },
                {
                    title: "Atualizações e Modificações",
                    list: [
                        "A BYLOGOS SPA pode atualizar o LogOS a qualquer momento, incluindo novos recursos, melhorias de segurança e correções de bugs.",
                        "O usuário aceita que as atualizações possam ser aplicadas automaticamente e sem aviso prévio.",
                    ],
                },
                {
                    title: "Propriedade Intelectual",
                    list: [
                        "Todos os direitos de propriedade intelectual relacionados ao LogOS, seus algoritmos, interfaces gráficas, documentação e conteúdo gerado por IA pertencem exclusivamente à BYLOGOS SPA.",
                        "O uso não autorizado, a reprodução, distribuição ou engenharia reversa de qualquer componente é proibido.",
                    ],
                },
                {
                    title: "Rescisão",
                    list: [
                        "A BYLOGOS SPA pode suspender ou cancelar o acesso ao software em caso de descumprimento destes Termos.",
                        "Após a rescisão, o usuário deverá excluir todas as cópias do software e quaisquer dados derivados, salvo quando a retenção for exigida por lei.",
                    ],
                },
                { title: "Contato" },
            ],
        },
        notFound: {
            badge: "Página não encontrada",
            title: "Página",
            titleAccent: "não encontrada",
            description: "A rota solicitada não existe. Verifique a URL ou use os links de navegação abaixo.",
            diagnosticsTitle: "Diagnóstico do sistema",
            recoveryTitle: "Recuperação",
            recoveryDescription: "Escolha uma das opções abaixo para continuar navegando.",
            goHome: "Voltar ao início",
            reviewUrl: "Revisar a URL",
            newsletter: "Newsletter",
            reviewAction: "Revisar",
            subscribeAction: "Assinar",
            previousPage: "Página anterior",
            platformLabel: "Plataforma • Disponibilidade: 99,9%",
            servicesActive: "Serviços ativos",
            edgeConnected: "Conectado ao edge",
            supportLabel: "Suporte técnico:",
            suggestions: [
                {
                    title: "Voltar ao início",
                    description: "Retorne à página principal da LogOS.",
                    action: "Ir para início",
                    href: "/",
                },
                {
                    title: "Revisar a URL",
                    description: "Confira o endereço que você está tentando acessar.",
                    action: "Revisar",
                },
                {
                    title: "Newsletter",
                    description: "Assine para acompanhar nossas últimas novidades.",
                    action: "Assinar",
                    href: "#newsletter",
                },
            ],
            diagnostics: [
                { label: "HTTP Status", value: "404", status: "error" },
                { label: "Conexão", value: "Ativa", status: "success" },
                { label: "Protocolo", value: "HTTPS", status: "success" },
                { label: "Tempo de resposta", value: "45ms", status: "success" },
            ],
        },
        platform: {
            heroEyebrow: "PLATAFORMA",
            heroTitleStart: "Uma plataforma para",
            heroTitleAccent: "operar sua indústria",
            heroDescription:
                "A LogOS unifica monitoramento, controle, IA e gêmeos digitais sobre sua infraestrutura existente. Software modular que se adapta à sua operação, e não o contrário.",
            heroCtaPrimary: "Solicitar demonstração",
            heroCtaSecondary: "Ver casos de uso",
            modulesTitle: "Módulos do software",
            modulesDescription:
                "Combine os módulos que precisa. Cada um roda sobre a mesma camada edge e compartilha dados, alertas e contexto.",
            modules: [
                {
                    title: "Monitoramento em tempo real",
                    description: "Visualize variáveis elétricas, mecânicas e de processo com latência sub-segundo em qualquer dispositivo.",
                },
                {
                    title: "Diagramas unifilares",
                    description: "Esquemas interativos que refletem o estado da planta em tempo real e permitem navegar a instalação como um mapa vivo.",
                },
                {
                    title: "Registro histórico",
                    description: "Acesso completo a séries temporais com análise de tendências, comparação de períodos e exportação.",
                },
                {
                    title: "Alarmes inteligentes",
                    description: "Regras, eventos e previsões com IA para antecipar falhas e direcionar notificações para a pessoa certa.",
                },
                {
                    title: "Integrações",
                    description: "WhatsApp, Telegram, e-mail e APIs abertas. A operação chega à sua equipe sem precisar abrir um dashboard.",
                },
                {
                    title: "Relatórios automáticos",
                    description: "Relatórios técnicos e executivos gerados sozinhos, prontos para auditoria e para a diretoria.",
                },
                {
                    title: "Assistente de IA",
                    description: "Copiloto treinado na sua operação: responde sobre cargas, falhas e comportamento histórico em linguagem natural.",
                },
                {
                    title: "Gêmeo digital",
                    description: "Réplica funcional da sua planta para simular cenários, ensaiar mudanças e validar decisões antes do campo.",
                },
                {
                    title: "Acesso multi-dispositivo",
                    description: "Informação sincronizada entre web e mobile, com permissões granulares por planta, área e função.",
                },
            ],
            architectureTitle: "Edge primeiro, cloud quando importa",
            architectureDescription:
                "Processamos os dados onde são gerados. Sua informação operacional permanece na planta e só viaja o que você decide expor.",
            architecturePoints: [
                "Latência local sub-segundo para controle e alarmes críticos.",
                "Conformidade com políticas de segurança industrial e regulações locais.",
                "Sem dependência de internet para manter a planta operando.",
            ],
            ctaTitle: "Pronto para ver na sua planta?",
            ctaDescription: "Mostramos a LogOS rodando em um caso real semelhante ao seu em menos de 30 minutos.",
            ctaButton: "Agendar demonstração técnica",
            process: {
                eyebrow: "COMO FUNCIONA",
                title: "Como é o processo de integração",
                sub: "Três passos para levar sua planta legacy à operação com LogOS.",
                steps: [
                    {
                        title: "Diagnóstico operacional",
                        body: "Visitamos sua planta, mapeamos PLCs, SCADAs e protocolos em uso. Definimos pontos críticos de monitoramento, controle e relatório sem mexer no que já funciona.",
                        items: ["Levantamento OT", "Mapeamento de protocolos", "Plano de implantação"],
                    },
                    {
                        title: "Implantação no Edge",
                        body: "Instalamos a LogOS sobre hardware industrial certificado. Conectamos OPC UA, Modbus, MQTT e APIs internas. Validamos telemetria no local antes de produção.",
                        items: ["Hardware turnkey", "Integração não intrusiva", "Validação no local"],
                    },
                    {
                        title: "Operação com IA",
                        body: "Ativamos dashboards, alarmes preditivos, relatórios automáticos e o copiloto de IA. Sua equipe opera com visibilidade total e suporte contínuo de engenharia.",
                        items: ["Dashboards em tempo real", "Alarmes preditivos", "Assistente de IA"],
                    },
                ],
                ctaHint: "Fim do processo →",
            },
            why: {
                eyebrow: "FUNDAMENTOS",
                title: "Por que LogOS?",
                sub: "Três razões pelas quais a indústria escolhe LogOS em vez de stacks tradicionais.",
                edge: {
                    eyebrow: "EDGE / CLOUD",
                    title: "Por que Edge Computing?",
                    sub: "O controle não pode depender da internet. A LogOS roda primeiro no edge, não na nuvem.",
                    onPremTitle: "LogOS · Edge primeiro",
                    onPremTag: "ON-PREMISE",
                    onPremPoints: [
                        "Latência sub-segundo para controle e alarmes críticos",
                        "Seus dados operacionais ficam na planta",
                        "Funciona mesmo sem internet",
                        "Alinhado a políticas de segurança industrial",
                    ],
                    cloudTitle: "Cloud-only tradicional",
                    cloudTag: "DEPENDENTE",
                    cloudPoints: [
                        "Latência atrelada à banda",
                        "Dados sensíveis saem da rede",
                        "Sem internet, planta cega",
                        "Custo e throughput escalam com tráfego",
                    ],
                },
                allInOne: {
                    eyebrow: "PLATAFORMA UNIFICADA",
                    title: "Tudo em uma só plataforma",
                    sub: "SCADA, gêmeo digital, monitoramento e controle convivem na LogOS. Sem silos, sem integrações quebradas.",
                    hubLabel: "LogOS",
                    silos: [
                        { label: "SCADA", note: "Supervisão e controle" },
                        { label: "Gêmeo digital", note: "Réplica funcional" },
                        { label: "Monitoramento", note: "Telemetria e KPIs" },
                        { label: "Alarmes + IA", note: "Preditivo e reativo" },
                    ],
                    outcomeLabel: "RESULTADO",
                    outcome: "Uma única fonte de verdade para sua operação. Zero atrito entre dado, decisão e ação.",
                },
                comparison: {
                    eyebrow: "ANTES E DEPOIS",
                    title: "O que muda com LogOS",
                    beforeLabel: "ANTES",
                    afterLabel: "COM LogOS",
                    rows: [
                        { topic: "Visibilidade", before: "Relatórios manuais semanais", after: "Dashboards em tempo real" },
                        { topic: "Resposta a falhas", before: "Detecção pós-evento", after: "Alertas preditivos com IA" },
                        { topic: "Integração", before: "Silos por marca e protocolo", after: "Uma camada sobre PLCs, SCADA e MQTT" },
                        { topic: "Relatórios", before: "Horas-homem repetitivas", after: "Relatórios automáticos auditáveis" },
                        { topic: "Escala", before: "Re-cabeamento a cada mudança", after: "Software-defined, deploy remoto" },
                    ],
                },
            },
        },
        partners: {
            heroEyebrow: "PARTNERS",
            heroTitleStart: "Vamos juntos",
            heroTitleAccent: "modernizar a indústria",
            heroDescription:
                "Não é um programa fechado nem um conjunto fixo de tiers. É um convite aberto a integradores, consultorias e EPCs que queiram somar a LogOS ao que já oferecem. Conversamos, encontramos formas de colaborar e construímos a partir daí.",
            heroCta: "Vamos conversar",
            benefitsTitle: "Como costumamos colaborar",
            benefitsSub: "São ideias, não obrigações. Cada partner termina com um acordo distinto conforme o que faz mais sentido para sua operação e seus clientes.",
            benefits: [
                {
                    title: "Habilitação para instalar",
                    description: "Capacitamos seu time para que você mesmo instale e configure a LogOS em planta. Não é um curso formal: trabalhamos lado a lado até que o deploy flua para você.",
                },
                {
                    title: "Editor habilitado",
                    description: "Habilitamos seu acesso ao editor para que você integre a LogOS dentro das soluções que já vende. Seu produto, sua marca, nossa camada por baixo.",
                },
                {
                    title: "Projetos compartilhados",
                    description: "Levantamos casos juntos. Negociamos por projeto quem entrega o quê: engenharia, execução, suporte — o que fizer sentido.",
                },
                {
                    title: "Contribuição real à indústria",
                    description: "O espírito do programa: cada planta que digitalizamos com um partner é uma operação mais eficiente, mais segura e com menos horas-homem desperdiçadas.",
                },
                {
                    title: "Preço de partner",
                    description: "Trabalhar conosco significa acessar preços diferentes do mercado aberto. A conversa é direta e baseada em contexto.",
                },
                {
                    title: "Painel para partners (opcional)",
                    description: "Acesso a alarmes e um dashboard com recomendações por cliente: que manutenção oferecer, quais ativos estão em risco, quais upgrades fazem sentido. Add-on à parte que conversamos no contato.",
                },
            ],
            ideasTitle: "Algumas ideias de como poderíamos trabalhar",
            ideasSub: "Dependendo de como seu time opera, isso pode tomar formas bem diferentes. Pontos de partida, não trilhos.",
            ideas: [
                "Somar a LogOS como camada de monitoramento dentro de projetos de automação que você já está vendendo.",
                "Estruturar uma oferta de manutenção preditiva apoiada em alarmes e dashboards da LogOS.",
                "Oferecer hardware industrial certificado pré-instalado aos seus clientes, com a LogOS pronta para rodar.",
                "Levar a LogOS a uma vertical específica em que seu time já tem relacionamento e profundidade.",
                "Construir uma integração própria sobre nossas APIs para estender o que a LogOS faz nativamente.",
            ],
            ctaTitle: "Vamos conversar, sem compromisso",
            ctaDescription: "Não há formulário formal de partner. Conte-nos o que você faz e quais clientes atende, e a partir daí vemos o que faz sentido para os dois lados.",
            ctaButton: "Vamos conversar",
        },
        contact: {
            heroEyebrow: "CONTATO",
            heroTitle: "Vamos conversar",
            heroDescription:
                "Demonstração, parceria, imprensa ou só curiosidade técnica. Escreva e respondemos em até um dia útil.",
            form: {
                firstNameLabel: "NOME",
                lastNameLabel: "SOBRENOME",
                emailLabel: "EMAIL",
                companyLabel: "EMPRESA",
                reasonLabel: "MOTIVO DO CONTATO",
                reasonPlaceholder: "Selecione um motivo",
                commentLabel: "COMENTÁRIO",
                firstNamePlaceholder: "Seu nome",
                lastNamePlaceholder: "Seu sobrenome",
                emailPlaceholder: "email@empresa.com",
                companyPlaceholder: "Nome da empresa",
                commentPlaceholder: "Algo que devemos saber?",
                reasonOptions: [
                    { value: "PARTNERSHIP", label: "PARCERIA" },
                    { value: "DEMO", label: "DEMO" },
                    { value: "CUSTOMER", label: "CLIENTE" },
                    { value: "PRESS", label: "IMPRENSA" },
                    { value: "INVESTOR", label: "INVESTIDOR" },
                    { value: "GENERAL", label: "GERAL" },
                    { value: "OTHER", label: "OUTRO" },
                ],
                submit: "Enviar mensagem",
                submitting: "Enviando...",
                successTitle: "Mensagem enviada",
                successDescription: "Recebemos sua mensagem. Entraremos em contato em breve.",
                errorTitle: "Não foi possível enviar a mensagem",
                errorDescription: "Tente novamente em alguns minutos ou escreva diretamente para contact@bylogos.io.",
                requiredError: "Este campo é obrigatório.",
                emailError: "Informe um e-mail válido.",
            },
            altContactTitle: "Outros canais",
            altContactDescription:
                "Se preferir e-mail direto, escreva para contact@bylogos.io. Para suporte técnico de clientes ativos, use o canal dedicado dentro da plataforma.",
        },
    },
};

export function resolveAppLocale(locale: string): AppLocale {
    if (locale === "en" || locale === "pt") {
        return locale;
    }

    return "es";
}

export function getSiteContent(locale: string) {
    return siteContent[resolveAppLocale(locale)];
}
