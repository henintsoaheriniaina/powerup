import icons from "@/constants/icons";
import { router } from "expo-router";
import { Image, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const BackButton = () => {
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      className="bg-white rounded-xl overflow-hidden p-2"
    >
      <Image
        source={icons.arrowLeftOutline}
        className="w-8 h-8"
        resizeMode="contain"
        tintColor={Colors.baseBlack}
      />
    </TouchableOpacity>
  );
};
export default BackButton;
