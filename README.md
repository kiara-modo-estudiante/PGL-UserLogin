# PGL-Navigation

Este proyecto, **PGL-Navigation**, es una aplicación diseñada para facilitar la navegación en dispositivos móviles.

## Estructura del Proyecto

Esta estructura organiza el proyecto en módulos claros, facilitando el desarrollo y mantenimiento.

```plaintext
├── README.md
├── app
│   ├── _layout.tsx
│   ├── books
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── modal.tsx
│   ├── index.tsx
│   └── portfolio
│       ├── _layout.tsx
│       ├── about.tsx
│       └── repo.tsx
├── app.json
├── assets
├── components (reutilizables como listas, formularios y modales)
├── context
│   └── BookContext.tsx (gestión del estado global de libros)
├── data (datos estáticos como libros y redes sociales)
├── docs (documentación del proyecto con imágenes de referencia)
├── theme (configuración de estilos y tipografía)
├── types (definiciones de tipos TypeScript)
├── package.json
├── tsconfig.json
└── package-lock.json
```

## Objetivo de la Aplicación

El objetivo principal de **PGL-Navigation** es aprender a implementar la navegación en aplicaciones móviles utilizando React Navigation y Expo Router. La aplicación incluye las siguientes características clave:

- **Pantalla de Bienvenida**: Una pantalla inicial que da la bienvenida a los usuarios.
- **Drawer de Navegación**: Un menú lateral que permite acceder a diferentes secciones de la aplicación:
  - **Pantalla de Bienvenida**.
  - **Portfolio**: Contiene dos pantallas, una con información "Sobre mí" y otra sobre "Repositorio".
  - **Lista de Libros**: Una funcionalidad que permite gestionar y visualizar una lista de libros, siendo esta la funcionalidad principal de la aplicación.

Esta estructura busca proporcionar una experiencia de usuario intuitiva mientras se exploran las capacidades de React Navigation.

A continuación, se proporciona documentación detallada sobre las diferentes secciones del proyecto.

## Documentación

1. [Configuración básica del proyecto](./docs/01-app-configuration.md)  
   Cómo configurar el proyecto desde cero, incluyendo dependencias y estructura inicial.

2. [Reciclaje del Portfolio](./docs/02-recycle-portfolio.md)  
   Cómo se integró y adaptó un portfolio de un proyecto anterior en esta aplicación.

3. [Pantalla de Bienvenida](./docs/03-welcome-message.md)  
   Detalles sobre la implementación de la pantalla inicial que da la bienvenida a los usuarios.

4. [Implementación del Drawer y pantalla inicial](./docs/04-drawer.md)  
   Explicación de cómo se configuró la navegación lateral y la pantalla principal de la aplicación.

5. [Implementación de Lista de Libros](./docs/05-book-list.md)  
   Información sobre cómo se implementó y gestionó la funcionalidad de la lista de libros.
