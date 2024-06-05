import React from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import SafeAreaContent from "@/components/SafeAreaContent";
import Header from "@/components/Header";
import BalanceCard from "@/components/BalanceCard";
import ProductCard from "@/components/ProductCard";

const DATA = [
  {
    name: "Notebook L24",
    stock: 40,
  },
  {
    name: "Notebook L24",
    stock: 40,
  },
  {
    name: "Notebook L24",
    stock: 40,
  },
];

const Home: React.FC = () => {
  return (
    <SafeAreaContent>
      <>
        <Header />
        <View className="bg-light-secondary flex-1 rounded-t-3xl z-10 mt-12">
          <BalanceCard />
          <View className="w-full h-full mt-8 px-8">
            <FlashList
              data={DATA}
              renderItem={({ item, index }) => (
                <ProductCard index={index} numColumns={3} />
              )}
              numColumns={2}
              estimatedItemSize={3}
            />
          </View>
        </View>
      </>
    </SafeAreaContent>
  );
};

export default Home;
