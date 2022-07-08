import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, configure } from "@testing-library/react";
import ModalUser from "./Modal";

beforeEach(() => {
    configure({
      throwSuggestions: true,
    })
  })
  

//Test for know if the component render correctly.
test("renders content", () => {
  const us = {
    name: "This is a test",
    address: { city: "Test city", geo: { lat: "Test lat", lng: "Test lng" } },
    company: { bs: "Test bs", catchPhrase: "Test catchPhrase" },
  };
  const component = render(<ModalUser us={us} />);
});

//Verify if the component have a specific text
test("renders content", () => {
  const us = {
    name: "This is a test",
    address: { city: "Test city", geo: { lat: "Test lat", lng: "Test lng" } },
    company: { bs: "Test bs", catchPhrase: "Test catchPhrase" },
  };
  const component = render(<ModalUser us={us} />);
  expect(component.container).toHaveTextContent("");
});

test("finding the button Close", async () => {
  const us = {
    name: "This is a test",
    address: { city: "Test city", geo: { lat: "Test lat", lng: "Test lng" } },
    company: { bs: "Test bs", catchPhrase: "Test catchPhrase" },
  };

  const mockHandler = jest.fn();
  await render(<ModalUser us={us} onHide={mockHandler} />);

  const button = screen.findByRole('Button',{ name: 'Close', hidden: true })
});
