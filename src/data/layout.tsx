import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { MailOutline as MailIcon } from '@mui/icons-material';

export const NAVIGATION_ITEMS = [
  {
    label: 'Inicio',
    href: '/',
    submenu: [
      {
        label: 'Características',
        href: '#features',
        description: 'Potencia tu sistema',
      },
      {
        label: 'Hardware',
        href: '#hardware',
        description: 'Equipos industriales',
      },
      {
        label: 'Compatibilidad',
        href: '#stack',
        description: 'Integración total',
      },
      { label: 'Contacto', href: '#newsletter', description: 'Hablemos hoy' },
    ],
  },
  {
    label: 'Industrias',
    href: '/industrias',
    submenu: [
      { label: 'Petróleo', href: '/industrias#petroleo', description: '(Oil & Gas)' },
      { label: 'Datos', href: '/industrias#datos', description: '(Data Centers)' },
      { label: 'Aguas', href: '/industrias#aguas', description: '(Water)' },
      { label: 'Energía', href: '/industrias#energia', description: '(Power)' },
      { label: 'Producción', href: '/industrias#produccion', description: '(Food & Beverage)' },
    ],
  },
  {
    label: 'Precios',
    href: '/precios',
    submenu: [
      { label: 'Edge', href: '/precios', description: 'Desde $XXX/mes' },
      { label: 'Cloud', href: '/precios', description: 'Desde $XXX/mes' },
      { label: 'Custom', href: '/precios', description: 'Consúltanos' },
    ],
  },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'News', href: '/news' },
];

export const SOCIAL_LINKS = [
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/company/bylogos/' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/bylogos.io/' },
  { icon: GitHubIcon, href: 'https://github.com/bylogos-io' },
];

export const CONTACT_INFO = [
  { label: 'Email técnico', value: 'contact@bylogos.io', icon: MailIcon },
];

export const FOOTER_PROTOCOLS = [
  'Modbus RTU/TCP',
  'OPC UA (DA, AC, HDA)',
  'MQTT / MQTT-SN',
];
