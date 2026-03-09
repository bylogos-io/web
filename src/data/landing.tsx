// MUI Icons
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import FactoryIcon from "@mui/icons-material/Factory";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import HubIcon from "@mui/icons-material/Hub";

// Images
import reterminalImage from "@public/assets/hardware-alternatives/reterminal.png";
import recomputerImage from "@public/assets/hardware-alternatives/recomputer.png";
import recomputeraiImage from "@public/assets/hardware-alternatives/recomputerai.png";

// Features Data
export const FEATURES_DATA = [
    {
        icon: InsightsOutlinedIcon,
        title: "Monitoreo",
        description: "Supervisión en tiempo real de todos los parámetros eléctricos con latencia menor a 1 segundo.",
        color: "primary.main",
    },
    {
        icon: ElectricBoltOutlinedIcon,
        title: "Diagramas Unilineales",
        description: "Esquemas interactivos con representación dinámica del estado de la instalación.",
        color: "primary.main",
    },
    {
        icon: StorageOutlinedIcon,
        title: "Registro de datos",
        description: "Acceso histórico completo a registros pasados con análisis de tendencias y patrones.",
        color: "primary.main",
    },
    {
        icon: ErrorOutlineOutlinedIcon,
        title: "Alarmas inteligentes",
        description: "Alarmas en base a eventos y predicciones para prevención de fallas.",
        color: "primary.main",
    },
    {
        icon: HubIcon,
        title: "Integraciones",
        description:
            "Mantente cerca de tu operación con integraciones de mensajería en tiempo real con WhatsApp, Telegram, Gmail y más.",
        color: "primary.main",
    },
    {
        icon: DescriptionOutlinedIcon,
        title: "Reportes Automáticos",
        description: "Generación de reportes de consumo automáticos con información detallada del estado.",
        color: "primary.main",
    },
    {
        icon: SmartToyOutlinedIcon,
        title: "Inteligencia Artificial",
        description: "Asistente inteligente para un mejor análisis de cargas.",
        color: "primary.main",
    },
    {
        icon: Inventory2OutlinedIcon,
        title: "Gemelo Digital",
        description: "Representa tu proceso en el mundo digital con una copia exacta de tu instalación.",
        color: "primary.main",
    },
    {
        icon: CloudOutlinedIcon,
        title: "Acceso dondequiera que estés",
        description:
            "Toda tu información sincronizada y disponible desde cualquier dispositivo, sin importar dónde te encuentres.",
        color: "primary.main",
    },
];

// Hardware Alternatives Data
export const HARDWARE_OPTIONS = [
    {
        name: "ReTerminal DM",
        subtitle: "Panel de Control Interactivo",
        image: reterminalImage.src,
        description:
            "Terminal industrial con pantalla táctil integrada para control directo y visualización en tiempo real con sistema LogOS pre-instalado.",
        features: [
            { icon: MonitorOutlinedIcon, text: 'Pantalla táctil 10.1"' },
            { icon: VideocamOutlinedIcon, text: "Cámara integrada" },
            { icon: WifiOutlinedIcon, text: "WiFi 6 + Bluetooth 5.0" },
            { icon: ElectricBoltOutlinedIcon, text: "PoE+ alimentación" },
        ],
        specs: ["Resolución 1280x800", "IP65 clasificación", "Serial RS485", "IEC 61850 compatible"],
        useCase: "Ideal para salas de control, cabinas de operador y puntos de supervisión local.",
        price: "Desde UF 18,5",
        highlight: "Interactividad Local",
    },
    {
        name: "ReComputer",
        subtitle: "Servidor Edge Industrial",
        image: recomputerImage.src,
        description:
            "Computadora industrial compacta optimizada para ejecutar LogOS como servidor web local y gateway de comunicaciones de alto rendimiento.",
        features: [
            { icon: DnsOutlinedIcon, text: "Server-grade performance" },
            { icon: StorageOutlinedIcon, text: "6 Meses de retención" },
            { icon: WifiOutlinedIcon, text: "Ethernet Gigabit x2" },
            { icon: MemoryOutlinedIcon, text: "ARM Cortex-A72 Quad-core" },
        ],
        specs: ["8GB RAM DDR4", "Sin ventiladores", "Riel DIN para montaje", "Temperaturas críticas"],
        useCase: "Perfecto para despliegues locales, edge computing y servidores locales de alta disponibilidad.",
        price: "Desde UF 8,3",
        highlight: "Edge Computing",
    },
    /*{
        name: "ReComputer AI",
        subtitle: "Acelerador Inteligente",
        image: recomputeraiImage.src,
        description:
            "Hardware industrial equipado con potente procesamiento neuronal para inferencia de modelos predictivos de la plataforma LogOS en tiempo real.",
        features: [
            { icon: SmartToyOutlinedIcon, text: "Aceleración de AI Edge" },
            { icon: StorageOutlinedIcon, text: "Máximo rendimiento" },
            { icon: InsightsOutlinedIcon, text: "Inferencia optimizada" },
            { icon: MemoryOutlinedIcon, text: "16GB RAM LPDDR4x" },
        ],
        specs: ["Raspberry Pi 5", "Acelerador Hailo 8", "Riel DIN o montaje en pared", "Entornos industriales"],
        useCase: "Ideal para procesamiento complejo local y análisis de video / imagenes en tiempo real.",
        price: "Desde UF 19",
        highlight: "Aceleración IA",
    },*/
];

// Newsletter Data
export const NEWSLETTER_BENEFITS = [
    {
        icon: DescriptionOutlinedIcon,
        title: "Actualizaciones técnicas",
        description: "Nuevas funcionalidades, protocolos soportados y mejoras de rendimiento de LogOS.",
    },
    {
        icon: ElectricBoltOutlinedIcon,
        title: "Casos de uso industriales",
        description: "Implementaciones reales, configuraciones optimizadas y mejores prácticas de campo.",
    },
    {
        icon: TrendingUpOutlinedIcon,
        title: "Tendencias del sector",
        description: "Análisis de mercado, nuevos estándares IEC y evolución tecnológica del Sector Eléctrico.",
    },
    {
        icon: ShieldOutlinedIcon,
        title: "Alertas de seguridad",
        description: "Vulnerabilidades, parches críticos y recomendaciones proactivas de ciberseguridad industrial.",
    },
];

// Comparison Data
export const COMPARISON_BEFORE = [
    { title: "Silos de Datos", desc: "Información fragmentada y difícil de auditar en tiempo real." },
    { title: "Costo de Infraestructura", desc: "Servidores independientes, licencias separadas y hardware cerrado." },
    {
        title: "Mantenimiento Reactivo",
        desc: "El sistema solo avisa cuando el fallo ya ha ocurrido. Mantenimiento costoso.",
    },
    { title: "Brechas de Seguridad", desc: "Protocolos antiguos y vulnerables sin actualizaciones constantes." },
    { title: "Interfaces Incómodas", desc: "Interfaz de usuario desordenada y difícil de usar." },
    { title: "Interoperabilidad Nula", desc: "No se puede integrar con sistemas externos." },
];

export const COMPARISON_AFTER = [
    {
        icon: "ai",
        title: "Inteligencia Predictiva",
        desc: "Anticípate a fallas críticas antes de que ocurran mediante modelos de IA.",
    },
    {
        icon: "unified",
        title: "Single Source of Truth",
        desc: "Tu operación completa en una sola plataforma, auditable y transparente.",
    },
    {
        icon: "savings",
        title: "Eficiencia Energética",
        desc: "Reportes y análisis autónomos para que puedas optimizar tu consumo eléctrico.",
    },
    {
        icon: "cloud",
        title: "TCO Reducido",
        desc: "Elimina CAPEX pesado; escala tu infraestructura según tus necesidades.",
    },
    {
        icon: "realtime",
        title: "Continuidad Operacional",
        desc: "Monitoreo 24/7 desde la nube y alertas de misión crítica dondequiera que estés.",
    },
    {
        icon: "security",
        title: "Ciberseguridad Total",
        desc: "Encriptación de punto a punto y cumplimiento de estándares internacionales.",
    },
];

// Testimonials Data
export const TESTIMONIALS_DATA = [
    {
        company: "Redsalud",
        industry: "Medicina",
        quote: "LogOS nos ha permitido reducir el tiempo de respuesta ante emergencias. La integración con nuestros sistemas legacy fue perfecta.",
        metrics: "Reacción 60% más rápida.",
        icon: BusinessIcon,
    },
    {
        company: "Molinera del Rey",
        industry: "Alimentos",
        quote: "Con LogOS podemos monitorear el consumo energético en cada proceso de producción y optimizarlo para reducir el desperdicio.",
        metrics: "Consumo energético optimizado.",
        icon: FactoryIcon,
    },
    {
        company: "Taleselek",
        industry: "Energía Renovable",
        quote: "La SUITE de desarrollo de LogOS es impecable, nos facilita la creación de soluciones para nuestros clientes.",
        metrics: "Desarrollo 50% más rápido.",
        icon: ElectricBoltIcon,
    },
];

export const STATS = [
    { value: "10", label: "Meses de monitoreo" },
    { value: "99%", label: "Disponibilidad" },
    { value: "1036M+", label: "Registros de Monitoreo" },
    { value: "24/7", label: "Soporte Técnico" },
];

export const CERTIFICATIONS = [
    "ISO 27001 - Seguridad de la información",
    "IEC 61850 - Automatización subestaciones",
    "NERC CIP - Seguridad cibernética",
    "IEC 62351 - Seguridad comunicaciones",
];
