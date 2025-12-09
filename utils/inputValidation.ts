import { ValidationResult } from "../types/user";

function validateEmail(email: string): ValidationResult {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, message: "El email no es válido." };
  }
  return { isValid: true, message: "" };
}

function validatePassword(password: string): ValidationResult {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return {
      isValid: false,
      message:
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.",
    };
  }
  return { isValid: true, message: "" };
}

export { validateEmail, validatePassword };
