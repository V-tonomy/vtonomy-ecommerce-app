import { UseCaseNoParam } from "@/modules/shared/application/usecase/UseCase";
import { Product } from "../../domain/entity/Product";

export type GetAllProductsUseCase = UseCaseNoParam<Product[]>;
