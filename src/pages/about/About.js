import Hero from "../home/Hero";
import Commitment from "./Commitment";
import HeadQuarters from "./HeadQuarters";
import Quality from "./Quality";

const About = ({ title, description }) => {
  const isAbout = true;

  return (
    <>
      <Hero title={title} description={description} isAbout={isAbout} />
      <Commitment />
      <Quality />
      <HeadQuarters />
    </>
  );
};

export default About;
