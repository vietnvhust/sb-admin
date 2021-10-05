export interface IPagination<T> {
  total: number;
  page: number;
  items: T[];
}