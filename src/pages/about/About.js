import Hero from "../home/Hero";

const About = ({ title, description }) => {
  const isAbout = true;

  return (
    <>
      <Hero title={title} description={description} isAbout={isAbout} />
    </>
  );
};

export default About;
