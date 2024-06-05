import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children: JSX.Element;
}

const SafeAreaContent: React.FC<Props> = ({ children }) => {
  return <SafeAreaView className="flex-1 bg-primary">{children}</SafeAreaView>;
};

export default SafeAreaContent;
