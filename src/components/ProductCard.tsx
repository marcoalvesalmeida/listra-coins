import React, { useState } from "react";
import { View } from "react-native";
import { Image } from "expo-image";

import clsx from "clsx";
import TextLarge from "./TextLarge";
import TextAux from "./TextAux";
import IconButton, { IconButtonType } from "./IconButton";
import { ProductData } from "@/services/Request/Product";
import { formatCurrencyToShow } from "@/utils/Currency";
import useCheckout from "@/hooks/useCheckout";
import Toast from "react-native-toast-message";

interface Props {
  index: number;
  numColumns: number;
  item: ProductData;
}

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const ProductCard: React.FC<Props> = ({ index, numColumns, item }) => {
  const [buttonType, setButtonType] = useState(IconButtonType.Idle);
  const [loading, setLoading] = useState(false);
  const { buy } = useCheckout();
  async function handleByProduct(product: ProductData) {
    setLoading(true);
    setButtonType(IconButtonType.Loading);
    const { success, message } = await buy(product);
    if (success) {
      setButtonType(IconButtonType.Success);
    } else {
      Toast.show({
        type: "error",
        text1: "Ops!",
        text2: message,
      });
      setButtonType(IconButtonType.Idle);
    }
    setLoading(false);
  }

  return (
    <View
      className={clsx(
        "bg-light rounded-2xl z-11 m-[5%] w-[90%]",
        "shadow-dark shadow-lg self-center items-center",
      )}
    >
      <Image
        className="flex-1 w-full h-28 rounded-t-2xl"
        source={item.image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <View className="w-full py-6 px-4">
        <TextLarge fontSize="text-base">{item.name}</TextLarge>
        <TextAux customClassName="mt-1">
          {`${item.stock.toString()} unidades`}
        </TextAux>
        <View className="mt-1 flex-row justify-between items-end">
          <View>
            <TextLarge regular fontSize="text-base">
              Lc
            </TextLarge>
            <TextLarge fontSize="text-base" customClassName="text-primary">
              {formatCurrencyToShow(item.price)}
            </TextLarge>
          </View>
          <IconButton type={buttonType} onPress={() => handleByProduct(item)} />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
