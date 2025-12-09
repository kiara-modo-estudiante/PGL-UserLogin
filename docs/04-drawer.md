[<- Volver al README](../README.md)

# Implementación del Drawer y pantalla inicial

![Drawer](./images/04-doc/drawer.gif)

Desde el inicio del desarrollo de esta aplicación, se ha seguido un enfoque estructurado para implementar la navegación y las pantallas. A continuación, se detalla cómo se ha llevado a cabo este proceso.

## Implementación del Drawer

En el archivo `_layout.tsx`, se utiliza el componente `Drawer` proporcionado por `expo-router/drawer` para crear un menú de navegación lateral (Drawer Navigation). Este menú permite a los usuarios navegar entre diferentes pantallas de la aplicación.

### Configuración de las pantallas en el Drawer

- **Pantalla "Home"**:
  - Nombre interno: `index`
  - Etiqueta en el menú: `Home`
  - Título de la pantalla: `Home`
- **Pantalla "Portfolio"**:
  - Nombre interno: `portfolio`
  - Etiqueta en el menú: `Portfolio`
  - Título de la pantalla: `Portfolio`

El componente `Drawer.Screen` se utiliza para definir cada pantalla que estará disponible en el menú. Cada pantalla tiene propiedades como `name` (nombre interno de la ruta) y `options` (configuración visual y de navegación).

## Pantalla por defecto

La pantalla por defecto de la aplicación es la definida en el archivo `index.tsx`. Esta pantalla corresponde a la ruta raíz (`/`) y se configura automáticamente como la pantalla inicial del Drawer debido a su nombre interno `index`.

### Contenido de la pantalla "Home"

- **Bienvenida**: Muestra un mensaje de bienvenida y una imagen animada (`welcome.gif`).
- **Botón de navegación**: Incluye un botón que redirige al usuario a la pantalla "Portfolio" utilizando el método `router.navigate("/portfolio")`.

Puedes ver más sobre esta pantalla en: [03-welcome-message.md](03-welcome-message.md).

### Estilos

Se utilizan estilos personalizados definidos con `StyleSheet` para estructurar y dar diseño a los elementos de la pantalla. Además, se hace uso de estilos globales (`globalStyles`) y una paleta de colores (`lightColorPalette`) para mantener consistencia en el diseño.

[<- Volver al README](../README.md)
