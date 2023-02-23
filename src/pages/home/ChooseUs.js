import coffeeBean from "../../assets/home/desktop/icon-coffee-bean.svg";
import gift from "../../assets/home/desktop/icon-gift.svg";
import truck from "../../assets/home/desktop/icon-truck.svg";

const ChooseUs = () => {
  return (
    <section className="choose-us-background">
      <div className="content-container">
        <h3>Why choose us</h3>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className="benefits-cards-container">
        <div className="card">
          <img src={coffeeBean} alt="coffee bean icon" />
          <h4>Best quality</h4>
          <p>
            Discover an endless variety of the world’s best artisan coffee from
            each of our roasters.
          </p>
        </div>
        <div className="card">
          <img src={gift} alt="gift icon" />
          <h4>Exclusive benefits</h4>
          <p>
            Special offers and swag when you subscribe, including 30% off your
            first shipment.
          </p>
        </div>
        <div className="card">
          <img src={truck} alt="truck icon" />
          <h4>Free shipping</h4>
          <p>
            We cover the cost and coffee is delivered fast. Peak freshness:
            guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
