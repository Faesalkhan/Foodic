import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us component test cases", () => {
  test("should load the contact compo", () => {
    render(<Contact />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument;
  });

  test("should load the contact component", () => {
    render(<Contact />);
    const text = screen.getByText("Submit");
    expect(text).toBeInTheDocument();
  });

  test("should load the input name inside the contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Name :");
    expect(inputName).toBeInTheDocument();
  });

  test("should load 2 inputs from contact component", () => {
    render(<Contact />);
    const inputs = screen.getAllByRole("textbox");
    console.log(inputs.length);
    expect(inputs.length).toBe(3);
  });
});
