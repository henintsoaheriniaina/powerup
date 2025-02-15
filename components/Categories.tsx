import { CATEGORIES } from "@/constants/categories";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";
import CategoryItem from "./CategoryItem";
const Categories = () => {
  return (
    <View className="mt-10">
      <View className=" px-4 flex-row justify-between items-center ">
        <Text className="w-1/2 text-baseViolet text-xl font-PoppinsSemiBold">
          Catégories
        </Text>
        <View className="w-1/2 ">
          <Link
            href="/categories"
            className=" text-right text-baseBlack font-PoppinsRegular"
          >
            Voir Tout
          </Link>
        </View>
      </View>
      <View className="bg-baseGray-light py-5  mt-4">
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.slug}
          renderItem={({ item, index }) => (
            <CategoryItem category={item} index={index} />
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    </View>
  );
};
export default Categories;
