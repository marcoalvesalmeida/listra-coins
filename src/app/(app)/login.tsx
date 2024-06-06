import React, { useRef, useState } from "react";
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MotiView, ScrollView } from "moti";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import LogoSVG from "@/assets/icons/logo.svg";
import UserSVG from "@/assets/icons/user.svg";
import LockSVG from "@/assets/icons/lock.svg";

import Theme from "@/styles/Theme";
import TextLarge from "@/components/TextLarge";
import CustomTextInput from "@/components/CustomTextInput";
import CustomButton from "@/components/CustomButton";
import LinkButton from "@/components/LinkButton";
import TextAux from "@/components/TextAux";
import useAuth from "@/hooks/useAuth";
import Toast from "react-native-toast-message";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef<TextInput>();
  const { login } = useAuth();

  const formSchema = z.object({
    email: z.string().email("Por favor, insira um email válido."),
    password: z.string().min(8, "A senha precisa ter no mínimo 8 caracteres."),
  });

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const { success, message } = await login(data.email, data.password);
    if (success) {
      router.replace("/");
    } else {
      Toast.show({
        type: "error",
        text1: "Ops!",
        text2: message,
      });
    }
    setLoading(false);
  };

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
                  name="email"
                  control={control}
                  placeholder="E-mail"
                  icon={<UserSVG />}
                  customClassName="mt-6"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordRef.current.focus();
                  }}
                  blurOnSubmit={false}
                />
                <CustomTextInput
                  name="password"
                  control={control}
                  placeholder="Senha"
                  icon={<LockSVG />}
                  customClassName="mt-6"
                  secureTextEntry
                  customRef={passwordRef}
                  autoCapitalize="none"
                />
                <CustomButton
                  customClassName="mt-8"
                  onPress={handleSubmit(onSubmit)}
                  disabled={loading}
                >
                  {loading ? "Carregando..." : "Entrar"}
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
