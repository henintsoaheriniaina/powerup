import { PRODUCTTYPE } from "@/constants/products";
import { FlatList, View } from "react-native";
import BackHeader from "./BackHeader";
import VerticalProductItem from "./VerticalProductItem";
type PROPS = {
  products: PRODUCTTYPE[];
  title: string;
  count: number;
};
const VerticalGrid = ({ products, title, count }: PROPS) => {
  return (
    <View className="mt-8">
      <View className="p-4">
        <BackHeader title={`${title} (${count})`} />
      </View>
      <View className="bg-baseGray-light ">
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <VerticalProductItem product={item} index={index} />
          )}
          contentContainerClassName="items-center pb-40 "
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};
export default VerticalGrid;
