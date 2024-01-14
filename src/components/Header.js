import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="navbar navbar-expand-md bg-light">
      <a href="/">
        <img src={LOGO_URL} className="brand-img" />
      </a>
      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#collapseElement"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse text-center"
        id="collapseElement"
      >
        <ul className="navbar-nav ms-auto me-2">
          <li className="nav-item px-3">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item px-3">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item px-3">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item px-3">
            <Link className="nav-link" to="/cart">
              Cart({cartItems.length})
            </Link>
          </li>
          <li className="nav-item px-3">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
