import { render, screen, act, fireEvent } from "@testing-library/react";
import ResMenu from "../ResMenu";
import Header from "../Header";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
test("should load restaurant menu compo", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  // console.log(addBtns.length);  228
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart(1)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart(2)")).toBeInTheDocument();

  const cartitems = screen.getAllByTestId("cartItems");
  expect(cartitems.length).toBe(2);

  const clrcrt = screen.getByRole("button", { name: "remove All" });
  fireEvent.click(clrcrt);
  expect(screen.getByText("Your Cart is Empty")).toBeInTheDocument();
  expect(screen.getByText("Cart(0)")).toBeInTheDocument();
});
