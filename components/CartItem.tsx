import { CartItem as CartItemType } from "@/store/cart/cartSlice";
import { MotiView } from "moti";
import { memo } from "react";
import { Image, Text, View } from "react-native";
import ItemCount from "./ItemCount";
type Props = {
  item: CartItemType;
  index: number;
};
const CartItem = ({ item, index }: Props) => {
  return (
    <MotiView
      from={{ opacity: 0, translateX: -20 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ delay: index * 100 + 300 }}
      className="mb-4  bg-white py-2 px-1 rounded-lg flex-row  items-center "
    >
      <Image
        source={item.image}
        className="w-[100px] h-[100px]"
        resizeMode="contain"
      />
      <View className="flex-1 px-4 gap-2 justify-between">
        <View>
          <Text className="font-PoppinsBold  text-baseBlack">{item.name}</Text>
          <Text className="font-PoppinsRegular text-sm   text-baseGray-dark   ">
            {item.description}
          </Text>
        </View>
        <ItemCount product={item} />
      </View>
    </MotiView>
  );
};
export default memo(CartItem);
