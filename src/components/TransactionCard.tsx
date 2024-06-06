import React from "react";
import { View } from "react-native";

import clsx from "clsx";
import TextLarge from "./TextLarge";
import TextAux from "./TextAux";
import { TransactionData } from "@/services/Request/Transactions";
import { formatCurrencyToShow } from "@/utils/Currency";

interface Props {
  item: TransactionData;
}

const TransactionCard: React.FC<Props> = ({ item }) => {
  return (
    <View
      className={clsx(
        "bg-light rounded-2xl z-11 m-[5%] w-[90%]",
        "shadow-dark shadow-lg self-center items-center",
      )}
    >
      <View className="w-full py-6 px-4">
        <View className="flex-row justify-between">
          <TextLarge fontSize="text-base">{item.productName}</TextLarge>
          <View className="flex-row justify-center items-end">
            <TextLarge
              regular
              fontSize="text-sm"
              customClassName="text-primary"
            >
              {`Lc `}
            </TextLarge>
            <TextLarge fontSize="text-base" customClassName="text-primary">
              {formatCurrencyToShow(item.amount)}
            </TextLarge>
          </View>
        </View>
        <TextAux customClassName="mt-1">{item.createdAt}</TextAux>
      </View>
    </View>
  );
};

export default TransactionCard;
