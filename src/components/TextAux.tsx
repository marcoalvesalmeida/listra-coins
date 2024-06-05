import clsx from "clsx";
import React from "react";
import { Text } from "react-native";

interface Props {
  children: string;
  customClassName?: string;
}

const TextAux: React.FC<Props> = ({ children, customClassName = "" }) => {
  return (
    <Text
      className={clsx(
        "text-light-gray text-xs font-Sora_Regular",
        customClassName,
      )}
    >
      {children}
    </Text>
  );
};

export default TextAux;
