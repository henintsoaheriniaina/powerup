import { Image, View } from "react-native";
type PROPS = {
  focused: boolean;
  icon: number;
  color: string;
};
const TabIcon = ({ focused, icon, color }: PROPS) => {
  return (
    <View className="items-center justify-center mt-5">
      <Image
        source={icon}
        className="w-7 h-7"
        resizeMode="contain"
        tintColor={color}
      />
      <View
        className={`h-1 w-6 mt-1 rounded-full ${
          focused ? "bg-baseViolet" : ""
        } `}
      ></View>
    </View>
  );
};
export default TabIcon;
