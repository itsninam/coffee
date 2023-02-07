import logo from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <img src={logo} alt="coffee roasters logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/plan">Create your plan</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
