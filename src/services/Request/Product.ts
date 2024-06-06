import { api } from "../api";
import { GenericResponse, PaginateResponseData } from "./types";

export interface ProductData {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
}

const ERROR_MESSAGE = "Tivemos um problema, tente novamente.";

export async function list(
  page: number,
  perPage: number,
): Promise<GenericResponse<PaginateResponseData<ProductData[]>>> {
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

export async function getStock(
  id: string,
): Promise<GenericResponse<ProductData>> {
  try {
    const { status, data } = await api.get(`/products/${id}`);

    if (status === 200 && data) {
      return {
        success: data.stock >= 1,
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

export async function update(
  product: ProductData,
): Promise<GenericResponse<ProductData>> {
  try {
    const { status } = await api.put(`/products/${product.id}`, product);

    if (status === 200) {
      return {
        success: true,
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
