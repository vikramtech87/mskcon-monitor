export type DbErrorCode = "db/firebase-error" | "db/unknown";

export class DbError extends Error {
  code: DbErrorCode;

  constructor(code: DbErrorCode) {
    super(code);
    this.code = code;
    this.name = "DbError";
  }
}
