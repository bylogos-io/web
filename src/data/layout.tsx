import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { MailOutline as MailIcon } from "@mui/icons-material";

export const NAVIGATION_ITEMS = [
    {
        label: "Inicio",
        href: "/",
    },
    {
        label: "Industrias",
        href: "/industries",
        submenu: [
            { label: "Petróleo y Gas", href: "/industries#petroleo-y-gas", description: "Extracción" },
            { label: "Aguas y Saneamiento", href: "/industries#aguas-y-saneamiento", description: "Tratamiento" },
            { label: "Energía", href: "/industries#energia", description: "Generación" },
            { label: "Alimentos y Bebidas", href: "/industries#alimentos-y-bebidas", description: "Producción" },
        ],
    },
    {
        label: "Planes y Precios",
        href: "/pricing",
    },
    { label: "Nosotros", href: "/about" },
    // { label: "Noticias", href: "/news" },
];

export const SOCIAL_LINKS = [
    { icon: LinkedInIcon, href: "https://www.linkedin.com/company/bylogos/" },
    { icon: InstagramIcon, href: "https://www.instagram.com/bylogos.io/" },
    { icon: GitHubIcon, href: "https://github.com/bylogos-io" },
];

export const CONTACT_INFO = [{ label: "Email técnico", value: "contact@bylogos.io", icon: MailIcon }];

export const FOOTER_PROTOCOLS = ["Modbus RTU/TCP", "OPC UA (DA, AC, HDA)", "MQTT / MQTT-SN"];
