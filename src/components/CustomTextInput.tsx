import Theme from "@/styles/Theme";
import clsx from "clsx";
import React, { RefObject } from "react";
import { View, TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {
  icon: JSX.Element;
  customClassName?: string;
  customRef?: RefObject<TextInput>;
}

const CustomTextInput: React.FC<Props> = ({
  icon,
  customClassName = "",
  customRef,
  ...props
}) => {
  return (
    <View
      className={clsx(
        "bg-light h-auto w-full py-3 px-6 flex-row justify-start items-center",
        "rounded-2xl z-10 shadow-[#000000] shadow-2xl",
        customClassName
      )}
    >
      {icon}
      <TextInput
        className={clsx(
          "w-full h-16 px-4 text-dark font-Sora_SemiBold text-lg"
        )}
        placeholderTextColor={Theme.customColors.dark}
        cursorColor={Theme.customColors.dark}
        selectionColor={Theme.customColors.primary}
        ref={customRef}
        {...props}
      />
    </View>
  );
};

export default CustomTextInput;
