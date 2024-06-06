import clsx from "clsx";
import React from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";

import SuccessSVG from "@/assets/icons/check_circle.svg";
import IdleSVG from "@/assets/icons/shopping_cart.svg";
import Theme from "@/styles/Theme";

export enum IconButtonType {
  Idle = "idle",
  Loading = "loading",
  Success = "success",
}

interface Props {
  type?: IconButtonType;
  onPress: () => void;
  customClassName?: string;
  disabled?: boolean;
}

const IconButton: React.FC<Props> = ({
  type = IconButtonType.Idle,
  onPress,
  customClassName = "",
  disabled = false,
}) => {
  const renderIcon = () => {
    switch (type) {
      case IconButtonType.Success:
        return <SuccessSVG />;
      case IconButtonType.Loading:
        return (
          <ActivityIndicator color={Theme.customColors.light} size="small" />
        );
      default:
        return <IdleSVG />;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={clsx(
        "bg-primary w-8 h-8 rounded-xl items-center justify-center",
        customClassName,
      )}
      disabled={disabled}
    >
      <View
        className={clsx(
          type === IconButtonType.Idle && disabled
            ? "opacity-50"
            : "opacity-100",
        )}
      >
        {renderIcon()}
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
