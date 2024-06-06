import React from "react";
import { render } from "@testing-library/react-native";
import TextLarge from "../src/components/TextLarge";

test("should render correctly with provided text", () => {
  const { getByText } = render(<TextLarge>Sample Text</TextLarge>);
  expect(getByText("Sample Text")).toBeTruthy();
});

test("should render correctly with provided font size class", () => {
  const { getByText } = render(
    <TextLarge fontSize="text-base">Sample Text</TextLarge>,
  );

  const text = getByText("Sample Text");
  expect(text.parent?.props.style).toEqual(
    expect.arrayContaining([expect.objectContaining({ fontSize: 16 })]),
  );
});

test("should render correctly with regular font", () => {
  const { getByText } = render(<TextLarge regular>Sample Text</TextLarge>);
  const text = getByText("Sample Text");
  expect(text.props.style).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ fontFamily: "Sora_400Regular" }),
    ]),
  );
});

test("should render correctly with light font", () => {
  const { getByText } = render(<TextLarge light>Sample Text</TextLarge>);
  const buttonText = getByText("Sample Text");
  expect(buttonText.parent?.props.style).toEqual(
    expect.arrayContaining([expect.objectContaining({ color: "#FFFFFF" })]),
  );
});
