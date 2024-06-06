import { StateProps, transactionsStore } from "@/store/transactionsStore";
import { create } from "zustand";

const useTransactionsStore = create<StateProps>(transactionsStore);

export default useTransactionsStore;
