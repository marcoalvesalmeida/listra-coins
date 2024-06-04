import clsx from "clsx";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  children: string;
  onPress: () => void;
  customClassName?: string;
}

const LinkButton: React.FC<Props> = ({
  children,
  onPress,
  customClassName = "",
}) => {
  return (
    <TouchableOpacity onPress={onPress} className={customClassName}>
      <Text className={"font-Sora_Regular text-xs text-light-gray"}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default LinkButton;
