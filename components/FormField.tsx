import Colors from "@/constants/Colors";
import { useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
type PROPS = {
  title: string;
  placeholder?: string;
  error: string;
} & TextInputProps;
const FormField = ({
  onChangeText,
  value,
  placeholder,
  title,
  secureTextEntry,
  error,
  keyboardType,
}: PROPS) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View className="gap-4">
      <Text className="font-PoppinsSemiBold text-baseBlack">{title} :</Text>
      <View
        className={`${
          isFocused
            ? "border-baseViolet"
            : error !== ""
            ? "border-baseRed"
            : "border-transparent"
        } py-2 px-4 rounded-lg border-2 bg-white`}
      >
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={Colors.baseGray.dark}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </View>
      {error !== "" && <Text className="text-baseRed">{error}</Text>}
    </View>
  );
};
export default FormField;
