import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./form";
import Joke from "./joke";

test("sets the value to the upper version of the value", () => {
  render(<Form />);
  const upperInput = screen.getByLabelText(/upper/i);
  const upper = "stuff";

  fireEvent.change(upperInput, { target: { value: upper } });
  expect(upperInput.value).toEqual(upper.toUpperCase());
});

test("Joke component receives props and then render the text", () => {
  const { getByTestId } = render(
    <Joke text="The funniest joke of this year." />
  );
  expect(getByTestId("joke-text")).toHaveTextContent(
    "The funniest joke of this year."
  );
});

test("Joke component receives props and then render the text", () => {
  const { getByTestId } = render(
    <Joke text="Test jenkins." />
  );
  expect(getByTestId("joke-text")).toHaveTextContent(
    "Test jenkins."
  );
});