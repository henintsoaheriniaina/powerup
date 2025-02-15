import icons from "@/constants/icons";
import { PRODUCTTYPE } from "@/constants/products";
import { AppDispatch, RootState } from "@/store";
import { addItem } from "@/store/cart/cartSlice";
import { MotiView } from "moti";
import React, { memo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ItemCount from "./ItemCount";

type PROPS = {
  product: PRODUCTTYPE;
  index: number;
};

const ProductItem = ({ product, index }: PROPS) => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const cartProduct = cart.find((p) => p.id === product.id);

  return (
    <MotiView
      from={{ opacity: 0, translateX: 20 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ delay: index * 100 + 300 }}
      className="bg-white rounded-xl mx-4 py-4 overflow-hidden shadow-sm pt-16"
      style={{ width: 232, alignSelf: "stretch" }}
    >
      <TouchableOpacity className="flex-1" activeOpacity={0.9}>
        <View className="w-full px-4 ">
          <Image
            source={product.image}
            className="w-full h-[200px] object-contain"
            resizeMode="contain"
          />
          <Text className="mt-4 font-PoppinsRegular text-baseBlack text-lg">
            {product.name}
          </Text>
        </View>
        <Text className="text-xl text-baseBlack font-PoppinsBold px-4">
          $ {product.price}
        </Text>
      </TouchableOpacity>

      {cartProduct ? (
        <View className="absolute top-4 right-0 left-0 mx-4 p-3  rounded-lg bg-baseGray-light ">
          <ItemCount product={cartProduct} key={cartProduct.id} />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => dispatch(addItem(product.id))}
          className="absolute top-4 right-4 bg-baseViolet p-3 rounded-full"
        >
          <Image
            source={icons.cartPlus}
            className="h-7 w-7 object-contain"
            tintColor="white"
          />
        </TouchableOpacity>
      )}
    </MotiView>
  );
};

export default memo(ProductItem);
