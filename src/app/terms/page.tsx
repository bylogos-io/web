import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  return (
    <div className="flex flex-col w-full h-full justify-start items-center p-5 gap-5">
      <Link rel="icon" href="/" className="self-start">
        <div className="flex items-center gap-2 justify-center hover:text-primary transition-all duration-200">
          <ArrowLeft className="w-5 h-5" />
          Volver al inicio
        </div>
      </Link>
      <h1 className="text-3xl font-bold text-primary">Términos y Condiciones</h1>
      <div className="gap-5 flex flex-col">
        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Aceptación de los Términos</h2>
          <p className="text-lg text-foreground">Al utilizar el software Logos, desarrollado por ByLogos SpA, el usuario acepta estos Términos y Condiciones en su totalidad. Si no está de acuerdo, no debe utilizar la plataforma ni los servicios asociados.</p>
        </div>

        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Licencia de Uso</h2>
          <ul className="text-lg text-foreground list-disc list-inside">
            <li>Logos otorga al usuario una licencia limitada, no exclusiva e intransferible para utilizar el software conforme a estos Términos.</li>
            <li>El software y todos sus componentes, incluidos algoritmos de IA, interfaces, documentación y datos generados, son propiedad exclusiva de ByLogos SpA.</li>
            <li>Está prohibida la copia, modificación, distribución o sublicencia del software sin autorización explícita de ByLogos SpA.</li>
          </ul>
        </div>

        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Uso del Software</h2>
          <ul className="text-lg text-foreground list-disc list-inside">
            <li>El usuario se compromete a utilizar Logos únicamente para fines legales y conforme a las instrucciones de operación.</li>
            <li>Queda prohibido interferir con el funcionamiento de Logos, intentar acceder a sistemas no autorizados o manipular datos de terceros.</li>
            <li>La ejecución de Logos en entornos Edge Computing garantiza que los datos permanezcan locales; cualquier transmisión de información se realizará conforme a la política de privacidad vigente.</li>
          </ul>
        </div>

        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Responsabilidad y Garantías</h2>
          <ul className="text-lg text-foreground list-disc list-inside">
            <li>Logos se proporciona “tal cual” y no garantiza resultados específicos de optimización de consumo eléctrico o predicciones de IA.</li>
            <li>ByLogos SpA no será responsable por daños directos, indirectos, incidentales, consecuentes o pérdidas derivadas del uso del software.</li>
            <li>El usuario es responsable de implementar medidas de seguridad adicionales según sus necesidades industriales y legales.</li>
          </ul>
        </div>

        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Actualizaciones y Modificaciones</h2>
          <ul className="text-lg text-foreground list-disc list-inside">
            <li>ByLogos SpA puede actualizar Logos en cualquier momento, incluyendo nuevas funcionalidades, mejoras de seguridad y correcciones de errores.</li>
            <li>El usuario acepta que las actualizaciones pueden aplicarse automáticamente y sin previo aviso.</li>
          </ul>
        </div>

        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Propiedad Intelectual</h2>
          <ul className="text-lg text-foreground list-disc list-inside">
            <li>Todos los derechos de propiedad intelectual relacionados con Logos, sus algoritmos, interfaces gráficas, documentación y contenido generado por la IA pertenecen exclusivamente a ByLogos SpA.</li>
            <li>El uso no autorizado, reproducción, distribución o ingeniería inversa de cualquier componente está prohibido.</li>
          </ul>
        </div>

        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Terminación</h2>
          <ul className="text-lg text-foreground list-disc list-inside">
            <li>ByLogos SpA puede suspender o cancelar el acceso al software en caso de incumplimiento de estos Términos.</li>
            <li>Tras la terminación, el usuario deberá eliminar todas las copias del software y cualquier dato derivado de él, salvo que la ley exija su retención.</li>
          </ul>
        </div>

        {/*<div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Ley Aplicable y Jurisdicción</h2>
          <ul className="text-lg text-foreground list-disc list-inside">
            <li>Estos Términos se rigen por la legislación de la República de Chile.</li>
            <li>Cualquier disputa será resuelta ante los tribunales competentes de Santiago de Chile, salvo acuerdo expreso en contrario.</li>
          </ul>
        </div>*/}

        <div className="gap-2 flex flex-col">
          <h2 className="text-2xl font-bold text-white">Contacto</h2>
          <p className="text-lg text-foreground">
            Consultas sobre estos Términos pueden enviarse a:{" "}
            <a href="mailto:contacto@bylogos.cl" className="text-primary">
              contact@bylogos.io
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
