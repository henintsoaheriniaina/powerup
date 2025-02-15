import { Text, View } from "react-native";
import AnimatedBolt from "./AnimatedBolt";
const Header = () => {
  return (
    <View className="px-4 py-4  flex-row items-center  w-screen ">
      <Text className="text-4xl text-baseBlack mt-3 font-PoppinsBlack p-1">
        POWER UP
      </Text>
      <AnimatedBolt />
    </View>
  );
};
export default Header;
