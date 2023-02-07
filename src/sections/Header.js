import logo from "../assets/shared/desktop/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <img src={logo} alt="coffee roasters logo" />
        <nav>
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
      </div>
    </div>
  );
};

export default Header;
