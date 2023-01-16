export default interface PagedData<T> {
  page: number;
  size: number;
  count: number;
  totalPages: number;
  totalCount: number;
  data: T[];
}
