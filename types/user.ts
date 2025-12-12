export interface ValidationResult {
  isValid: boolean;
  message: string;
}

export interface ValidationResultWithToken extends ValidationResult {
  token?: string;
}
