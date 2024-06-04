import "react-native-reanimated";
import "react-native-gesture-handler";
import { Stack } from "expo-router";
import {
  useFonts,
  Sora_600SemiBold,
  Sora_400Regular,
} from "@expo-google-fonts/sora";

import Theme from "@/styles/Theme";

export default function Layout() {
  let [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Theme.customColors.primary,
        },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
