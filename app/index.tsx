import CustomButton from "@/components/CustomButton";
import Colors from "@/constants/Colors";
import icons from "@/constants/icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { MotiImage, MotiView } from "moti";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView className="bg-baseViolet h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="h-full justify-center items-center  min-h-[85vh] px-4 gap-12">
          <MotiImage
            from={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            source={icons.bolt}
            className="w-20 h-20 mb-8"
            resizeMode="contain"
          />
          <MotiView
            from={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 100 }}
            className="items-center justify-center"
          >
            <Text className="text-2xl font-PoppinsBlack text-white p-1">
              Bienvenue sur
            </Text>
            <Text className="text-6xl text-white font-PoppinsExtraBold p-1">
              POWER UP
            </Text>
          </MotiView>
          <CustomButton
            className="bg-white"
            title="Commencer"
            onPress={() => {
              router.push("/login");
            }}
            textStyle="text-baseViolet"
          />
        </View>
        <StatusBar style="dark" backgroundColor={Colors.baseViolet} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default index;
