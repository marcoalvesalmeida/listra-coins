import React from "react";
import { View, Text, Dimensions } from "react-native";

import SafeAreaContent from "@/components/SafeAreaContent";
import Header from "@/components/Header";
import BalnceCard from "@/components/BalanceCard";

const Home: React.FC = () => {
  return (
    <SafeAreaContent>
      <>
        <Header />
        <View className="bg-light-secondary flex-1 rounded-t-3xl z-10 mt-12">
          <BalnceCard />
        </View>
      </>
    </SafeAreaContent>
  );
};

export default Home;
