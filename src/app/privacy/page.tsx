import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function Privacy() {
  return (
    <div className="flex flex-col w-full h-full justify-start items-center p-5 gap-5">
      <Link rel="icon" href="/" className="self-start">
        <div className="flex items-center gap-2 justify-center hover:text-primary transition-all duration-200">
          <ArrowLeft className="w-5 h-5" />
          Volver al inicio
        </div>
      </Link>
      <h1 className="text-3xl font-bold text-primary">Política de Privacidad</h1>
      <div className="gap-5 flex flex-col">
        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Responsabilidad del tratamiento de datos</h2>
          <p className="text-lg text-foreground">ByLogos SpA es responsable de la recolección, almacenamiento, procesamiento y protección de los datos obtenidos a través del software LogOS.</p>
        </div>
        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Tipos de datos recolectados</h2>
          <p className="text-lg text-foreground">Logos puede recolectar y procesar los siguientes datos:</p>
          <ul className="text-lg text-foreground list-disc list-inside">
            <li>Datos de usuario: nombre, correo electrónico, credenciales de acceso, roles y permisos. </li>
            <li>Datos de clientes: información de la compañía, ubicaciones de plantas o instalaciones, y configuración de sistemas eléctricos. </li>
            <li>Datos operativos: consumo eléctrico por dispositivo, registros de eventos y alarmas, información de sensores y dispositivos conectados (medición, estado, logs). </li>
            <li>Datos de uso del software: interacciones con la plataforma, tiempos de conexión, errores y eventos de desempeño.</li>
          </ul>
        </div>
        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Finalidad del tratamiento</h2>
          <p className="text-lg text-foreground">Los datos recolectados se utilizan para:</p>
          <ul className="text-lg text-foreground list-disc list-inside">
            <li>Monitoreo y análisis de consumo eléctrico en tiempo real. </li>
            <li>Optimización de procesos industriales mediante IA y algoritmos de NILM. </li>
            <li>Generación de reportes y alertas operativas personalizadas.</li>
            <li>Seguridad, auditoría y prevención de accesos no autorizados.</li>
            <li>Mejora del software y soporte técnico al usuario.</li>
          </ul>
        </div>

        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Bases del tratamiento</h2>
          <p className="text-lg text-foreground">El tratamiento de datos se realiza bajo las siguientes bases:</p>
          <ul className="text-lg text-foreground list-disc list-inside">
            <li>Consentimiento explícito del usuario o representante legal de la empresa.</li>
            <li>Cumplimiento de obligaciones contractuales y legales aplicables.</li>
            <li>Interés legítimo de Logos para mantener la operación, seguridad y mejora continua del software.</li>
          </ul>
        </div>

        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Compartición y transferencia de datos</h2>
          <p className="text-lg text-foreground">Logos no venderá ni compartirá datos con terceros sin consentimiento explícito, salvo obligaciones legales.</p>
          <p className="text-lg text-foreground">Datos pueden ser transferidos a proveedores de servicios bajo acuerdos de confidencialidad y seguridad equivalentes.</p>
          <p className="text-lg text-foreground">Para clientes con múltiples instalaciones, los datos pueden procesarse localmente en dispositivos Edge Computing y almacenados en servidores para garantizar respaldo y seguridad.</p>
        </div>

        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Seguridad de los datos</h2>
          <p className="text-lg text-foreground">Todos los datos se almacenan de manera segura mediante cifrado en tránsito y en reposo.</p>
          <p className="text-lg text-foreground">Accesos administrativos se limitan mediante autenticación fuerte y control de permisos.</p>
          <p className="text-lg text-foreground">Se implementan medidas de monitoreo de integridad, detección de intrusiones y respaldo local de información crítica.</p>
        </div>

        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Retención de los datos</h2>
          <p className="text-lg text-foreground">Datos operativos se almacenan mientras sean necesarios para fines de operación, análisis y cumplimiento legal.</p>
          <p className="text-lg text-foreground">Datos personales se conservan hasta que el usuario solicite su eliminación o retiro del consentimiento.</p>
        </div>

        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Derechos de los usuarios</h2>
          <p className="text-lg text-foreground">Los usuarios tienen derecho a:</p>
          <ul className="text-lg text-foreground list-disc list-inside">
            <li>Acceder a sus datos personales y operativos.</li>
            <li>Rectificar información incorrecta o incompleta.</li>
            <li>Eliminar sus datos personales en cualquier momento.</li>
            <li>Retirar su consentimiento en cualquier momento.</li>
            <li>Recibir una copia de sus datos personales en formato legible.</li>
          </ul>
        </div>

        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Modificaciones de la política</h2>
          <p className="text-lg text-foreground">Logos se reserva el derecho de modificar esta política de privacidad en cualquier momento. Las modificaciones serán publicadas en esta misma página y entrarán en vigencia inmediatamente después de su publicación.</p>
        </div>

        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Contacto</h2>
          <p className="text-lg text-foreground">
            Para cualquier pregunta o comentario sobre esta política de privacidad, por favor contáctanos a:{" "}
            <a href="mailto:contact@bylogos.io" className="text-primary">
              contact@bylogos.io
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
