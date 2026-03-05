export const INDUSTRY_CARDS_DATA = [
    {
        tag: "Oil & Gas",
        title: "Petróleo y Gas",
        description: "Monitoreo de activos críticos y detección temprana de fallas en entornos de alta presión.",
        points: ["SCADA en la nube", "IA de mantenimiento predictivo", "Control de fugas"],
        image: "/industries/oilgas.png",
    },
    {
        tag: "Data Centers",
        title: "Centros de Datos",
        description:
            "Supervisión continua de infraestructura crítica para garantizar disponibilidad y eficiencia operativa.",
        points: ["Monitoreo de servidores 24/7", "Monitorización de cooling y PUE", "Alertas de uptime en tiempo real"],
        image: "/industries/oilgas.png", // Fallback to oilgas as datacenter isn't in public/industries
    },
    {
        tag: "Water",
        title: "Aguas",
        description: "Gestión inteligente del ciclo del agua para plantas de tratamiento y desalinización.",
        points: ["Control de pH y químicos", "Optimización de bombeo", "Alertas hidrológicas"],
        image: "/industries/water.png",
    },
    {
        tag: "Power",
        title: "Energía",
        description: "Distribución eficiente y almacenamiento optimizado para plantas de energía renovable.",
        points: ["Balance de carga real", "Integración FV e Hidro", "Monitoreo térmico"],
        image: "/industries/energy.png",
    },
    {
        tag: "Food & Beverage",
        title: "Alimentos y Bebidas",
        description: "Trazabilidad completa y control microbiológico automatizado en líneas de procesamiento.",
        points: ["Control de frío 24/7", "Cumplimiento ISO 22000", "Dashboards KPI"],
        image: "/industries/foodbeverage.png",
    },
];

export const INDUSTRY_SLIDER_DATA = [
    {
        title: "Petróleo y Gas",
        subtitle: "Oil & Gas",
        description: "Optimización de procesos y monitoreo en tiempo real para la extracción y refinamiento.",
        image: "/industries/oilgas.png",
    },
    {
        title: "Datos",
        subtitle: "Data Centers",
        description:
            "Supervisión continua de infraestructura crítica para garantizar disponibilidad y eficiencia operativa.",
        image: "/industries/oilgas.png",
    },
    {
        title: "Aguas",
        subtitle: "Water",
        description: "Tratamiento de recursos y gestión crítica de sistemas hídricos.",
        image: "/industries/water.png",
    },
    {
        title: "Energía",
        subtitle: "Power",
        description: "Gestión inteligente de redes eléctricas y fuentes de energía renovables.",
        image: "/industries/energy.png",
    },
    {
        title: "Producción",
        subtitle: "Food & Beverage",
        description: "Control de calidad y automatización en líneas de producción masiva.",
        image: "/industries/foodbeverage.png",
    },
];
