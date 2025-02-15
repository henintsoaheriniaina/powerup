import Colors from "@/constants/Colors";
import icons from "@/constants/icons";
import { router } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";
import BackButton from "./BackButton";
const SearchInput = () => {
  return (
    <View className="px-4 gap-4  flex-row items-center justify-between">
      <BackButton />
      <TouchableOpacity
        onPress={() => router.push("/search")}
        className="bg-white rounded-xl overflow-hidden p-2"
      >
        <Image
          source={icons.search}
          className="w-8 h-8"
          resizeMode="contain"
          tintColor={Colors.baseBlack}
        />
      </TouchableOpacity>
      {/* <View className="flex-1 bg-white rounded-full px-5  flex-row items-center">
        <TextInput
          className=" text-base text-baseBlack flex-1"
          placeholder="Rechercher un produit"
          maxLength={35}
        />
        <TouchableOpacity>
          <Image
            source={icons.search}
            className="w-6 h-6"
            resizeMode="contain"
            tintColor={Colors.baseBlack}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};
export default SearchInput;
