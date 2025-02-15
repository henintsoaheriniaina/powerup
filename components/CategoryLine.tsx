import { CATEGORYTYPE } from "@/constants/categories";
import Colors from "@/constants/Colors";
import icons from "@/constants/icons";
import { router } from "expo-router";
import { MotiView } from "moti";
import { Image, Text, TouchableOpacity, View } from "react-native";
type PROPS = {
  category: CATEGORYTYPE;
  index: number;
};
const CategoryLine = ({ category, index = 1 }: PROPS) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(`/categories/${category.slug}`)}
    >
      <MotiView
        from={{ opacity: 0, translateX: -20 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ delay: index * 100 + 300 }}
        className="mx-3 items-center gap-8 mb-4 justify-between bg-white py-2 px-4 rounded-lg flex-row "
      >
        <View className=" flex-row items-center justify-center gap-8">
          <Image
            className="w-[70px] h-[70px] object-contain"
            source={category.image}
          />
          <Text className="font-PoppinsSemiBold text-xl capitalize  text-baseBlack">
            {category.name}{" "}
          </Text>
        </View>
        <Image
          className="w-9 h-9 object-contain"
          source={icons.arrowRightLine}
          tintColor={Colors.baseViolet}
        />
      </MotiView>
    </TouchableOpacity>
  );
};
export default CategoryLine;
