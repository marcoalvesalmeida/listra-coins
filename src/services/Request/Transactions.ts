import { api } from "../api";
import { GenericResponse } from "./types";

export interface TransactionData {
  id: string;
  amount: number;
  userId: string;
  productId: string;
  createdAt: string;
}

const ERROR_MESSAGE = "Tivemos um problema, tente novamente.";

export async function create(
  amount: number,
  userId: string,
  productId: string,
): Promise<GenericResponse<TransactionData>> {
  try {
    const { status } = await api.post(`/transactions`, {
      amount,
      userId,
      productId,
      createdAt: new Date().toDateString(),
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
