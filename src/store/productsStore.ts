import { ProductData } from "@/services/Request/Product";

export type StateProps = {
  size: number;
  setSize: (size: number) => void;
  products: ProductData[];
  setProducts: (products: ProductData[]) => void;
  add: (products: ProductData[]) => void;
  reset: () => void;
};

export const PRODUCTS_INITIAL_VALUE = [];

export const productsStore = (set) => ({
  size: 0,
  setSize: (size: number) =>
    set(() => ({
      size: size,
    })),
  products: PRODUCTS_INITIAL_VALUE,
  setProducts: (products: ProductData[]) =>
    set(() => ({
      products: products,
    })),
  add: (products: ProductData[]) =>
    set((state) => ({
      products: [...state.products, ...products],
    })),
  reset: () => {
    set({
      products: PRODUCTS_INITIAL_VALUE,
    });
  },
});
