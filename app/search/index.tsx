import BackButton from "@/components/BackButton";
import CartButton from "@/components/CartButton";
import VerticalProductItem from "@/components/VerticalProductItem";
import Colors from "@/constants/Colors";
import { PRODUCTS, PRODUCTTYPE } from "@/constants/products";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  TextInput,
  View,
} from "react-native";

const PAGE_SIZE = 10;

const index = () => {
  const [products, setProducts] = useState<PRODUCTTYPE[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<PRODUCTTYPE[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

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
      const updatedProducts = [...products, ...newProducts];
      setProducts(updatedProducts);
      filterProducts(updatedProducts, searchQuery);
      setPage(page + 1);
      setLoading(false);
    }, 1000);
  };

  const filterProducts = (productsList: PRODUCTTYPE[], query: string) => {
    const filtered = productsList.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    filterProducts(products, text);
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
    <SafeAreaView className="bg-baseGray-light h-full  px-4">
      <View className="relative flex-1 mt-24">
        <View className="flex-row items-center justify-between gap-8">
          <BackButton />
          <View
            className={`${
              isFocused ? "border-baseViolet" : "border-transparent"
            }  px-4 rounded-lg border-2 bg-white flex-1 `}
          >
            <TextInput
              onChangeText={handleSearch}
              value={searchQuery}
              placeholder="Rechercher un produit"
              placeholderTextColor={Colors.baseGray.dark}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </View>
        </View>

        <View className="mt-4 ">
          <FlatList
            data={filteredProducts}
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
        <CartButton />
      </View>
    </SafeAreaView>
  );
};

export default index;
