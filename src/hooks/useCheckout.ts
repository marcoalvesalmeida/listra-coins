import { getBalance, update as updateUser } from "@/services/Request/User";
import useProductsStore from "./useProductsStore";
import {
  ProductData,
  getStock,
  update as updateProduct,
} from "@/services/Request/Product";
import useUserStore from "./useUserStore";
import { saveUser } from "@/services/Persistence/Storage";
import useTransactions from "./useTransactions";
import { schedulePushNotification } from "@/services/Messaging/Notifications";

interface Data {
  success: boolean;
  message?: string;
}

const useCheckout = () => {
  const { update: updateProductStore } = useProductsStore();
  const { user, setUser } = useUserStore();
  const { newTransaction } = useTransactions();

  const buy = async (product: ProductData): Promise<Data> => {
    const { success: stockSuccess, data: stockData } = await getStock(
      product.id,
    );
    if (!stockSuccess) {
      return {
        success: false,
        message: "Produto Esgotado!",
      };
    }

    const { success: balanceSuccess, data: dataBalance } = await getBalance(
      user.id,
      product.price,
    );
    if (!balanceSuccess) {
      return {
        success: false,
        message: "Saldo insuficiente!",
      };
    }

    const newProductData = {
      ...product,
      stock: stockData.stock - 1,
    };

    const { success: updateSuccess, error } =
      await updateProduct(newProductData);
    if (updateSuccess) {
      const newUserData = {
        ...user,
        balance: dataBalance.balance - product.price,
      };
      const { success: userSuccess } = await updateUser(newUserData);

      if (!userSuccess) {
        const { success: rollbackProductSuccess, error: rollbackProductError } =
          await updateProduct({
            ...product,
            stock: stockData.stock,
          });

        return {
          success: rollbackProductSuccess,
          message: rollbackProductError,
        };
      }

      schedulePushNotification(
        `O ${newProductData.name} está à caminho! 🥳`,
        "🎁 Parabéns, sua compra foi confirmada!",
      );

      setUser(newUserData);
      await saveUser(newUserData);
      updateProductStore(newProductData);

      await newTransaction({
        productId: product.id,
        productName: product.name,
        amount: product.price,
        userId: user.id,
        createdAt: "",
        id: "",
      });

      return {
        success: true,
      };
    }
    return {
      success: false,
      message: error,
    };
  };

  return { buy };
};

export default useCheckout;
