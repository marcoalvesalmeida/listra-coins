import React from "react";
import { Text, View } from "react-native";

import WalletSVG from "@/assets/icons/wallet_focused.svg";
import clsx from "clsx";
import TextLarge from "./TextLarge";

const BalnceCard: React.FC = () => {
  return (
    <View
      className={clsx(
        "bg-light w-[80%] -mt-9 rounded-2xl py-6 px-4 z-11",
        "shadow-dark shadow-lg self-center flex-row items-center"
      )}
    >
      <WalletSVG className="mr-2" />
      <TextLarge regular fontSize="text-base">
        <>
          {"Lc "}
          <TextLarge fontSize="text-lg">
            <>4.634.047</>
          </TextLarge>
        </>
      </TextLarge>
    </View>
  );
};

export default BalnceCard;
