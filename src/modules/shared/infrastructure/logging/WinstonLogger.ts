import { injectable } from "tsyringe";
import winston from "winston";
import { ILogger, LogContext } from "./ILogger";

@injectable()
export class WinstonLogger implements ILogger {
    private logger: winston.Logger

    constructor() {
        this.logger = winston.createLogger({
            level: process.env["LOG_LEVEL"] || 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.errors({stack: true}),
                winston.format.json()
            ),
            transports: [
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.simple()
                    ),
                }),
            ],
        })
    }

    debug(message: string, context?: LogContext): void {
        this.logger.debug(message, context)
    }

    info(message: string, context?: LogContext): void {
        this.logger.info(message, context)
    }

    warn(message: string, context?: LogContext): void {
        this.logger.warn(message, context)
    }

    error(message: string, context?: LogContext): void {
        this.logger.error(message, context)
    }

    setLevel(level: "debug" | "info" | "warn" | "error"): void {
        this.logger.level = level
    }

    child(context: LogContext): ILogger {
        const childLogger = this.logger.child(context)
        return new WinstonChildLogger(childLogger)
    }

    withContext(context: LogContext): ILogger {
        return this.child(context)
    }
    startTimer(label: string): () => void {
        const startTime = Date.now()
        return () => {
            const duration = Date.now() - startTime
            this.info(`Timer: ${label}`, { duration, label })
        }
    }
}

class WinstonChildLogger implements ILogger {

    constructor(private logger: winston.Logger) {}

    debug(message: string, context?: LogContext): void {
        this.logger.debug(message, context)
    }

    info(message: string, context?: LogContext): void {
        this.logger.info(message, context)
    }

    warn(message: string, context?: LogContext): void {
        this.logger.warn(message, context)
    }

    error(message: string, context?: LogContext): void {
        this.logger.error(message, context)
    }

    setLevel(level: "debug" | "info" | "warn" | "error"): void {
        this.logger.level = level
    }
}