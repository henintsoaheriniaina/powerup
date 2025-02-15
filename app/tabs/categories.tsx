import SearchInput from "@/components/SearchInput";
import VerticalProductItem from "@/components/VerticalProductItem";
import Colors from "@/constants/Colors";
import { PRODUCTS, PRODUCTTYPE } from "@/constants/products";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

const PAGE_SIZE = 10;

const Categories = () => {
  const [products, setProducts] = useState<PRODUCTTYPE[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    loadMoreProducts();
  }, []);

  const loadMoreProducts = () => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      const newProducts = PRODUCTS.slice(
        page * PAGE_SIZE,
        (page + 1) * PAGE_SIZE
      );
      setProducts([...products, ...newProducts]);
      setPage(page + 1);
      setLoading(false);
    }, 2000);
  };

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <ActivityIndicator
        size="large"
        color={Colors.baseViolet}
        className="mt-8"
      />
    );
  };
  return (
    <View className="flex-1 bg-baseGray-light pt-8">
      <SearchInput />
      <View className="mt-8">
        <View className="bg-baseGray-light">
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <VerticalProductItem product={item} index={index} />
            )}
            contentContainerClassName="items-center pb-40"
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            onEndReached={loadMoreProducts}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
          />
        </View>
      </View>
    </View>
  );
};

export default Categories;
