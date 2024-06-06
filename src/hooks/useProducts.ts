import useProductsStore from "./useProductsStore";
import { list } from "@/services/Request/Product";

const ITEMS_PER_PAGE = 6;

interface Data {
  success: boolean;
  message?: string;
}

const useProducts = () => {
  const { setSize, add } = useProductsStore();

  const loadProductsByPage = async (page: number): Promise<Data> => {
    const { success, data, error } = await list(page, ITEMS_PER_PAGE);
    if (success && data) {
      add(data.data);
      setSize(data.items);
      return {
        success,
      };
    }
    return {
      success: false,
      message: error,
    };
  };

  return { loadProductsByPage };
};

export default useProducts;
