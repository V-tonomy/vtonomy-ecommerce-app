export interface UseCaseNoParam<T> {
  execute(): Promise<T>;
}
