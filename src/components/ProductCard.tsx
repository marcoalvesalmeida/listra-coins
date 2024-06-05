import React from "react";
import { DimensionValue, View } from "react-native";

import clsx from "clsx";
import TextLarge from "./TextLarge";
import TextAux from "./TextAux";

interface Props {
  index: number;
  numColumns: number;
}

const ProductCard: React.FC<Props> = ({ index, numColumns }) => {
  const getItemStyle = (index: number, numColumns: number) => {
    const margin = 10;
    return {
      margin: margin / 2,
      width: `calc((100% / ${numColumns}) - ${margin}px)` as DimensionValue,
    };
  };

  return (
    <View
      className={clsx(
        "bg-light w-[80%] rounded-2xl py-6 px-4 z-11",
        "shadow-dark shadow-lg self-center items-center",
      )}
      style={getItemStyle(index, numColumns)}
    >
      <TextLarge fontSize="text-base">Notebook L24</TextLarge>
      <TextAux>40 unidades</TextAux>
    </View>
  );
};

export default ProductCard;
