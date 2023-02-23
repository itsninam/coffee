import { Link } from "react-router-dom";

const Hero = ({ description, isAbout, isPlan, isHome, title, button }) => {
  return (
    <section
      className={
        (isAbout && "hero-section-main hero-section-about") ||
        (isPlan && "hero-section-main hero-section-plan") ||
        (isHome && "hero-section-main")
      }
    >
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-text">{description}</p>
        {!isAbout && !isPlan && (
          <Link to="/plan" className="button">
            {button}
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
