export class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly payload: Record<string, string> | null;

  constructor(message: string, statusCode = 400, payload = null) {
    this.message = message;

    this.statusCode = statusCode;

    this.payload = payload;
  }
}
