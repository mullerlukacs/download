type LogLevel = "info" | "warn" | "error";

export function log(level: LogLevel, message: string, context: Record<string, unknown> = {}) {
  const entry = { level, message, context, timestamp: new Date().toISOString(), service: "mediasave-pro" };
  console[level === "error" ? "error" : level === "warn" ? "warn" : "log"](JSON.stringify(entry));
}
