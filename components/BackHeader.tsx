import { Text, View } from "react-native";
import BackButton from "./BackButton";
const BackHeader = ({ title }: { title: string }) => {
  return (
    <View className="flex-row   items-center  gap-6">
      <BackButton />
      <Text className="text-2xl font-PoppinsBold text-baseBlack mt-1">
        {title}
      </Text>
    </View>
  );
};
export default BackHeader;
