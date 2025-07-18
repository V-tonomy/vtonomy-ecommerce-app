import { registerSharedServices } from "@/modules/shared/application/di/shared";
import "reflect-metadata";
import { container as tsyringeContainer } from "tsyringe";
import { registerRouteModuleRegistry } from "./modules/routes";

export const container = tsyringeContainer;

registerSharedServices(container);
registerRouteModuleRegistry(container);
