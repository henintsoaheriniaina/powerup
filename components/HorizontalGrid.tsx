import { PRODUCTTYPE } from "@/constants/products";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";
import ProductItem from "./ProductItem";
type PROPS = {
  products: PRODUCTTYPE[];
  title: string;
  count?: number;
  link?: string;
};
const HorizontalGrid = ({ products, title, count, link }: PROPS) => {
  return (
    <View className="mt-8">
      <View className=" px-4 flex-row justify-between items-center ">
        <Text className="w-1/2 text-baseViolet text-xl font-PoppinsSemiBold">
          {title} {count && `(${count})`}
        </Text>
        {link && (
          <View className="w-1/2 ">
            <Link
              href={`/categories/${link}`}
              className=" text-right text-baseBlack font-PoppinsRegular"
            >
              Voir Tout
            </Link>
          </View>
        )}
      </View>

      <View className="bg-baseGray-light py-5 mt-4">
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ProductItem product={item} index={index} />
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{
            alignItems: "stretch",
          }}
        />
      </View>
    </View>
  );
};
export default HorizontalGrid;
