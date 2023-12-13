import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Header = () => {
  const onlinestat = useOnlineStatus();
  return (
    <nav className="navbar navbar-expand-md bg-light fixed-top">
      <img
        src={LOGO_URL}
        className="navbar-brand img-fluid brandlogo "
        alt=""
      />
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav text-center ms-auto me-2">
          <li className="nav-item">
            <Link className="nav-link" to="">
              Online status :{onlinestat ? "🟢" : "🔴"}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login">
              <button type="button" className="btn btn-danger">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
