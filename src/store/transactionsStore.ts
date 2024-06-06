import { TransactionData } from "@/services/Request/Transactions";

export type StateProps = {
  transactions: TransactionData[];
  setTransactions: (transactions: TransactionData[]) => void;
  reset: () => void;
};

export const TRANSACTIONS_INITIAL_VALUE: TransactionData[] = [];

export const transactionsStore = (set) => ({
  transactions: TRANSACTIONS_INITIAL_VALUE,
  setTransactions: (transactions: TransactionData[]) =>
    set(() => ({
      transactions: transactions,
    })),
  reset: () => {
    set({
      transactions: TRANSACTIONS_INITIAL_VALUE,
    });
  },
});
