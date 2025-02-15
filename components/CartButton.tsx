import icons from "@/constants/icons";
import { RootState } from "@/store";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const CartButton = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const cartCount = cart.length;
  return (
    <TouchableOpacity
      onPress={() => router.push("/cart")}
      className="w-fit absolute bottom-20 z-20 right-8 bg-baseViolet p-2 rounded-lg"
    >
      <View className="relative">
        <View className="absolute -top-4 -left-4 bg-red-500 rounded-full px-2 py-1 min-w-[20px] flex items-center justify-center z-10">
          <Text className="text-white text-xs font-bold">{cartCount}</Text>
        </View>
        <Image
          source={icons.cart}
          className="w-10 h-10"
          resizeMode="contain"
          tintColor="white"
        />
      </View>
    </TouchableOpacity>
  );
};
export default CartButton;
