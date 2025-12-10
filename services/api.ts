import { ValidationResult } from "../types/user";

export async function registerUser(
  fullname: string,
  email: string,
  pswd: string
): Promise<ValidationResult> {
  try {
    const response = await fetch("http://172.20.10.2:5001/auth/register", {
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
