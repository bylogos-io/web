import SettingsInputComponentOutlinedIcon from '@mui/icons-material/SettingsInputComponentOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';

export const PRICING_PLANS = [
  {
    title: 'EDGE',
    price: 'Desde 15 UF',
    description: 'Solución local para control crítico.',
    features: [
      'Protocolos Industriales',
      'Hardware Optimizado',
      'Baja Latencia',
    ],
    icon: SettingsInputComponentOutlinedIcon,
    color: 'primary.main',
  },
  {
    title: 'CLOUD',
    price: 'Desde 8 UF/mes',
    description: 'Escalabilidad e inteligencia en la nube.',
    features: ['Respaldo Híbrido', 'IA Copilot', 'Dashboards Web'],
    icon: CloudOutlinedIcon,
    color: 'secondary.main',
  },
  {
    title: 'CONTACTANOS',
    price: 'Custom',
    description: '¿Necesitas una solución a medida?',
    features: ['Soporte 24/7', 'Integraciones Custom', 'Enterprise Grade'],
    icon: ContactSupportOutlinedIcon,
    color: 'text.primary',
    isContact: true,
  },
];

export const PRICING_FEATURES = [
  {
    name: 'Monitoreo en Tiempo Real',
    edge: true,
    cloud: true,
    enterprise: true,
  },
  {
    name: 'Diagramas Unilineales Interactivos',
    edge: true,
    cloud: true,
    enterprise: true,
  },
  {
    name: 'Registro de Datos (Historian)',
    edge: true,
    cloud: true,
    enterprise: true,
  },
  {
    name: 'Alarmas Inteligentes',
    edge: 'Básico',
    cloud: 'Avanzado',
    enterprise: 'Predictivo',
  },
  {
    name: 'Autenticación Biométrica',
    edge: false,
    cloud: true,
    enterprise: true,
  },
  { name: 'Reportes Automáticos', edge: false, cloud: true, enterprise: true },
  {
    name: 'Asistente de IA (Copilot)',
    edge: false,
    cloud: 'Básico',
    enterprise: 'Full',
  },
  {
    name: 'Gemelo Digital (Digital Twin)',
    edge: false,
    cloud: false,
    enterprise: true,
  },
  {
    name: 'Respaldo en la Nube',
    edge: 'Opcional',
    cloud: true,
    enterprise: true,
  },
];
