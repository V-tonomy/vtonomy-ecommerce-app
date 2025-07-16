import { registerSharedServices } from "@/modules/shared/application/di/shared";
import "reflect-metadata";
import { container as tsyringeContainer } from "tsyringe";

export const container = tsyringeContainer;

registerSharedServices(container);
