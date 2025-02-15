import BackHeader from "@/components/BackHeader";
import CategoryLine from "@/components/CategoryLine";
import { CATEGORIES } from "@/constants/categories";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const index = () => {
  return (
    <SafeAreaView>
      <View className="p-4">
        <BackHeader title="Parcourir par catégorie" />
      </View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.slug}
        renderItem={({ item, index }) => (
          <CategoryLine category={item} index={index} />
        )}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="pb-20"
      />
    </SafeAreaView>
  );
};
export default index;
