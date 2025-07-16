export interface LogContext {
  [key: string]: unknown;
  userId?: string;
  sessionId?: string;
  correlationId?: string;
  component?: string;
  error?: Error;
  duration?: number;
  metadata?: Record<string, unknown>;
}

export interface ILogger {
  debug(message: string, context?: LogContext): void;
  info(message: string, context?: LogContext): void;
  warn(message: string, context?: LogContext): void;
  error(message: string, context?: LogContext): void;

  setLevel(level: "debug" | "info" | "warn" | "error"): void;

  child?(context: LogContext): ILogger;
  flush?(): Promise<void>;

  withContext?(context: LogContext): ILogger;

  startTimer?(label: string): () => void;
}

export interface ErrorLogContext extends LogContext {
  error: Error;
  stack?: string;
  statusCode?: string;
}

export interface PerformanceLogContext extends LogContext {
  duration: number;
  operation: string;
  success: boolean;
}

export interface UserActionLogContext extends LogContext {
  userId: string;
  action: string;
  resource?: string;
  result?: "success" | "failure";
}
