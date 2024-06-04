import clsx from "clsx";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  children: string;
  onPress: () => void;
  customClassName?: string;
  fontSize?: "text-sm" | "text-lg";
}

const CustomButton: React.FC<Props> = ({
  children,
  onPress,
  customClassName = "",
  fontSize = "text-lg",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={clsx(
        "bg-primary rounded-full py-3 px-6 items-center justify-center",
        customClassName
      )}
    >
      <Text className={clsx("font-Sora_SemiBold text-light", fontSize)}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
