# PGL-UserLogin

Este proyecto, **PGL-UserLogin**, es una aplicación diseñada para añadir la funcionalidad de autenticación de usuario a una [aplicación existente](https://github.com/kiara-modo-estudiante/PGL-Navigation).

Para consultar el proyecto anterior, acceda a su repositorio haciendo [clic aquí](https://github.com/kiara-modo-estudiante/PGL-Navigation). O accede al índice de su documentación al final de este documento.

# Documentación del Proyecto: PGL-UserLogin

Este proyecto implementa un sistema de autenticación de usuarios que incluye registro, inicio de sesión, gestión de tokens, cierre de sesión y funcionalidades adicionales. A continuación, se describen los aspectos principales del proyecto y se proporcionan enlaces a la documentación detallada de cada funcionalidad:

## Documentación de Funcionalidades

1. **Registro de Usuario**  
   Implementación de la pantalla de registro, validación de inputs, y comunicación con el backend para crear nuevos usuarios.  
   [Leer más sobre el Registro de Usuario](./docs/userlogin/01-register.md)

2. **Inicio de Sesión**  
   Implementación de la pantalla de login, validación de credenciales, almacenamiento del token de sesión y redirección a la pantalla de bienvenida.  
   [Leer más sobre el Inicio de Sesión](./docs/userlogin/02-login.md)

3. **Gestión del Token de Sesión**  
   Verificación de la existencia del token para redirigir al usuario a la pantalla correspondiente, manejo del almacenamiento seguro del token y lógica de redirección.  
   [Leer más sobre la Gestión del Token](./docs/userlogin/03-token.md)

4. **Cierre de Sesión**  
   Implementación de un botón para cerrar sesión, eliminación del token almacenado y redirección a la pantalla de login.  
   [Leer más sobre el Cierre de Sesión](./docs/userlogin/04-logout.md)

5. **Botón de Mensaje de Bienvenida**  
   Adición de un botón en la pantalla de bienvenida que muestra un mensaje de alerta obtenido desde el backend utilizando el token de sesión.  
   [Leer más sobre el Botón de Mensaje de Bienvenida](./docs/userlogin/05-message.md)

## Documentación Proyecto Anterior: PGL-Navigation

1. [Configuración básica del proyecto](./docs/navigation/01-app-configuration.md)  
   Cómo configurar el proyecto desde cero, incluyendo dependencias y estructura inicial.

2. [Reciclaje del Portfolio](./docs/navigation/02-recycle-portfolio.md)  
   Cómo se integró y adaptó un portfolio de un proyecto anterior en esta aplicación.

3. [Pantalla de Bienvenida](./docs/navigation/03-welcome-message.md)  
   Detalles sobre la implementación de la pantalla inicial que da la bienvenida a los usuarios.

4. [Implementación del Drawer y pantalla inicial](./docs/navigation/04-drawer.md)  
   Explicación de cómo se configuró la navegación lateral y la pantalla principal de la aplicación.

5. [Implementación de Lista de Libros](./docs/navigation/05-book-list.md)  
   Información sobre cómo se implementó y gestionó la funcionalidad de la lista de libros.
