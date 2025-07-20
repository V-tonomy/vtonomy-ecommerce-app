import { useUseCaseNoParam } from "@/modules/shared/presentation/hooks/useUseCaseNoParam";
import { GetAllProductsUseCase } from "../../application/usecase/impl/GetAllProductsUseCaseImpl";

export function useProductUseCases() {
  const getAllProducts = useUseCaseNoParam(GetAllProductsUseCase);

  return {
    getAllProducts,
  };
}
