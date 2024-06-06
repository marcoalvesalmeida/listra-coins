import useUserStore from "@/hooks/useUserStore";
import {
  loadUser,
  removeUser,
  saveTransactions,
  saveUser,
} from "@/services/Persistence/Storage";
import { list as listTransactions } from "@/services/Request/Transactions";
import { auth } from "@/services/Request/User";
import { createToken, validateToken } from "@/services/Security/Token";
import { router } from "expo-router";
import useTransactionsStore from "./useTransactionsStore";

interface Data {
  success: boolean;
  message?: string;
}

const useAuth = () => {
  const { user, setUser, reset } = useUserStore();
  const { setTransactions } = useTransactionsStore();

  const hasSession = async () => {
    let userLocal;
    if (user?.id) {
      userLocal = user;
    } else {
      userLocal = await loadUser();
      setUser(userLocal);
    }
    if (await validateToken(userLocal?.token)) {
      return true;
    } else {
      return false;
    }
  };

  const login = async (email: string, password: string): Promise<Data> => {
    const { success, data, error } = await auth(email, password);
    if (success && data) {
      const token = createToken(email);
      const userData = {
        ...data,
        token,
      };
      setUser(userData);
      saveUser(userData);
      const { success: transactionsSuccess, data: transactionsData } =
        await listTransactions(userData.id);

      if (transactionsSuccess && transactionsData) {
        setTransactions(transactionsData);
        saveTransactions(transactionsData);
      }
      return {
        success,
      };
    }
    return {
      success: false,
      message: error,
    };
  };

  const logout = () => {
    reset();
    removeUser();
    router.replace("login");
  };

  return { login, logout, hasSession };
};

export default useAuth;
