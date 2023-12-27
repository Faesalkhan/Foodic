import useFetchData from "../../utils/useFetchData";
import Bodyy from "../Bodyy";

import { act, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resMockData.json";
import MOCK_DATA_TWO from "../mocks/resMockData.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA, MOCK_DATA_TWO);
    },
  });
});
test("fetches data and updates the state", async () => {
  await act(async () => render(<Bodyy />));

  const cardlength = screen.getAllByTestId("shimmer-effect");
  console.log(cardlength);
});
