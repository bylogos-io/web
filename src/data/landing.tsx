// MUI Icons
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import WysiwygOutlinedIcon from "@mui/icons-material/WysiwygOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import BusinessIcon from "@mui/icons-material/Business";
import FactoryIcon from "@mui/icons-material/Factory";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import HubIcon from "@mui/icons-material/Hub";

// Images
import reterminalImage from "@public/assets/hardware-alternatives/reterminal.png";
import recomputerImage from "@public/assets/hardware-alternatives/recomputer.png";

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
        name: "ReTerminalDM",
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
            { icon: StorageOutlinedIcon, text: "SSD NVMe 256GB" },
            { icon: WifiOutlinedIcon, text: "Ethernet Gigabit x2" },
            { icon: MemoryOutlinedIcon, text: "ARM Cortex-A72 Quad-core" },
        ],
        specs: ["8GB RAM DDR4", "Ventilación silenciosa", "Riel DIN para montaje", "Temperaturas críticas"],
        useCase: "Perfecto para despliegues centralizados, edge computing y servidores locales de alta disponibilidad.",
        price: "Desde UF 8,3",
        highlight: "Edge Computing",
    },
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
    { title: "Costo de Infraestructura", desc: "Servidores locales, licencias perpetuas y hardware dedicado." },
    { title: "Mantenimiento Reactivo", desc: "El sistema solo avisa cuando el fallo ya ha ocurrido." },
    { title: "Brechas de Seguridad", desc: "Protocolos antiguos y vulnerables sin actualizaciones constantes." },
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
        desc: "Optimización autónoma que reduce el consumo eléctrico hasta un 30%.",
    },
    {
        icon: "cloud",
        title: "TCO Reducido",
        desc: "Elimina CAPEX pesado; escala tu infraestructura según tus necesidades.",
    },
    {
        icon: "realtime",
        title: "Continuidad Operacional",
        desc: "Monitoreo 24/7 con redundancia en la nube y alertas de misión crítica.",
    },
    {
        icon: "security",
        title: "Ciberseguridad Total",
        desc: "Encriptación de grado militar y cumplimiento de estándares internacionales.",
    },
];

// Testimonials Data
export const TESTIMONIALS_DATA = [
    {
        company: "Red Salud",
        industry: "Médicina",
        quote: "Logos nos ha permitido reducir el tiempo de respuesta ante incidencias en un 70%. La integración con nuestros sistemas legacy fue perfecta.",
        metrics: "70% reducción MTTR",
        icon: BusinessIcon,
        installations: "45+ subestaciones",
    },
    {
        company: "Arcelor Mittal",
        industry: "Siderurgia",
        quote: "El módulo de IA predictiva identificó 3 fallos críticos antes de que ocurrieran. ROI del 340% en el primer año.",
        metrics: "340% ROI primer año",
        icon: FactoryIcon,
        installations: "12 plantas industriales",
    },
    {
        company: "Iberdrola Renovables",
        industry: "Energía Renovable",
        quote: "Monitoreo en tiempo real de 150+ parques eólicos desde una sola plataforma. Eficiencia operativa sin precedentes.",
        metrics: "150+ parques monitorizados",
        icon: ElectricBoltIcon,
        installations: "2.3 GW bajo gestión",
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
