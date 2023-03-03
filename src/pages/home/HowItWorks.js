import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How it works</h2>
      <div className="image-container">
        <span className="circle"></span>
        <span className="line"></span>
        <span className="circle"></span>
        <span className="line"></span>
        <span className="circle"></span>
      </div>
      <ul className="cards-container">
        <li className="content">
          <p className="number">01</p>
          <h4>Pick your coffee</h4>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </li>
        <li className="content">
          <p className="number">02</p>
          <h4>Choose the frequency</h4>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </li>
        <li className="content">
          <p className="number">03</p>
          <h4>Receive and enjoy!</h4>
          <p>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </li>
      </ul>
      <div className="cards-container">
        <Link to="/plan" className="button">
          Create your plan
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
