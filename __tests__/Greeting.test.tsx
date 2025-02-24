import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Greeting from "../components/Greeting";

test("should display the correct greeting based on state", () => {
  const { getByText } = render(<Greeting />);

  expect(getByText("Goodbye!")).toBeTruthy();

  fireEvent.press(getByText("Toggle Greeting"));

  expect(getByText("Hello, User!")).toBeTruthy();
});
