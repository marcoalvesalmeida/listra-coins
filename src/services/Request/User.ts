import { api } from "../api";
import { GenericResponse } from "./types";

export interface UserData {
  id: string;
  token: string;
  first_name: string;
  last_name: string;
  email: string;
}

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
      error: "Tivemos um problema, tente novamente.",
    };
  }
}
