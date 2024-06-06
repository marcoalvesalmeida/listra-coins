import React from "react";
import { render } from "@testing-library/react-native";
import TextAux from "../src/components/TextAux";

test("should render correctly with provided text", () => {
  const { getByText } = render(<TextAux>Sample Text</TextAux>);
  expect(getByText("Sample Text")).toBeTruthy();
});

test("should render correctly with provided font size class", () => {
  const { getByText } = render(<TextAux>Sample Text</TextAux>);

  const text = getByText("Sample Text");
  expect(text.parent?.props.style).toEqual(
    expect.arrayContaining([expect.objectContaining({ fontSize: 12 })]),
  );
});

test("should render correctly with regular font", () => {
  const { getByText } = render(<TextAux>Sample Text</TextAux>);
  const text = getByText("Sample Text");
  expect(text.props.style).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ fontFamily: "Sora_400Regular" }),
    ]),
  );
});

test("should render correctly with light font", () => {
  const { getByText } = render(<TextAux>Sample Text</TextAux>);
  const buttonText = getByText("Sample Text");
  expect(buttonText.parent?.props.style).toEqual(
    expect.arrayContaining([expect.objectContaining({ color: "#9B9B9B" })]),
  );
});
