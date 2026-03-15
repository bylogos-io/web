import { Box, Typography, Button } from "@mui/material";

export const TERMS_DATA = [
    {
        title: "Aceptación de los Términos",
        content:
            "Al utilizar el software LogOS, desarrollado por BYLOGOS SPA, el usuario acepta estos Términos y Condiciones en su totalidad. Si no está de acuerdo, no debe utilizar la plataforma ni los servicios asociados.",
    },
    {
        title: "Licencia de Uso",
        list: [
            "LogOS otorga al usuario una licencia limitada, no exclusiva e intransferible para utilizar el software conforme a estos Términos.",
            "El software y todos sus componentes, incluidos algoritmos de IA, interfaces, documentación y datos generados, son propiedad exclusiva de BYLOGOS SPA.",
            "Está prohibida la copia, modificación, distribución o sublicencia del software sin autorización explícita de BYLOGOS SPA.",
        ],
    },
    {
        title: "Uso del Software",
        list: [
            "El usuario se compromete a utilizar LogOS únicamente para fines legales y conforme a las instrucciones de operación.",
            "Queda prohibido interferir con el funcionamiento de LogOS, intentar acceder a sistemas no autorizados o manipular datos de terceros.",
            "La ejecución de LogOS en entornos Edge Computing garantiza que los datos permanezcan locales; cualquier transmisión de información se realizará conforme a la política de privacidad vigente.",
        ],
    },
    {
        title: "Responsabilidad y Garantías",
        list: [
            "LogOS se proporciona “tal cual” y no garantiza resultados específicos de optimización de consumo eléctrico o predicciones de IA.",
            "BYLOGOS SPA no será responsable por daños directos, indirectos, incidentales, consecuentes o pérdidas derivadas del uso del software.",
            "El usuario es responsable de implementar medidas de seguridad adicionales según sus necesidades industriales y legales.",
        ],
    },
    {
        title: "Actualizaciones y Modificaciones",
        list: [
            "BYLOGOS SPA puede actualizar LogOS en cualquier momento, incluyendo nuevas funcionalidades, mejoras de seguridad y correcciones de errores.",
            "El usuario acepta que las actualizaciones pueden aplicarse automáticamente y sin previo aviso.",
        ],
    },
    {
        title: "Propiedad Intelectual",
        list: [
            "Todos los derechos de propiedad intelectual relacionados con LogOS, sus algoritmos, interfaces gráficas, documentación y contenido generado por la IA pertenecen exclusivamente a BYLOGOS SPA.",
            "El uso no autorizado, reproducción, distribución o ingeniería inversa de cualquier componente está prohibido.",
        ],
    },
    {
        title: "Terminación",
        list: [
            "BYLOGOS SPA puede suspender o cancelar el acceso al software en caso de incumplimiento de estos Términos.",
            "Tras la terminación, el usuario deberá eliminar todas las copias del software y cualquier dato derivado de él, salvo que la ley exija su retención.",
        ],
    },
    {
        title: "Contacto",
        customContent: (
            <Typography variant="body1" color="text.secondary">
                Consultas sobre estos Términos pueden enviarse a:{" "}
                <Button
                    href="mailto:contact@bylogos.io"
                    sx={{
                        color: "primary.main",
                        textTransform: "none",
                        p: 0,
                        minWidth: "auto",
                        fontWeight: 600,
                        "&:hover": { backgroundColor: "transparent", opacity: 0.8 },
                    }}
                >
                    contact@bylogos.io
                </Button>
            </Typography>
        ),
    },
];
