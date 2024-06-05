import clsx from "clsx";
import React from "react";
import { Text } from "react-native";

interface Props {
  children: JSX.Element | string;
  fontSize?: "text-sm" | "text-base" | "text-lg" | "text-2xl";
  regular?: boolean;
  light?: boolean;
  customClassName?: string;
}

const TextLarge: React.FC<Props> = ({
  children,
  fontSize = "text-2xl",
  regular = false,
  light = false,
  customClassName = "",
}) => {
  return (
    <Text
      className={clsx(
        fontSize,
        regular ? "font-Sora_Regular" : "font-Sora_SemiBold",
        light ? "text-light" : "text-dark",
        customClassName,
      )}
    >
      {children}
    </Text>
  );
};

export default TextLarge;
