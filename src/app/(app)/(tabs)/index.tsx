import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import SafeAreaContent from "@/components/SafeAreaContent";
import ProductCard from "@/components/ProductCard";
import useProducts from "@/hooks/useProducts";
import useProductsStore from "@/hooks/useProductsStore";
import DefaultLayout from "@/components/DefaultLayout";

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const { loadProductsByPage } = useProducts();
  const { products, size } = useProductsStore();

  useEffect(() => {
    loadProductsByPage(page);
  }, [page]);

  return (
    <SafeAreaContent>
      <DefaultLayout>
        <View className="w-full h-full pt-8 px-4">
          {size > 0 && products?.length > 0 && (
            <FlashList
              data={products}
              renderItem={({ item, index }) => (
                <ProductCard index={index} numColumns={3} item={item} />
              )}
              keyExtractor={(item) => item.id}
              numColumns={2}
              estimatedItemSize={size}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 200 }}
              onEndReached={() => setPage((state) => state + 1)}
            />
          )}
        </View>
      </DefaultLayout>
    </SafeAreaContent>
  );
};

export default Home;
