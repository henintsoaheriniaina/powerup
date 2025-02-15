import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import Colors from "@/constants/Colors";
import { FormTypes } from "@/types/FormType";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const login = () => {
  const [form, setForm] = useState<FormTypes>({
    email: "",
    password: "",
  });
  const [error, setError] = useState({ email: "", password: "" });
  const onConnexionPressed = () => {
    if (!form.email.trim() || !form.password.trim()) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        setError((e) => ({ ...e, email: "Email invalide" }));
      } else {
        setError((e) => ({ ...e, email: "" }));
      }
      if (!form.password.trim()) {
        setError((e) => ({ ...e, password: "Mot de passe invalide" }));
      } else {
        setError((e) => ({ ...e, password: "" }));
      }
    } else {
      router.push("/tabs/home");
    }
  };
  return (
    <SafeAreaView className="h-full bg-baseGray-light">
      <ScrollView contentContainerClassName="h-[100%]">
        <View className="h-full min-h-[80vh]  px-4  justify-center  ">
          <View>
            <Text className="text-4xl font-PoppinsBlack text-baseBlack">
              Se connecter à
            </Text>
            <Text className="text-4xl font-PoppinsBlack text-baseYellow">
              POWER UP
            </Text>
          </View>
          <View className="gap-6 mt-10">
            <FormField
              title="Adresse Mail"
              placeholder="Ex: johndoe@email.com"
              error={error.email}
              value={form.email}
              onChangeText={(e) => setForm((form) => ({ ...form, email: e }))}
              secureTextEntry={false}
              keyboardType="email-address"
            />
            <FormField
              title="Mot De Passe "
              error={error.password}
              placeholder=""
              value={form.password}
              onChangeText={(e) =>
                setForm((form) => ({ ...form, password: e }))
              }
              secureTextEntry
            />
          </View>
          <CustomButton
            title="Connexion"
            className="mt-8 bg-baseViolet"
            textStyle="text-white"
            onPress={onConnexionPressed}
          />
          <View className="w-full mt-4 flex-row items-center justify-between">
            <View className="bg-white h-1 w-1/3"></View>
            <Text className="text-baseGray-dark font-PoppinsSemiBold ">ou</Text>
            <View className="bg-white h-1 w-1/3"></View>
          </View>
          <CustomButton
            title="Créer un compte"
            className="mt-8 bg-white rounded-full"
            textStyle="text-baseViolet"
            onPress={() => router.push("/register")}
          />
        </View>
        <StatusBar style="dark" backgroundColor={Colors.baseGray.light} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default login;
