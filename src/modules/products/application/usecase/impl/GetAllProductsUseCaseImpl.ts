import { Product } from "../../../domain/entity/Product";
import { inject, injectable } from "tsyringe";
import * as ProductRepository from "../../repository/ProductRepository";

@injectable()
export class GetAllProductsUseCase implements GetAllProductsUseCase {
  constructor(
    @inject(ProductRepository.TYPES.ProductRepository)
    private productRepository: ProductRepository.ProductRepository,
  ) {}
  async execute(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }
}
