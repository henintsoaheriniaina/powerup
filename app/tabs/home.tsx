import Categories from "@/components/Categories";
import Header from "@/components/Header";
import HorizontalGrid from "@/components/HorizontalGrid";
import SearchInput from "@/components/SearchInput";
import { getRandomProducts, PRODUCTS } from "@/constants/products";
import { FlatList, Text, View } from "react-native";
const home = () => {
  return (
    <View className="flex-1 bg-baseGray-light">
      <FlatList
        data={PRODUCTS.slice(0, 3)}
        renderItem={({ item }) => <Text className="hidden">{item.id}</Text>}
        ListHeaderComponent={() => (
          <View>
            <Header />
            <SearchInput />
            <Categories />
            <HorizontalGrid
              products={getRandomProducts(5)}
              title="Best Seller"
            />
            <HorizontalGrid
              products={getRandomProducts(5)}
              title="Nouveautés"
            />
            <View className="h-20"></View>
          </View>
        )}
      />
    </View>
  );
};
export default home;
