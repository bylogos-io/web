import { Box, Typography, Button } from '@mui/material';

export const PRIVACY_DATA = [
  {
    title: 'Responsabilidad del tratamiento de datos',
    content:
      'ByLogos SpA es responsable de la recolección, almacenamiento, procesamiento y protección de los datos obtenidos a través del software LogOS.',
  },
  {
    title: 'Tipos de datos recolectados',
    content: 'Logos puede recolectar y procesar los siguientes datos:',
    list: [
      'Datos de usuario: nombre, correo electrónico, credenciales de acceso, roles y permisos.',
      'Datos de clientes: información de la compañía, ubicaciones de plantas o instalaciones, y configuración de sistemas eléctricos.',
      'Datos operativos: consumo eléctrico por dispositivo, registros de eventos y alarmas, información de sensores y dispositivos conectados (medición, estado, logs).',
      'Datos de uso del software: interacciones con la plataforma, tiempos de conexión, errores y eventos de desempeño.',
    ],
  },
  {
    title: 'Finalidad del tratamiento',
    content: 'Los datos recolectados se utilizan para:',
    list: [
      'Monitoreo y análisis de consumo eléctrico en tiempo real.',
      'Optimización de procesos industriales mediante IA y algoritmos de NILM.',
      'Generación de reportes y alertas operativas personalizadas.',
      'Seguridad, auditoría y prevención de accesos no autorizados.',
      'Mejora del software y soporte técnico al usuario.',
    ],
  },
  {
    title: 'Bases del tratamiento',
    content: 'El tratamiento de datos se realiza bajo las siguientes bases:',
    list: [
      'Consentimiento explícito del usuario o representante legal de la empresa.',
      'Cumplimiento de obligaciones contractuales y legales aplicables.',
      'Interés legítimo de Logos para mantener la operación, seguridad y mejora continua del software.',
    ],
  },
  {
    title: 'Compartición y transferencia de datos',
    content: [
      'Logos no venderá ni compartirá datos con terceros sin consentimiento explícito, salvo obligaciones legales.',
      'Datos pueden ser transferidos a proveedores de servicios bajo acuerdos de confidencialidad y seguridad equivalentes.',
      'Para clientes con múltiples instalaciones, los datos pueden procesarse localmente en dispositivos Edge Computing y almacenados en servidores para garantizar respaldo y seguridad.',
    ],
  },
  {
    title: 'Seguridad de los datos',
    content: [
      'Todos los datos se almacenan de manera segura mediante cifrado en tránsito y en reposo.',
      'Accesos administrativos se limitan mediante autenticación fuerte y control de permisos.',
      'Se implementan medidas de monitoreo de integridad, detección de intrusiones y respaldo local de información crítica.',
    ],
  },
  {
    title: 'Retención de los datos',
    content: [
      'Datos operativos se almacenan mientras sean necesarios para fines de operación, análisis y cumplimiento legal.',
      'Datos personales se conservan hasta que el usuario solicite su eliminación o retiro del consentimiento.',
    ],
  },
  {
    title: 'Derechos de los usuarios',
    content: 'Los usuarios tienen derecho a:',
    list: [
      'Acceder a sus datos personales y operativos.',
      'Rectificar información incorrecta o incompleta.',
      'Eliminar sus datos personales en cualquier momento.',
      'Retirar su consentimiento en cualquier momento.',
      'Recibir una copia de sus datos personales en formato legible.',
    ],
  },
  {
    title: 'Modificaciones de la política',
    content:
      'Logos se reserva el derecho de modificar esta política de privacidad en cualquier momento. Las modificaciones serán publicadas en esta misma página y entrarán en vigencia inmediatamente después de su publicación.',
  },
  {
    title: 'Contacto',
    content: '',
    customContent: (
      <Typography variant='body1' color='text.secondary'>
        Para cualquier pregunta o comentario sobre esta política de privacidad,
        por favor contáctanos a:{' '}
        <Button
          href='mailto:contact@bylogos.io'
          sx={{
            color: 'primary.main',
            textTransform: 'none',
            p: 0,
            minWidth: 'auto',
            fontWeight: 600,
            '&:hover': { backgroundColor: 'transparent', opacity: 0.8 },
          }}
        >
          contact@bylogos.io
        </Button>
      </Typography>
    ),
  },
];
