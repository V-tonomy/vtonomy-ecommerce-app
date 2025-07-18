import { ModuleRegistry } from "@/app/routes/moduleRegistry";
import { DependencyContainer } from "tsyringe";

export const registerRouteModuleRegistry = (container: DependencyContainer) => {
    container.registerSingleton<ModuleRegistry>("routeRegistry", ModuleRegistry)
}