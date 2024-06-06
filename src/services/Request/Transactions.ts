import { api } from "../api";
import { GenericResponse } from "./types";

export interface TransactionData {
  id: string;
  amount: number;
  userId: string;
  productId: string;
  productName: string;
  createdAt: string;
}

const ERROR_MESSAGE = "Tivemos um problema, tente novamente.";

export async function list(
  userId: string,
): Promise<GenericResponse<TransactionData[]>> {
  try {
    const { status, data } = await api.get(`/transactions?userId=${userId}`);

    if (status === 200 && data && data?.length > 0) {
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

export async function create({
  amount,
  userId,
  productId,
  productName,
  createdAt,
}: TransactionData): Promise<GenericResponse<TransactionData>> {
  try {
    const { status } = await api.post(`/transactions`, {
      amount,
      userId,
      productId,
      productName,
      createdAt,
    });

    if (status === 201) {
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
