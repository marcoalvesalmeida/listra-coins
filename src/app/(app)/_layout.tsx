import "react-native-reanimated";
import "react-native-gesture-handler";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import Toast from "react-native-toast-message";
import {
  useFonts,
  Sora_600SemiBold,
  Sora_400Regular,
} from "@expo-google-fonts/sora";

import Theme from "@/styles/Theme";
import { useEffect, useRef } from "react";
import {
  NotificationSubscription,
  addNotificationResponseReceivedListener,
  removeNotificationReceivedListener,
  setNotificationHandler,
} from "@/services/Messaging/Notifications";

SplashScreen.preventAutoHideAsync();

setNotificationHandler();

export default function Layout() {
  const notificationListener = useRef<NotificationSubscription>();
  const responseListener = useRef<NotificationSubscription>();

  let [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_600SemiBold,
  });

  async function hideSplash() {
    await SplashScreen.hideAsync();
  }

  useEffect(() => {
    addNotificationResponseReceivedListener(
      notificationListener,
      responseListener,
    );

    return () => {
      removeNotificationReceivedListener(
        notificationListener,
        responseListener,
      );
    };
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      hideSplash();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: Theme.customColors.primary,
          },
        }}
        initialRouteName="/"
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="login" />
      </Stack>
      <Toast />
    </>
  );
}
