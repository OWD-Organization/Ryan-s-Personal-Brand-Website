# Ryan's Personal Brand Website

## Descripción del Proyecto

Este es el sitio web personal de Ryan Kearney, una plataforma diseñada para mostrar su marca personal y servicios como consultor de negocios para hombres en sus 20s y 30s. El sitio permite a los visitantes conocer su experiencia, filosofía y servicios de manera visualmente atractiva y profesional.

## Tecnologías Utilizadas

- **Next.js 14**: Framework de React para aplicaciones web con renderizado del lado del servidor
- **TypeScript**: Lenguaje de programación que agrega tipado estático a JavaScript
- **Tailwind CSS**: Framework de CSS para diseño rápido y responsivo
- **Tina CMS**: Sistema de gestión de contenido headless para edición en tiempo real
- **GSAP**: Biblioteca de animaciones para efectos visuales avanzados
- **React**: Biblioteca para construir interfaces de usuario

## Estructura del Proyecto

```
.
├── app/                 # Componentes de página de Next.js
├── components/          # Componentes reutilizables
│   └── sections/        # Secciones específicas de la página
├── content/             # Contenido estático en formato JSON
├── public/              # Archivos públicos (imágenes, assets)
├── tina/                # Configuración de Tina CMS
├── styles/              # Archivos de estilo globales
└── README.md            # Documentación del proyecto
```

## Forma de Trabajar

El proyecto utiliza un enfoque de CMS headless con Tina CMS para permitir la edición en tiempo real del contenido. La estructura de datos está organizada en archivos JSON dentro de la carpeta `content/pages/home.json`. Cada sección del sitio web está separada en componentes reutilizables que reciben datos a través de props.

El flujo de trabajo es:
1. El servidor obtiene los datos del archivo JSON en modo de producción
2. En desarrollo, se usa Tina CMS para obtener los datos directamente
3. Los componentes se renderizan usando los datos proporcionados
4. Cada sección tiene su propio componente en `components/sections/`

## Características Principales

- Diseño responsive y moderno
- Galería de imágenes con transiciones automáticas
- Secciones de contenido dinámico editables mediante Tina CMS
- Animaciones suaves con GSAP
- Sistema de edición en tiempo real
- Optimizado para SEO

## Scripts Disponibles

- `dev`: Inicia el servidor de desarrollo
- `build`: Construye la aplicación para producción
- `start`: Inicia el servidor de producción
- `lint`: Ejecuta el linter

## Configuración

El proyecto requiere variables de entorno definidas en `.env.local` para funcionar correctamente con Tina CMS. La configuración de Tailwind y Next.js está optimizada para el desarrollo moderno de aplicaciones web.

## Autor

Ryan Kearney - Desarrollador y consultor de negocios