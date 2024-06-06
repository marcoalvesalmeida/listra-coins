import { ProductData } from "@/services/Request/Product";

export type StateProps = {
  size: number;
  setSize: (size: number) => void;
  products: ProductData[];
  setProducts: (products: ProductData[]) => void;
  add: (products: ProductData[]) => void;
  update: (product: ProductData) => void;
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
    set((state) => {
      const uniqueProducts = products.filter((newProduct) => {
        // Verificar se o ID do novo produto já existe no estado atual
        return !state.products.some(
          (existingProduct) => existingProduct.id === newProduct.id,
        );
      });

      return {
        products: [...state.products, ...uniqueProducts],
      };
    }),
  update: (product: ProductData) =>
    set((state) => {
      const newState = state.products.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            stock: product.stock,
          };
        }
        return item;
      });

      return {
        products: newState,
      };
    }),
  reset: () => {
    set({
      products: PRODUCTS_INITIAL_VALUE,
    });
  },
});
