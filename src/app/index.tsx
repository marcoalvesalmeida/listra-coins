import React, { useRef } from "react";
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MotiView, ScrollView } from "moti";

import LogoSVG from "@/assets/icons/logo.svg";
import UserSVG from "@/assets/icons/user.svg";
import LockSVG from "@/assets/icons/lock.svg";

import Theme from "@/styles/Theme";
import TextLarge from "@/components/TextLarge";
import CustomTextInput from "@/components/CustomTextInput";
import CustomButton from "@/components/CustomButton";
import LinkButton from "@/components/LinkButton";
import TextAux from "@/components/TextAux";
import { router } from "expo-router";

const Login: React.FC = () => {
  const passwordRef = useRef<TextInput>();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="h-full w-full pt-20">
        <MotiView
          className="w-full items-center gap-4"
          from={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ type: "timing" }}
        >
          <LogoSVG />
          <View className="bg-dark w-52 p-3 rounded-full items-center">
            <TextLarge light>{Theme.basics.appName}</TextLarge>
          </View>
        </MotiView>
        <MotiView
          className="bg-light-secondary flex-1 rounded-t-3xl z-10 justify-between pb-"
          from={{ marginTop: Dimensions.get("screen").height }}
          animate={{ marginTop: 48 }}
          transition={{ type: "timing" }}
        >
          <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
            <ScrollView>
              <View className="py-8 px-6 items-center">
                <TextLarge>Login</TextLarge>
                <CustomTextInput
                  placeholder="E-mail"
                  icon={<UserSVG />}
                  customClassName="mt-6"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordRef.current.focus();
                  }}
                  blurOnSubmit={false}
                />
                <CustomTextInput
                  placeholder="Senha"
                  icon={<LockSVG />}
                  customClassName="mt-6"
                  secureTextEntry
                  customRef={passwordRef}
                />
                <CustomButton
                  customClassName="mt-8"
                  onPress={() => router.replace("home")}
                >
                  Entrar
                </CustomButton>
              </View>
              <View className="flex-row items-center justify-center mt-10">
                <LinkButton onPress={() => null}>Registrar-se</LinkButton>
                <TextAux customClassName="mx-2">|</TextAux>
                <LinkButton onPress={() => null}>Resetar Senha</LinkButton>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </MotiView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
