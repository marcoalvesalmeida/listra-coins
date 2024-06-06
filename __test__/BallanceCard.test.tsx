import React from "react";
import { render } from "@testing-library/react-native";
import BalanceCard from "../src/components/BalanceCard";
import useUserStore from "@/hooks/useUserStore";
import { formatCurrencyToShow } from "@/utils/Currency";

jest.mock("@/hooks/useUserStore");
const useUserStoreMock = useUserStore as jest.MockedFunction<
  typeof useUserStore
>;

jest.mock("@/utils/Currency");
const formatCurrencyToShowMock = formatCurrencyToShow as jest.MockedFunction<
  typeof formatCurrencyToShow
>;

jest.mock("@/assets/icons/wallet_focused.svg", () => "WalletSVG");

describe("BalanceCard", () => {
  beforeEach(() => {
    useUserStoreMock.mockReturnValue({
      user: {
        balance: 1000,
      },
    });
    formatCurrencyToShowMock.mockReturnValue("1.000");
  });

  it("should render correctly", () => {
    const { getByText } = render(<BalanceCard />);

    expect(getByText(/Lc/)).toBeTruthy();
    expect(getByText("1.000")).toBeTruthy();
  });

  it("should show 0 when user balance is null or undefined", () => {
    useUserStoreMock.mockReturnValue({
      user: {
        balance: null,
      },
    });
    const { getByText } = render(<BalanceCard />);

    expect(getByText("0")).toBeTruthy();
  });

  it("should format the currency correctly", () => {
    const balance = 1234560;
    useUserStoreMock.mockReturnValue({
      user: {
        balance,
      },
    });
    formatCurrencyToShowMock.mockReturnValue("1.234.560");

    const { getByText } = render(<BalanceCard />);

    expect(formatCurrencyToShowMock).toHaveBeenCalledWith(balance);
    expect(getByText("1.234.560")).toBeTruthy();
  });
});
