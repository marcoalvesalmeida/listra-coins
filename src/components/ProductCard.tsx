import React from "react";
import { DimensionValue, Text, View } from "react-native";
import { Image } from "expo-image";

import clsx from "clsx";
import TextLarge from "./TextLarge";
import TextAux from "./TextAux";
import IconButton, { IconButtonType } from "./IconButton";

interface Props {
  index: number;
  numColumns: number;
}

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const ProductCard: React.FC<Props> = ({ index, numColumns }) => {
  return (
    <View
      className={clsx(
        "bg-light rounded-2xl z-11 m-[5%] w-[90%]",
        "shadow-dark shadow-lg self-center items-center",
      )}
    >
      <Image
        className="flex-1 w-full h-28 rounded-t-2xl"
        source="https://images.unsplash.com/photo-1491472253230-a044054ca35f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <View className="w-full py-6 px-4">
        <TextLarge fontSize="text-base">Notebook L24</TextLarge>
        <TextAux customClassName="mt-1">40 unidades</TextAux>
        <View className="mt-1 flex-row justify-between items-end">
          <View>
            <TextLarge regular fontSize="text-base">
              Lc
            </TextLarge>
            <TextLarge fontSize="text-base" customClassName="text-primary">
              4.634.047
            </TextLarge>
          </View>
          <IconButton type={IconButtonType.Success} onPress={() => null} />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
