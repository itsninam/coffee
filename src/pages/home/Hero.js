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
          <a href="#plan" className="button">
            {button}
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;
