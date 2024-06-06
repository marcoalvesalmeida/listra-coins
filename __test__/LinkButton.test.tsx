import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import LinkButton from "../src/components/LinkButton";

describe("LinkButton", () => {
  it("should render correctly", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <LinkButton onPress={onPressMock}>Click me</LinkButton>,
    );

    const buttonText = getByText("Click me");
    expect(buttonText).toBeTruthy();
  });

  it("should call onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <LinkButton onPress={onPressMock}>Click me</LinkButton>,
    );

    const button = getByText("Click me");
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
