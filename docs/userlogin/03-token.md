[<- Volver al README](../README.md)

# Modificación para Redirigir al Usuario sin Token

## 1. **Verificación del Token en el Layout Principal**

Se añadió lógica en el archivo [`_layout.tsx`](../../app/_layout.tsx) para verificar si existe un token de usuario guardado en el dispositivo.

- Si no hay token, el usuario es redirigido a las pantallas de `login`, pudiendo desde esta dirigirse también a `register`.
- Si hay token, se muestra el drawer con la pantalla de bienvenida.

**Implementación:**

- Se utilizó el servicio `getToken` de [`storage.ts`](../../services/storage.ts) para comprobar si el token está almacenado.
- Se añadió un estado `loading` para mostrar un indicador de carga mientras se realiza la verificación.

## 2. **Redirección desde el Índice Principal**

En el archivo [`index.tsx`](../../app/index.tsx), se añadió lógica para redirigir al usuario dependiendo de la existencia del token:

- Si no hay token, se redirige a `/login`.
- Si hay token, se redirige a `/(drawer)/welcome`.

```markdown
Cabe destacar que las pantallas del drawer han sido movidas a una carpeta llamada `(drawer)`, mientras que las pantallas de `login` y `register` se han colocado fuera de esa carpeta.
```

## 3. **Login**

En el archivo [`login.tsx`](../../app/login.tsx), se implementó la lógica para:

- Validar las credenciales del usuario.
- Almacenar el token devuelto por la API en el almacenamiento interno del dispositivo utilizando `saveToken`.
- Redirigir al usuario a la pantalla de bienvenida tras un inicio de sesión exitoso.

## 4. **Gestión del Registro de Usuario**

En el archivo [`register.tsx`](../../app/register.tsx), se mantuvo la funcionalidad de registro, permitiendo a los usuarios crear una cuenta.

- Destacamos el botón para redirigir a la pantalla de inicio de sesión si el usuario ya tiene una cuenta.

## 5. **Lógica de la API**

En el archivo [`api.ts`](../../services/api.ts), tenemos las funciones `loginUser` y `registerUser` que utilizamos para interactuar con el backend:

- `loginUser`: Realiza la autenticación y devuelve un token en caso de éxito.
- `registerUser`: Registra un nuevo usuario y maneja los errores del servidor.

- Aquí se corrigió un problema relacionado con el manejo del formato de respuesta del backend.
- El backend devuelve los datos con el siguiente formato:
  ```json
  {
    "message": "User successfully logged.",
    "object": {
      "email": "grillo@email.es",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjcsInVzZXJuYW1lIjoiUGVwaXRvIiwiaWF0IjoxNzY1NjI4OTk2LCJleHAiOjE3NjU2MzI1OTZ9.ofSAiZ5I8V80tSYVVqdMtu6cLYli3aSC39yEB5ckbJA",
      "userId": 7
    },
    "statusCode": 200
  }
  ```
- Anteriormente, no se estaba considerando la clave `object`, lo que provocaba un almacenamiento incorrecto del token.
- Se actualizó el código para extraer correctamente el token desde el campo `object` de la respuesta.

En el archivo [`storage.ts`](../../services/storage.ts), encontramos las funciones:

- `saveToken`: Guarda el token en el almacenamiento interno.
- `getToken`: Recupera el token almacenado.
- `removeToken`: Elimina el token del almacenamiento.

### Capturas de Pantalla

#### Redirección a Login (Sin Token)

![Redirección a Login](../images/userlogin/03-doc/logged.png)

#### Drawer Visible (Con Token)

![Drawer Visible](../images/userlogin/03-doc/logged.png)

### Ficheros Modificados

- **Layout Principal:** [`_layout.tsx`](../../app/_layout.tsx)
- **Índice Principal:** [`index.tsx`](../../app/index.tsx)
- **Pantalla de Login:** [`login.tsx`](../../app/login.tsx)
- **Pantalla de Registro:** [`register.tsx`](../../app/register.tsx)
- **Servicios de API:** [`api.ts`](../../services/api.ts)
- **Gestión del Token:** [`storage.ts`](../../services/storage.ts)

[<- Volver al README](../README.md)
