export class ValidationError extends Error {
  public fieldErrors: Record<string, string[] | undefined>;

  constructor(message: string, fieldErrors: Record<string, string[] | undefined>) {
    super(message);
    this.name = 'ValidationError';
    this.fieldErrors = fieldErrors;
  }
}