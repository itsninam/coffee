import logo from "../assets/shared/desktop/logo.svg";

const Header = () => {
  return (
    <header className="header wrapper">
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
    </header>
  );
};

export default Header;
