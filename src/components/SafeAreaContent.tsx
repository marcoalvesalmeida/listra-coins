import clsx from "clsx";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  children: JSX.Element;
}

const SafeAreaContent: React.FC<Props> = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className={clsx("flex-1 bg-primary", `pt-[${Math.round(insets.top)}px]`)}
    >
      {children}
    </View>
  );
};

export default SafeAreaContent;
