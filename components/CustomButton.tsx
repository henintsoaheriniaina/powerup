import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
type PROPS = {
  title: string;
  textStyle?: string;
} & TouchableOpacityProps;
const CustomButton = ({ title, onPress, className, textStyle }: PROPS) => {
  return (
    <TouchableOpacity
      className={` p-4 items-center justify-center rounded-full ${className}`}
      onPress={onPress}
    >
      <Text className={` font-PoppinsSemiBold text-center p-1 ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
