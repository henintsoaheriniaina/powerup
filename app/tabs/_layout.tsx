import CartButton from "@/components/CartButton";
import TabIcon from "@/components/TabIcon";
import Colors from "@/constants/Colors";
import icons from "@/constants/icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
const TabsLayout = () => {
  return (
    <SafeAreaView style={{ height: "100%", position: "relative" }}>
      <CartButton />
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarInactiveTintColor: Colors.baseGray.dark,
          tabBarActiveTintColor: Colors.baseViolet,
          tabBarStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderTopWidth: 0,
            backgroundColor: Colors.baseGray.light,
            height: 55,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabIcon focused={focused} icon={icons.home} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="categories"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabIcon focused={focused} icon={icons.category} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="wishlist"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabIcon focused={focused} icon={icons.heart} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabIcon focused={focused} icon={icons.user} color={color} />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor={Colors.baseGray.light} style="dark" />
    </SafeAreaView>
  );
};
export default TabsLayout;
