import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Header from "../src/components/Header";
import useUserStore from "@/hooks/useUserStore";
import useAuth from "@/hooks/useAuth";

jest.mock("@/hooks/useUserStore");
const useUserStoreMock = useUserStore as jest.MockedFunction<
  typeof useUserStore
>;

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

jest.mock("@/hooks/useAuth", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    logout: jest.fn(),
  })),
}));
const useAuthMock = useAuth as jest.MockedFunction<typeof useAuth>;

describe("Header", () => {
  it("should render correctly", () => {
    useUserStoreMock.mockReturnValue({
      user: {
        first_name: "John",
      },
    });

    const { getByText } = render(<Header />);

    expect(getByText(/Olá,/)).toBeTruthy();
    expect(getByText("John")).toBeTruthy();
    expect(getByText("Sair")).toBeTruthy();
  });

  it("should call logout when button is pressed", () => {
    const logoutMock = jest.fn();
    useUserStoreMock.mockReturnValue({
      user: {
        first_name: "John",
      },
    });
    useAuthMock.mockReturnValue({
      logout: logoutMock,
      login: undefined,
      hasSession: undefined,
    });

    const { getByText } = render(<Header />);
    const logoutButton = getByText("Sair");
    fireEvent.press(logoutButton);

    expect(logoutMock).toHaveBeenCalledTimes(1);
  });
});
