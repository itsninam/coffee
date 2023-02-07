import Hero from "./Hero";
import Collections from "./Collections";

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
    </>
  );
};

export default Home;
