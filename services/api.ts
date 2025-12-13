import { ValidationResult, ValidationResultWithToken } from "../types/user";

const IP = "192.168.1.12";
const PORT = "5001";

export async function registerUser(
  fullname: string,
  email: string,
  pswd: string
): Promise<ValidationResult> {
  try {
    const response = await fetch(`http://${IP}:${PORT}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        pswd,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();

      const validationResult: ValidationResult = {
        isValid: false,
        message: "",
      };

      switch (response.status) {
        case 400:
          validationResult.message =
            "Solicitud inválida. Verifica los datos enviados.";
        case 401:
          validationResult.message =
            "No autorizado. Verifica tus credenciales.";
        case 409:
          validationResult.message =
            "El usuario ya existe. Intenta con otro correo electrónico.";
        case 500:
          validationResult.message =
            "Error interno del servidor. Intenta más tarde.";
        default:
          validationResult.message = "Error desconocido. Intenta más tarde.";
      }

      return validationResult;
    }

    return { isValid: true, message: "¡Registro exitoso!" };
  } catch (error) {
    return {
      isValid: false,
      message: "Error de red. Verifica tu conexión a Internet.",
    };
  }
}

export async function loginUser(
  email: string,
  pswd: string
): Promise<ValidationResultWithToken> {
  try {
    const response = await fetch(`http://${IP}:${PORT}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        pswd,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();

      const validationResult: ValidationResult = {
        isValid: false,
        message: "",
      };

      switch (response.status) {
        case 400:
          validationResult.message =
            "Solicitud inválida. Verifica los datos enviados.";
          break;
        case 401:
          validationResult.message =
            "No autorizado. Verifica tus credenciales.";
          break;
        case 500:
          validationResult.message =
            "Error interno del servidor. Intenta más tarde.";
          break;
        default:
          validationResult.message = "Error desconocido. Intenta más tarde.";
      }

      return validationResult;
    }

    const data = await response.json();
    const token = data.object?.token;

    if (!token) {
      console.error("El token no está presente en la respuesta.");
      return {
        isValid: false,
        message: "No se recibió un token válido del servidor.",
      };
    }

    return {
      isValid: true,
      message: "¡Inicio de sesión exitoso!",
      token: token,
    };
  } catch (error) {
    return {
      isValid: false,
      message: "Error de red. Verifica tu conexión a Internet.",
    };
  }
}
