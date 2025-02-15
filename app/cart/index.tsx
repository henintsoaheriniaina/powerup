import BackHeader from "@/components/BackHeader";
import CartButton from "@/components/CartButton";
import CartItem from "@/components/CartItem";
import { AppDispatch, RootState } from "@/store";
import { wipeCart } from "@/store/cart/cartSlice";
import { FontAwesome } from "@expo/vector-icons";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

const index = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch<AppDispatch>();
  const count = cart.length;
  const total = cart
    .reduce((sum, item) => sum + parseFloat(item.price) * item.count, 0)
    .toFixed(2);
  return (
    <SafeAreaView className="bg-baseGray-light h-full relative">
      <View className="flex-row items-center justify-between p-4">
        <BackHeader title={`Votre Panier (${count})`} />
        <View className="items-center justify-center">
          <TouchableOpacity
            onPress={() => dispatch(wipeCart())}
            className="bg-baseRed py-2 px-4 rounded-lg"
          >
            <Text className="text-white font-PoppinsSemiBold text-xl pt-1">
              Vider
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="bg-white mx-4 p-4 rounded-lg shadow-md">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-baseGray-dark font-PoppinsSemiBold text-lg">
            Total :
          </Text>
          <Text className="text-black font-PoppinsSemiBold text-lg">{`${total} €`}</Text>
        </View>
        <TouchableOpacity className="bg-baseViolet flex-row items-center justify-center py-3 rounded-lg">
          <FontAwesome name="credit-card" size={20} color="white" />
          <Text className="text-white font-PoppinsSemiBold text-lg ml-2">
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <CartItem index={index} item={item} />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="p-4"
      />
      <CartButton />
    </SafeAreaView>
  );
};

export default index;
