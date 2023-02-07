import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import logo from "../assets/shared/desktop/logo-white.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="img-container">
          <img src={logo} alt="coffee roasters logo" fill="#fff" />
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="about">About us</a>
            </li>
            <li>
              <a href="plan">Create your plan</a>
            </li>
          </ul>
        </nav>
        <nav className="socials">
          <ul>
            <li>
              <a href="#">
                <img src={facebook} alt="Facebook icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} alt="Instagram icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="Twitter icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
