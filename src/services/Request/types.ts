export interface GenericResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PaginateResponseData<T> {
  first: number;
  prev: number | null;
  next: number;
  last: number;
  pages: number;
  items: number;
  data: T;
}
