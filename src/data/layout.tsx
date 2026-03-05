import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { MailOutline as MailIcon } from "@mui/icons-material";

export const NAVIGATION_ITEMS = [
    {
        label: "Inicio",
        href: "/",
        submenu: [
            {
                label: "Características",
                href: "#features",
                description: "Arquitectura modular",
            },
            {
                label: "Hardware",
                href: "#hardware",
                description: "Equipamiento industrial",
            },
            {
                label: "Comparativa",
                href: "#comparison",
                description: "Revolución",
            },
            { label: "Contacto", href: "#newsletter", description: "Hablemos" },
        ],
    },
    {
        label: "Industrias",
        href: "/industries",
        submenu: [
            { label: "Petróleo y Gas", href: "/industries#petroleo", description: "Extracción" },
            { label: "Centros de Datos", href: "/industries#datos", description: "Infraestructura" },
            { label: "Aguas", href: "/industries#aguas", description: "Tratamiento" },
            { label: "Energía", href: "/industries#energia", description: "Generación" },
            { label: "Alimentos y Bebidas", href: "/industries#produccion", description: "Producción" },
        ],
    },
    {
        label: "Precios",
        href: "/pricing",
        submenu: [
            { label: "Edge", href: "/pricing", description: "Desde 15 UF/mes" },
            { label: "Cloud", href: "/pricing", description: "Desde 8 UF/mes" },
            { label: "Personalizado", href: "/pricing", description: "Consúltanos" },
        ],
    },
    { label: "Nosotros", href: "/about" },
    { label: "Noticias", href: "/news" },
];

export const SOCIAL_LINKS = [
    { icon: LinkedInIcon, href: "https://www.linkedin.com/company/bylogos/" },
    { icon: InstagramIcon, href: "https://www.instagram.com/bylogos.io/" },
    { icon: GitHubIcon, href: "https://github.com/bylogos-io" },
];

export const CONTACT_INFO = [{ label: "Email técnico", value: "contact@bylogos.io", icon: MailIcon }];

export const FOOTER_PROTOCOLS = ["Modbus RTU/TCP", "OPC UA (DA, AC, HDA)", "MQTT / MQTT-SN"];
