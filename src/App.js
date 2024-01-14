import React from "react";
import "./bootstrap";
import ReactDOM from "react-dom/client";
import Bodyy from "./components/Bodyy";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import ResMenu from "./components/ResMenu";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const App = () => {
  return (
    <Provider store={appStore}>
      <div id="applayout">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Bodyy />,
      },
      {
        path: "/restaurant/:restaurantID",
        element: <ResMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
