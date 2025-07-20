import { injectable } from "tsyringe";
import { ProductRepository } from "../../application/repository/ProductRepository";
import { Product } from "../../domain/entity/Product";
import { sampleProducts } from "../../domain/sample/sampleProducts";

@injectable()
export class ProductRepositoryImpl implements ProductRepository {
  async findAll(): Promise<Product[]> {
    return sampleProducts;
  }
  findById(): Promise<Product | null> {
    throw new Error("Method not implemented.");
  }
  save(product: Product): Promise<Product> {
    throw new Error("Method not implemented.");
  }
  update(id: string, product: Partial<Product>): Promise<Product> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  exists(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
