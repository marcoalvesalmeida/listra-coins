import Theme from "@/styles/Theme";
import clsx from "clsx";
import React, { RefObject } from "react";
import { Control, Controller } from "react-hook-form";
import { View, TextInput, TextInputProps } from "react-native";
import TextAux from "./TextAux";

interface Props extends TextInputProps {
  name: string;
  control: Control<any>;
  icon: JSX.Element;
  customClassName?: string;
  customRef?: RefObject<TextInput>;
}

const CustomTextInput: React.FC<Props> = ({
  name,
  control,
  icon,
  customClassName = "",
  customRef,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            className={clsx(
              "bg-light h-auto w-full py-3 px-6 flex-row justify-start items-center",
              "rounded-2xl z-10 shadow-[#000000] shadow-2xl border-error",
              error ? "border-2" : "border-0",
              customClassName,
            )}
          >
            {icon}
            <TextInput
              className={clsx(
                "w-full h-16 px-4 text-dark font-Sora_SemiBold text-lg",
              )}
              placeholderTextColor={Theme.customColors.dark}
              cursorColor={Theme.customColors.dark}
              selectionColor={Theme.customColors.primary}
              ref={customRef}
              onChangeText={onChange}
              {...props}
            />
          </View>
          <TextAux customClassName="w-full text-left mt-2">
            {error?.message}
          </TextAux>
        </>
      )}
    />
  );
};

export default CustomTextInput;
