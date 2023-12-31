import Bodyy from "../Bodyy";
import { act, fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resMockData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
test("fetches data and updates the state", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Bodyy />
      </BrowserRouter>
    )
  );
  const cardbeforesearch = screen.getAllByTestId("rescard");
  expect(cardbeforesearch.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();

  const inputsearch = screen.getByTestId("searchInput");
  fireEvent.change(inputsearch, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("rescard");
  expect(cards.length).toBe(1);
});

test("should filter all the restaurants according to 4+ ratings", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Bodyy />
      </BrowserRouter>
    )
  );
  const cardsbeforefilter = screen.getAllByTestId("rescard");
  expect(cardsbeforefilter.length).toBe(20);
  const filterbtn = screen.getByRole("button", { name: "Ratings 4+" });
  fireEvent.click(filterbtn);
  const cardsafterfilter = screen.getAllByTestId("rescard");
  expect(cardsafterfilter.length).toBe(19);
});
