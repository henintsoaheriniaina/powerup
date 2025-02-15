import icons from "@/constants/icons";
import { PRODUCTTYPE } from "@/constants/products";
import { AppDispatch } from "@/store";
import { addItem } from "@/store/cart/cartSlice";
import { MotiView } from "moti";
import React, { memo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

type PROPS = {
  product: PRODUCTTYPE;
  index: number;
};

const VerticalProductItem = ({ product, index }: PROPS) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <MotiView
      from={{ opacity: 0, translateX: 20 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ delay: index * 100 + 300 }}
      className="items-center relative  bg-white w-[180px] justify-between overflow-hidden rounded-xl pb-4 m-2 "
    >
      <TouchableOpacity
        onPress={() => dispatch(addItem(product.id))}
        className="absolute top-4 right-4 z-10 bg-baseViolet p-3 rounded-full"
      >
        <Image
          source={icons.cartPlus}
          className="h-7 w-7 object-contain"
          tintColor={"white"}
        />
      </TouchableOpacity>
      <View className="w-full px-2">
        <Image
          source={product.image}
          className="w-full h-[180px] object-contain "
        />
        <Text className="mt-4  px-2 font-PoppinsRegular w-full  text-baseBlack ">
          {product.name}
        </Text>
      </View>
      <Text className="text-xl w-full text-baseBlack font-PoppinsBold text-left px-4   ">
        $ {product.price}
      </Text>
    </MotiView>
  );
};

export default memo(VerticalProductItem);
