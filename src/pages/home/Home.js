import Hero from "./Hero";
import Collections from "./Collections";

const Home = ({ coffees }) => {
  return (
    <>
      <Hero />
      <Collections coffees={coffees} />
    </>
  );
};

export default Home;
