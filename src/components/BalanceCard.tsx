import React from "react";
import { View } from "react-native";

import WalletSVG from "@/assets/icons/wallet_focused.svg";
import clsx from "clsx";
import TextLarge from "./TextLarge";
import useUserStore from "@/hooks/useUserStore";
import { formatCurrencyToShow } from "@/utils/Currency";

const BalanceCard: React.FC = () => {
  const { user } = useUserStore();

  return (
    <View
      className={clsx(
        "bg-light w-[90%] -mt-9 rounded-2xl py-6 px-4 z-11",
        "shadow-dark shadow-lg self-center flex-row items-center",
      )}
    >
      <WalletSVG className="mr-2" />
      <TextLarge regular fontSize="text-base">
        <>
          {"Lc "}
          <TextLarge fontSize="text-lg">
            {user?.balance ? formatCurrencyToShow(user?.balance) : "0"}
          </TextLarge>
        </>
      </TextLarge>
    </View>
  );
};

export default BalanceCard;
