import { DependencyContainer } from "tsyringe";
import { ILogger } from "../../infrastructure/logging/ILogger";
import { WinstonLogger } from "../../infrastructure/logging/WinstonLogger";

export function registerSharedServices(container: DependencyContainer) {
    container.registerSingleton<ILogger>('ILogger', WinstonLogger)
}