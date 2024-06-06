import { api } from "../api";
import { GenericResponse } from "./types";

export interface UserData {
  id: string;
  token: string;
  first_name: string;
  last_name: string;
  email: string;
  balance: number;
}

const ERROR_MESSAGE = "Tivemos um problema, tente novamente.";

export async function auth(
  email: string,
  password: string,
): Promise<GenericResponse<UserData>> {
  try {
    const { status, data } = await api.get(`/users?email=${email}`);

    if (
      status === 200 &&
      data &&
      data.length > 0 &&
      data[0].password === password
    ) {
      delete data.password;
      return {
        success: true,
        data: data[0],
      };
    } else {
      return {
        success: false,
        error: "Email ou senha inválidos! Tente novamente.",
      };
    }
  } catch {
    return {
      success: false,
      error: ERROR_MESSAGE,
    };
  }
}

export async function getBalance(
  id: string,
  price: number,
): Promise<GenericResponse<UserData>> {
  try {
    const { status, data } = await api.get(`/users/${id}`);

    if (status === 200 && data) {
      return {
        success: data.balance >= price,
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
  user: UserData,
): Promise<GenericResponse<UserData>> {
  try {
    const { status } = await api.put(`/users/${user.id}`, user);

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
