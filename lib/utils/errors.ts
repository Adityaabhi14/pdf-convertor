export class AppError extends Error {
  constructor(
    message: string,
    public status = 500,
    public code = "APP_ERROR",
    public details?: Record<string, unknown>
  ) {
    super(message);
    this.name = "AppError";
  }
}

export function toErrorResponse(error: unknown) {
  if (error instanceof AppError) {
    return {
      status: error.status,
      body: {
        ok: false,
        code: error.code,
        message: error.message,
        details: error.details ?? null
      }
    };
  }

  return {
    status: 500,
    body: {
      ok: false,
      code: "UNKNOWN_ERROR",
      message: "Unexpected error occurred",
      details: null
    }
  };
}
