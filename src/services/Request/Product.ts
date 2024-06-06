import { api } from "../api";
import { GenericResponse } from "./types";

export interface ProductData {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
}

export interface ResponseData {
  first: number;
  prev: number | null;
  next: number;
  last: number;
  pages: number;
  items: number;
  data: ProductData[];
}

const ERROR_MESSAGE = "Tivemos um problema, tente novamente.";

export async function list(
  page: number,
  perPage: number,
): Promise<GenericResponse<ResponseData>> {
  try {
    const { status, data } = await api.get(
      `/products?_page=${page}&_per_page=${perPage}`,
    );

    if (status === 200 && data && data?.data.length > 0) {
      return {
        success: true,
        data: data,
      };
    } else {
      return {
        success: false,
        error: ERROR_MESSAGE,
      };
    }
  } catch {
    return {
      success: false,
      error: ERROR_MESSAGE,
    };
  }
}
