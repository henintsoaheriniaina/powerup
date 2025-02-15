import { CATEGORYTYPE } from "@/constants/categories";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  Easing,
  SlideInDown,
  SlideInUp,
} from "react-native-reanimated";
type PROPS = {
  category: CATEGORYTYPE;
  index: number;
};
const CategoryItem = ({ category, index = 1 }: PROPS) => {
  const entering = SlideInUp.duration(300)
    .easing(Easing.inOut(Easing.linear))
    .delay(300 * index);
  const exiting = SlideInDown.duration(300)
    .easing(Easing.inOut(Easing.quad))
    .delay(300 * index);

  return (
    <TouchableOpacity
      onPress={() => router.push(`/categories/${category.slug}`)}
    >
      <Animated.View
        entering={entering}
        exiting={exiting}
        className="mx-3 items-center justify-center gap-2"
      >
        <View className="p-4 rounded-full bg-white">
          <Image
            className="w-[50px] h-[50px] object-contain"
            source={category.image}
          />
        </View>
        <Text className="font-PoppinsRegular text-sm capitalize ">
          {category.name}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};
export default CategoryItem;
