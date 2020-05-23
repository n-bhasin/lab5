import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./form";

test("sets the value to the upper version of the value", () => {
  render(<Form />);
  const upperInput = screen.getByLabelText(/upper/i);
  const upper = "stuff";

  fireEvent.change(upperInput, { target: { value: upper } });
  expect(upperInput.value).toEqual(upper.toUpperCase());
});
