import React from "react";
import { Text, View } from "react-native";
import CustomButton from "./CustomButton";

const Header: React.FC = () => {
  return (
    <View className="w-full flex-row justify-between items-center px-8 py-6">
      <Text className="font-Sora_Regular text-light text-sm">
        Olá,{" "}
        <Text className="font-Sora_SemiBold text-light text-base">Mary</Text>
      </Text>
      <CustomButton
        onPress={() => null}
        customClassName="px-4 py-1 bg-dark"
        fontSize="text-sm"
      >
        Sair
      </CustomButton>
    </View>
  );
};

export default Header;
