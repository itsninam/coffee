import Hero from "./Hero";
import Collections from "./Collections";
import ChooseUs from "./ChooseUs";
import HowItWorks from "./HowItWorks";

const Home = ({ coffees, title, description, button }) => {
  const isHome = true;

  return (
    <>
      <Hero
        isHome={isHome}
        title={title}
        button={button}
        description={description}
      />
      <Collections coffees={coffees} />
      <ChooseUs />
      <HowItWorks />
    </>
  );
};

export default Home;
