import { Redirect, Tabs } from "expo-router";

import HomeFocusedSVG from "@/assets/icons/home_focused.svg";
import HomeSVG from "@/assets/icons/home.svg";
import WalletFocusedSvg from "@/assets/icons/wallet_focused.svg";
import WalletSVG from "@/assets/icons/wallet.svg";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import useUserStore from "@/hooks/useUserStore";

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const { hasSession } = useAuth();
  const { user } = useUserStore();

  useEffect(() => {
    async function verifySession() {
      setIsLoading(true);
      const sessionIsValid = await hasSession();

      if (sessionIsValid) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      setIsLoading(false);
    }

    verifySession();
  }, [user]);

  if (isLoading) {
    return null;
  }

  if (!isLoading && !isAuth) {
    return <Redirect href="login" />;
  }

  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <HomeFocusedSVG height={24} width={24} />
              ) : (
                <HomeSVG height={24} width={24} />
              ),
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            title: "Wallet",
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <WalletFocusedSvg height={24} width={24} />
              ) : (
                <WalletSVG height={24} width={24} />
              ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 75,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
