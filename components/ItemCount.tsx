import icons from "@/constants/icons";
import { AppDispatch } from "@/store";
import {
  addItem,
  CartItem,
  decrementItem,
  removeItem,
} from "@/store/cart/cartSlice";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
type Props = {
  product: CartItem;
};
const ItemCount = ({ product }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View className=" flex-row items-center gap-2 ">
      <TouchableOpacity
        onPress={() => dispatch(decrementItem(product.id))}
        className="p-2 bg-baseViolet rounded-lg"
      >
        <Image
          source={icons.minus}
          className="h-6 w-6"
          resizeMode="contain"
          tintColor="white"
        />
      </TouchableOpacity>
      <Text className="font-PoppinsBold text-xl min-w-10 text-center ">
        {product.count}
      </Text>
      <TouchableOpacity
        onPress={() => dispatch(addItem(product.id))}
        className="p-2 rounded-lg bg-baseViolet"
      >
        <Image
          source={icons.plus}
          className="h-6 w-6 "
          resizeMode="contain"
          tintColor="white"
        />
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-baseRed p-2 rounded-lg ml-auto"
        onPress={() => dispatch(removeItem(product.id))}
      >
        <Image
          source={icons.trash}
          className="h-6 w-6"
          resizeMode="contain"
          tintColor="white"
        />
      </TouchableOpacity>
    </View>
  );
};
export default ItemCount;
