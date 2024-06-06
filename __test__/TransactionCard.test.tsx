import React from "react";
import { render } from "@testing-library/react-native";
import TransactionCard from "../src/components/TransactionCard";

const mockTransaction = {
  id: "1",
  userId: "1",
  productId: "1",
  productName: "Product Name",
  amount: 50,
  createdAt: "2024-06-06",
};

test("should render transaction card correctly", () => {
  const { getByText } = render(<TransactionCard item={mockTransaction} />);

  expect(getByText("Product Name")).toBeTruthy();
  expect(getByText("Lc")).toBeTruthy();
  expect(getByText("50")).toBeTruthy();
  expect(getByText("2024-06-06")).toBeTruthy();
});
