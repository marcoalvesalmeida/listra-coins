import React from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import DefaultLayout from "@/components/DefaultLayout";
import SafeAreaContent from "@/components/SafeAreaContent";
import TransactionCard from "@/components/TransactionCard";
import useTransactionsStore from "@/hooks/useTransactionsStore";

const Wallet: React.FC = () => {
  const { transactions } = useTransactionsStore();
  return (
    <SafeAreaContent>
      <DefaultLayout>
        <View className="w-full h-full pt-8 px-4">
          {transactions?.length > 0 && (
            <FlashList
              data={transactions}
              renderItem={({ item, index }) => <TransactionCard item={item} />}
              keyExtractor={(item) => item.id}
              numColumns={1}
              estimatedItemSize={transactions.length}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 200 }}
            />
          )}
        </View>
      </DefaultLayout>
    </SafeAreaContent>
  );
};

export default Wallet;
