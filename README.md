# LogOS Web

**LogOS** es una plataforma IIoT de vanguardia diseñada para el monitoreo y control en tiempo real en entornos industriales. Este repositorio alberga el frontend de la aplicación, construido con las últimas tecnologías web para ofrecer una experiencia de usuario rápida, robusta y moderna.

## 🚀 Tecnologías Principales

Este proyecto utiliza un stack tecnológico moderno y optimizado para rendimiento y escalabilidad:

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
-   **Lenguaje**: [TypeScript](https://www.typescriptlang.org/) para tipado estático robusto.
-   **UI Library**: [Material UI (MUI) v6](https://mui.com/) para un sistema de diseño consistente y adaptable.
-   **Animaciones**: [Framer Motion](https://www.framer.com/motion/) para interacciones fluidas y micro-interacciones.
-   **Gestión de Contenido**: [Velite](https://velite.js.org/) para el manejo de contenidos Markdown/MDX fuertemente tipados (Blog, Noticias, Documentación).
-   **AI & LLM**: Integración avanzada con [LangChain](https://js.langchain.com/) y [Vercel AI SDK](https://sdk.vercel.ai/docs) para funcionalidades inteligentes como chatbots y asistentes.
-   **Visualización 3D**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) para experiencias inmersivas y modelado 3D en la web.

> **Nota Adicional:** La sección de "Noticias" se encuentra actualmente comentada y deshabilitada en la navegación (`src/data/layout.tsx`).
## 📂 Estructura del Proyecto

La arquitectura del proyecto sigue un enfoque modular, favoreciendo la separación de responsabilidades:

```
src/
├── app/                 # Rutas de la aplicación (Next.js App Router)
├── components/          # Componentes UI reutilizables y atómicos (Botones, Inputs, Cards)
├── content/             # Archivos MDX fuente para Noticias y Documentación
├── hooks/               # Custom React Hooks
├── lib/                 # Configuraciones de librerías y utilidades externas
├── providers/           # Context Providers globales (Theme, Session, AI)
├── sections/            # Componentes específicos de cada vista/página
│   ├── docs/            # Componentes específicos de la documentación
│   ├── news/            # Componentes del blog y noticias
│   ├── layout/          # Elementos estructurales (Header, Footer)
│   └── ...
├── theme/               # Configuración del tema (MUI), tipografía y paleta de colores
└── utils/               # Funciones de utilidad pura y helpers
```

### Patrón de Diseño: Pages vs Sections

Para mantener nuestro código limpio y mantenible, utilizamos un patrón estricto de separación:

-   **`src/app` (Pages)**: Los archivos `page.tsx` deben ser ligeros. Su responsabilidad principal es definir metadatos (SEO), realizar la obtención de datos inicial (si aplica) e importar la vista correspondiente.
-   **`src/sections` (Views)**: La lógica de presentación, estado de la UI y composición de componentes complejos reside aquí.

Ejemplo:
-   `src/app/news/page.tsx` importa `src/sections/news/NewsPosts.tsx`
-   `src/app/docs/[[...slug]]/page.tsx` importa `src/sections/docs/DocsView.tsx`

## 🛠️ Instalación y Desarrollo

### Requisitos Previos

-   [Node.js](https://nodejs.org/) (Versión LTS v18 o superior recomendada)
-   [pnpm](https://pnpm.io/) (Gestor de paquetes obligatorio para este repositorio)

### Pasos para iniciar

1.  **Instalar dependencias**:
    ```bash
    pnpm install
    ```

2.  **Configurar variables de entorno**:
    Asegúrate de tener configuradas las variables necesarias (API Keys de OpenAI/Google, URLs de backend, etc.) en un archivo `.env.local`.

3.  **Iniciar el servidor de desarrollo**:
    Este comando inicia concurrentemente el watcher de Velite (para contenido) y el servidor de Next.js.
    ```bash
    pnpm dev
    ```

4.  **Acceder a la aplicación**:
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Comandos Principales

| Comando | Descripción |
| :--- | :--- |
| `pnpm dev` | Inicia el entorno de desarrollo con Hot Reloading. |
| `pnpm build` | Compila la aplicación para producción y genera los assets estáticos. |
| `pnpm start` | Inicia el servidor de producción localmente para pruebas finales. |
| `pnpm lint` | Ejecuta el linter para asegurar la calidad y consistencia del código. |

## ⚠️ Nota de Propiedad

> [!CAUTION]
> **PROYECTO PRIVADO**: Este software es propiedad intelectual exclusiva de **LogOS**. El código fuente se proporciona únicamente a colaboradores autorizados para fines de desarrollo interno. Queda estrictamente prohibida su copia, distribución, modificación o uso comercial sin el consentimiento explícito y por escrito de los propietarios.

---

&copy; 2024-2026 LogOS. Todos los derechos reservados.


[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fwww.bylogos.io%2F&up_message=online&down_message=offline&down_color=E34646&style=for-the-badge&logo=google-chrome&logoColor=white&labelColor=171717)](https://www.bylogos.io/)
[![CI Develop](https://img.shields.io/github/actions/workflow/status/bylogos-io/web/ci-develop.yml?label=CI%20Develop&style=for-the-badge&logo=github&logoColor=white&labelColor=171717)](https://github.com/bylogos-io/web/actions/workflows/ci-develop.yml)
[![CI Full](https://img.shields.io/github/actions/workflow/status/bylogos-io/web/ci-full.yml?label=CI%20Full&style=for-the-badge&logo=github&logoColor=white&labelColor=171717)](https://github.com/bylogos-io/web/actions/workflows/ci-full.yml)
[![Last Release](https://img.shields.io/github/v/release/bylogos-io/web?style=for-the-badge&logo=github&logoColor=white&labelColor=171717&color=E16E09&label=Last%20Release)](https://github.com/bylogos-io/web/releases)
