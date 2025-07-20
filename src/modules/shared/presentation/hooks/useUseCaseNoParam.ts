import { useCallback, useMemo, useState } from "react";
import { UseCaseNoParam } from "../../application/usecase/UseCase";
import { container } from "tsyringe";

// Generic hook for use cases without parameters
export function useUseCaseNoParam<T, TUseCase extends UseCaseNoParam<T>>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useCaseClass: new (...args: any[]) => TUseCase,
) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const useCase = useMemo(() => {
    return container.resolve(useCaseClass);
  }, [useCaseClass]);

  const execute = useCallback(async () => {
    setLoading(true);
    try {
      const result = await useCase.execute();
      setData(result);
      return result;
    } finally {
      setLoading(false);
    }
  }, [useCase]);

  const reset = useCallback(() => {
    setData(null);
    setLoading(false);
  }, []);

  return {
    execute,
    loading,
    data,
    reset,
  };
}
