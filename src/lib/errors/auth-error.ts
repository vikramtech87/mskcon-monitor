export type LoginErrorCode =
  | "auth/invalid-credential"
  | "auth/unknown"
  | "unknown";

export class AuthError extends Error {}

export class LoginError extends AuthError {
  code: LoginErrorCode;

  constructor(code: LoginErrorCode) {
    super(code);
    this.code = code;
    this.name = "LoginError";
  }
}
