export interface GenericResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
