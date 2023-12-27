import { render, screen } from "@testing-library/react";
import ResCard from "../ResCard";
import MOCK_DATA from "../mocks/resCardmock.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("should render ResCard component", () => {
  render(
    <BrowserRouter>
      <ResCard resData={MOCK_DATA} />
    </BrowserRouter>
  );

  const name = screen.getByText("Safa Restaurant");
  expect(name).toBeInTheDocument();
});
