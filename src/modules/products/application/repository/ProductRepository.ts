import { container } from "tsyringe";
import { Product } from "../../domain/entity/Product";
import { ProductRepositoryImpl } from "../../infrastructure/repository/ProductRepositoryImpl";

export const TYPES = {
  ProductRepository: 'ProductRepository',
} as const;


export interface ProductRepository {
    findAll(): Promise<Product[]>
    findById(): Promise<Product | null>
    save(product: Product): Promise<Product>
    update(id: string, product: Partial<Product>): Promise<Product>
    delete(id: string): Promise<void>
    exists(id: string): Promise<boolean>
}

container.register("ProductRepository", {useClass: ProductRepositoryImpl})
