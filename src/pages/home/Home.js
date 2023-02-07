import Hero from "./Hero";
import Collections from "./Collections";

const Home = ({ coffees, setTitle, title, description }) => {
  const isHome = true;

  return (
    <>
      <Hero isHome={isHome} title={title} description={description} />
      <Collections coffees={coffees} />
    </>
  );
};

export default Home;
