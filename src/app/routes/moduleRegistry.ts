import { injectable } from "tsyringe"

interface ModuleRoute {
    path: string
    label: string
    icon?: string
    component?: string
    children?: string
}

interface Module {
    name: string
    routes: ModuleRoute[]
}

@injectable()
export class ModuleRegistry {
    private modules: Map<string, Module> = new Map();

    register(module: Module) {
        this.modules.set(module.name, module)
    }

    getAllRoutes(): ModuleRoute[] {
        const routes: ModuleRoute[] = [];
        this.modules.forEach(module => {
            routes.push(...module.routes);
        });
        return routes;
    }

    getModuleRoutes(moduleName: string) {
        return this.modules.get(moduleName)?.routes || []
    }
}
