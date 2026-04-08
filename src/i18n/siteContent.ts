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
                title: "Manifiesto",
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
                {
                    label: "Industrias",
                    href: "/industries",
                    submenu: [
                        { label: "Petróleo y Gas", href: "/industries#petroleo-y-gas", description: "Extracción" },
                        {
                            label: "Aguas y Saneamiento",
                            href: "/industries#aguas-y-saneamiento",
                            description: "Tratamiento",
                        },
                        { label: "Energía", href: "/industries#energia", description: "Generación" },
                        {
                            label: "Alimentos y Bebidas",
                            href: "/industries#alimentos-y-bebidas",
                            description: "Producción",
                        },
                    ],
                },
                { label: "Planes y Precios", href: "/pricing" },
                { label: "Manifiesto", href: "/about" },
                { label: "Noticias", href: "/news" },
            ],
        },
        footer: {
            tagline: "Revoluciona infraestructura industrial en tiempo real.",
            protocolsTitle: "Protocolos soportados",
            directContactTitle: "Contacto directo",
            contactButton: "Solicitar demo técnica",
            copyright: "© {year} LogOS SCADA. Todos los derechos reservados.",
            privacy: "Política de privacidad",
            terms: "Términos de servicio",
            contactInfoLabel: "Email técnico",
            protocols: ["Modbus RTU/TCP", "OPC UA (DA, AC, HDA)", "MQTT / MQTT-SN"],
        },
        home: {
            hero: {
                title: "La mejor integración de IA para el IoT Industrial",
                subtitle: "PROCESOS INTELIGENTES, INDUSTRIA EFICIENTE.",
            },
            clientsMarqueeLabel: "Confían en nosotros",
            demoVideo: {
                label: "ESTÁ ACÁ",
                title: "Mira cómo funciona",
                brand: "LogOS",
                description:
                    "Revisa el flujo completo de monitoreo, visualización y operación asistida por IA desde una sola plataforma.",
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
                titleStart: "Hardware",
                titleAccent: "Industrial",
                description:
                    "Soluciones de hardware especializadas de Seeed Studio, optimizadas para ejecutar LogOS en entornos industriales exigentes con la mayor estabilidad.",
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
        },
        about: {
            heroTitle: "¿Por qué LogOS?",
            paragraphs: [
                "Estamos cerrando la brecha entre el IT y el OT en la infraestructura industrial que sostiene el mundo moderno. La industria opera con PLCs y sistemas legacy que no permiten la recolección, el análisis de datos ni la correcta implementación de la IA. LogOS conecta este entorno para entregar monitoreo, predicción y análisis operativo en tiempo real respecto a los datos aprovechados de campo, aplicando herramientas digitales en entornos analógicos. Entregamos herramientas modernas al O&M, aumentando considerablemente la productividad.",
                "Entendemos el desafío y temor a probar nuevas tecnologías en áreas críticas; por eso creamos LogOS, operando desde Hispanoamérica, como una solución amigable que se integra fácilmente a tu infraestructura sin interrumpir lo que funciona. Aportamos lo necesario para que la industria se atreva a dar el salto hacia la IA.",
            ],
            foundersTitle: "Nuestros fundadores",
            founders: [{ role: "Co-Founder & President" }, { role: "Co-Founder & CEO / CTO" }],
        },
        industries: {
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
        chat: {
            statusOnline: "En línea ahora",
            bubblePrompt: "¿En qué puedo ayudarte?",
            welcomeTitle: "¡Hola! Soy el asistente de LogOS.",
            welcomeSubtitle: "Pregúntame sobre IoT Industrial, SCADA o cómo modernizar tu infraestructura.",
            inputPlaceholder: "Escribe un mensaje...",
            footerNote: "LogOS AI • Estamos para ayudarte",
            pageBackHome: "Volver al inicio",
            pageAgentLabel: "Agente Inteligente",
            pageWelcomeTitle: "Bienvenido a",
            pageWelcomeSubtitle:
                "Soy tu experto en infraestructura IT/OT y automatización industrial. ¿En qué puedo ayudarte hoy?",
            pageInputPlaceholder: "Describe tu duda o proyecto industrial...",
            pageDisclaimer: "CONSTRUIDO POR LOGOS • LA IA PUEDE COMETER ERRORES",
            widgetStatusOnline: "En línea",
            widgetFullscreen: "Pantalla completa",
            widgetClose: "Cerrar chat",
            widgetWelcomeTitle: "Hola! Soy el asistente de LogOS.",
            widgetWelcomeSubtitle: "Pregúntame sobre funcionalidades, protocolos o monitoreo.",
            widgetInputPlaceholder: "Escribe un mensaje...",
            widgetDisclaimer: "IA puede cometer errores.",
            widgetOpenAriaLabel: "Abrir chat de asistencia",
            sendMessageAriaLabel: "Enviar mensaje",
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
                title: "Manifesto",
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
                {
                    label: "Industries",
                    href: "/industries",
                    submenu: [
                        { label: "Oil & Gas", href: "/industries#petroleo-y-gas", description: "Extraction" },
                        {
                            label: "Water & Sanitation",
                            href: "/industries#aguas-y-saneamiento",
                            description: "Treatment",
                        },
                        { label: "Energy", href: "/industries#energia", description: "Generation" },
                        {
                            label: "Food & Beverage",
                            href: "/industries#alimentos-y-bebidas",
                            description: "Production",
                        },
                    ],
                },
                { label: "Plans & Pricing", href: "/pricing" },
                { label: "Manifesto", href: "/about" },
                { label: "News", href: "/news" },
            ],
        },
        footer: {
            tagline: "Transform industrial infrastructure in real time.",
            protocolsTitle: "Supported protocols",
            directContactTitle: "Direct contact",
            contactButton: "Request a technical demo",
            copyright: "© {year} LogOS SCADA. All rights reserved.",
            privacy: "Privacy policy",
            terms: "Terms of service",
            contactInfoLabel: "Technical email",
            protocols: ["Modbus RTU/TCP", "OPC UA (DA, AC, HDA)", "MQTT / MQTT-SN"],
        },
        home: {
            hero: {
                title: "The smartest AI integration for the Industrial IoT",
                subtitle: "SMART PROCESSES, EFFICIENT INDUSTRY.",
            },
            clientsMarqueeLabel: "Trusted by industry leaders",
            demoVideo: {
                label: "WATCH IT",
                title: "See how",
                brand: "LogOS works",
                description:
                    "Explore the full monitoring, visualization, and AI-assisted operations flow from a single platform.",
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
                titleStart: "Industrial",
                titleAccent: "Hardware",
                description:
                    "Specialized Seeed Studio hardware solutions optimized to run LogOS reliably in demanding industrial environments.",
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
        },
        about: {
            heroTitle: "Why LogOS?",
            paragraphs: [
                "We are closing the gap between IT and OT across the industrial infrastructure that supports the modern world. Industry still relies on PLCs and legacy systems that do not enable data collection, analytics, or proper AI adoption. LogOS connects that environment to deliver real-time monitoring, prediction, and operational analysis from field data, bringing digital tools into analog environments. We put modern tools in the hands of O&M teams and significantly increase productivity.",
                "We understand the challenge and hesitation that comes with trying new technologies in critical environments. That is why we created LogOS from Latin America as a friendly solution that integrates easily into your infrastructure without disrupting what already works. We provide what industry needs to confidently take the leap into AI.",
            ],
            foundersTitle: "Our founders",
            founders: [{ role: "Co-Founder & President" }, { role: "Co-Founder & CEO / CTO" }],
        },
        industries: {
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
        chat: {
            statusOnline: "Online now",
            bubblePrompt: "How can I help you?",
            welcomeTitle: "Hi! I'm the LogOS assistant.",
            welcomeSubtitle: "Ask me about Industrial IoT, SCADA, or how to modernize your infrastructure.",
            inputPlaceholder: "Type a message...",
            footerNote: "LogOS AI • Here to help",
            pageBackHome: "Back to home",
            pageAgentLabel: "Intelligent Agent",
            pageWelcomeTitle: "Welcome to",
            pageWelcomeSubtitle:
                "I’m your expert in IT/OT infrastructure and industrial automation. How can I help you today?",
            pageInputPlaceholder: "Describe your industrial question or project...",
            pageDisclaimer: "BUILT BY LOGOS • AI CAN MAKE MISTAKES",
            widgetStatusOnline: "Online",
            widgetFullscreen: "Fullscreen",
            widgetClose: "Close chat",
            widgetWelcomeTitle: "Hi! I'm the LogOS assistant.",
            widgetWelcomeSubtitle: "Ask me about features, protocols, or monitoring.",
            widgetInputPlaceholder: "Type a message...",
            widgetDisclaimer: "AI can make mistakes.",
            widgetOpenAriaLabel: "Open support chat",
            sendMessageAriaLabel: "Send message",
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
                title: "Manifesto",
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
                {
                    label: "Indústrias",
                    href: "/industries",
                    submenu: [
                        { label: "Petróleo e Gás", href: "/industries#petroleo-y-gas", description: "Extração" },
                        {
                            label: "Água e Saneamento",
                            href: "/industries#aguas-y-saneamiento",
                            description: "Tratamento",
                        },
                        { label: "Energia", href: "/industries#energia", description: "Geração" },
                        {
                            label: "Alimentos e Bebidas",
                            href: "/industries#alimentos-y-bebidas",
                            description: "Produção",
                        },
                    ],
                },
                { label: "Planos e Preços", href: "/pricing" },
                { label: "Manifesto", href: "/about" },
                { label: "Notícias", href: "/news" },
            ],
        },
        footer: {
            tagline: "Transforme a infraestrutura industrial em tempo real.",
            protocolsTitle: "Protocolos suportados",
            directContactTitle: "Contato direto",
            contactButton: "Solicitar demonstração técnica",
            copyright: "© {year} LogOS SCADA. Todos os direitos reservados.",
            privacy: "Política de privacidade",
            terms: "Termos de serviço",
            contactInfoLabel: "Email técnico",
            protocols: ["Modbus RTU/TCP", "OPC UA (DA, AC, HDA)", "MQTT / MQTT-SN"],
        },
        home: {
            hero: {
                title: "A integração de IA mais inteligente para o IoT Industrial",
                subtitle: "PROCESSOS INTELIGENTES, INDÚSTRIA EFICIENTE.",
            },
            clientsMarqueeLabel: "Confiam em nós",
            demoVideo: {
                label: "VEJA AQUI",
                title: "Veja como o",
                brand: "LogOS funciona",
                description:
                    "Explore todo o fluxo de monitoramento, visualização e operação assistida por IA em uma única plataforma.",
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
                titleStart: "Hardware",
                titleAccent: "Industrial",
                description:
                    "Soluções especializadas de hardware da Seeed Studio, otimizadas para executar o LogOS com confiabilidade em ambientes industriais exigentes.",
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
        },
        about: {
            heroTitle: "Por que LogOS?",
            paragraphs: [
                "Estamos fechando a lacuna entre TI e TO na infraestrutura industrial que sustenta o mundo moderno. A indústria ainda opera com PLCs e sistemas legados que não permitem coleta de dados, análise ou adoção correta de IA. A LogOS conecta esse ambiente para entregar monitoramento, previsão e análise operacional em tempo real a partir de dados de campo, levando ferramentas digitais para ambientes analógicos. Colocamos ferramentas modernas nas mãos das equipes de O&M e aumentamos significativamente a produtividade.",
                "Entendemos o desafio e a hesitação em testar novas tecnologias em áreas críticas. Por isso criamos a LogOS, operando a partir da Hispano-América, como uma solução amigável que se integra facilmente à sua infraestrutura sem interromper o que já funciona. Entregamos o necessário para que a indústria dê o salto para a IA com confiança.",
            ],
            foundersTitle: "Nossos fundadores",
            founders: [{ role: "Co-Founder & President" }, { role: "Co-Founder & CEO / CTO" }],
        },
        industries: {
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
        chat: {
            statusOnline: "Online agora",
            bubblePrompt: "Como posso ajudar você?",
            welcomeTitle: "Olá! Sou o assistente da LogOS.",
            welcomeSubtitle: "Pergunte sobre IoT Industrial, SCADA ou como modernizar sua infraestrutura.",
            inputPlaceholder: "Escreva uma mensagem...",
            footerNote: "LogOS AI • Estamos aqui para ajudar",
            pageBackHome: "Voltar ao início",
            pageAgentLabel: "Agente Inteligente",
            pageWelcomeTitle: "Bem-vindo à",
            pageWelcomeSubtitle:
                "Sou seu especialista em infraestrutura TI/TO e automação industrial. Como posso ajudar você hoje?",
            pageInputPlaceholder: "Descreva sua dúvida ou projeto industrial...",
            pageDisclaimer: "CRIADO PELA LOGOS • A IA PODE COMETER ERROS",
            widgetStatusOnline: "Online",
            widgetFullscreen: "Tela cheia",
            widgetClose: "Fechar chat",
            widgetWelcomeTitle: "Olá! Sou o assistente da LogOS.",
            widgetWelcomeSubtitle: "Pergunte sobre funcionalidades, protocolos ou monitoramento.",
            widgetInputPlaceholder: "Escreva uma mensagem...",
            widgetDisclaimer: "A IA pode cometer erros.",
            widgetOpenAriaLabel: "Abrir chat de suporte",
            sendMessageAriaLabel: "Enviar mensagem",
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
