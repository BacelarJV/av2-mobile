import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "../components/Button";

test("calls onPress when button is pressed", () => {
  const onPressMock = jest.fn();

  const { getByText } = render(
    <Button title="Press me" onPress={onPressMock} />
  );

  const button = getByText("Press me");

  fireEvent.press(button);

  expect(onPressMock).toHaveBeenCalledTimes(1);
});
