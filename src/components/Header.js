import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnlogin, setBtnlogin] = useState("login");

  return (
    <div className="heading">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/5/52/Free_logo.svg"
      />
      <ul className="nav-items">
        <li>Home</li>
        <li>About us</li>
        <li>Categories</li>
        <li>Contact us</li>
        <button
          className="btn-login"
          onClick={() => {
            btnlogin === "login" ? setBtnlogin("logout") : setBtnlogin("login");
          }}
        >
          {btnlogin}
        </button>
      </ul>
    </div>
  );
};
export default Header;
