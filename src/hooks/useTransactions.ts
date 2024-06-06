import {
  TransactionData,
  list,
  create as createTransaction,
} from "@/services/Request/Transactions";
import useTransactionsStore from "./useTransactionsStore";
import { saveTransactions } from "@/services/Persistence/Storage";
import useUserStore from "./useUserStore";

interface Data {
  success: boolean;
  message?: string;
}

const useTransactions = () => {
  const { transactions, setTransactions } = useTransactionsStore();
  const userId = useUserStore((state) => state.user.id);

  const loadTransactions = async (): Promise<Data> => {
    const { success, data, error } = await list(userId);
    if (success && data) {
      setTransactions(data);
      await saveTransactions(data);
      return {
        success,
      };
    }
    return {
      success: false,
      message: error,
    };
  };

  const newTransaction = async (newTransaction: TransactionData) => {
    const uniqueTransaction = {
      ...newTransaction,
      id: Math.random().toString(),
      createdAt: new Date().toLocaleString(),
    };
    const newTransactionsData = [...transactions, uniqueTransaction];

    await createTransaction(uniqueTransaction);
    setTransactions(newTransactionsData);
    saveTransactions(newTransactionsData);
  };

  return { loadTransactions, newTransaction };
};

export default useTransactions;
