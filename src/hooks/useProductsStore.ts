import { StateProps, productsStore } from "@/store/productsStore";
import { create } from "zustand";

const useProductsStore = create<StateProps>(productsStore);

export default useProductsStore;
