import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomButton from "../src/components/CustomButton";

describe("CustomButton", () => {
  it("should render correctly with default props", () => {
    const { getByText } = render(
      <CustomButton onPress={() => {}}>Click me</CustomButton>,
    );

    const buttonText = getByText("Click me");
    expect(buttonText).toBeTruthy();
  });

  it("should call onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <CustomButton onPress={onPressMock}>Click me</CustomButton>,
    );

    const button = getByText("Click me");
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("should apply fontSize correctly", () => {
    const { getByText } = render(
      <CustomButton onPress={() => {}} fontSize="text-sm">
        Click me
      </CustomButton>,
    );

    const buttonText = getByText("Click me");
    expect(buttonText.parent?.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ fontSize: 14 })]),
    );
  });

  it("should disable the button when disabled prop is true", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <CustomButton onPress={onPressMock} disabled>
        Click me
      </CustomButton>,
    );

    const button = getByText("Click me");
    fireEvent.press(button);

    expect(onPressMock).not.toHaveBeenCalled();
  });
});
