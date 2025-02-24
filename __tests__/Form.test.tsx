import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Form from "../components/Form";

test("should update input value and display submitted value", () => {
  const { getByPlaceholderText, getByText } = render(<Form />);

  const input = getByPlaceholderText("Type something");
  expect(input.props.value).toBe("");

  fireEvent.changeText(input, "Hello, world!");

  expect(input.props.value).toBe("Hello, world!");

  fireEvent.press(getByText("Submit"));

  expect(getByText("Submitted: Hello, world!")).toBeTruthy();
});
