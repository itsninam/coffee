import Hero from "../home/Hero";
import Preferences from "./Preferences";

const CreatePlan = ({ title, description }) => {
  const isPlan = true;

  return (
    <>
      <Hero title={title} description={description} isPlan={isPlan} />
      <Preferences />
    </>
  );
};

export default CreatePlan;
