import React from "react";
import { View } from "react-native";
import Header from "./Header";
import BalanceCard from "./BalanceCard";

interface Props {
  children: JSX.Element;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <View className="bg-light-secondary flex-1 rounded-t-3xl z-10 mt-12">
        <BalanceCard />
        {children}
      </View>
    </>
  );
};

export default DefaultLayout;
