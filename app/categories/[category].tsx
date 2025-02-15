import CartButton from "@/components/CartButton";
import VerticalGrid from "@/components/VerticalGrid";
import { CATEGORIES, CATEGORYTYPE } from "@/constants/categories";
import { PRODUCTS, PRODUCTTYPE } from "@/constants/products";

import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const OneCategory = () => {
  const [currentCategory, setCurrentCategory] = useState<
    CATEGORYTYPE | undefined
  >(undefined);
  const [filteredProducts, setFilteredProducts] = useState<PRODUCTTYPE[]>([]);
  const { category } = useLocalSearchParams<{ category: string }>();

  useEffect(() => {
    if (category) {
      const categoryData = CATEGORIES.find((c) => c.slug === category);
      if (categoryData) {
        setCurrentCategory(categoryData);
        setFilteredProducts(
          PRODUCTS.filter((p) => p.category === categoryData.slug)
        );
      }
    }
  }, [category]);
  if (!currentCategory) {
    return null;
  }

  return (
    <SafeAreaView className="bg-baseGray-light h-full relative">
      <VerticalGrid
        count={filteredProducts.length}
        title={currentCategory.name}
        products={filteredProducts}
      />
      <CartButton />
    </SafeAreaView>
  );
};

export default OneCategory;
