import { AppError } from "@/lib/utils/errors";

export function getEnv(name: string, required = true) {
  const value = process.env[name];
  if (!value && required) {
    throw new AppError(`Missing environment variable: ${name}`, 500, "MISSING_ENV");
  }
  return value ?? "";
}
