import Hero from "../home/Hero";

const CreatePlan = ({ title, description }) => {
  const isPlan = true;

  return (
    <>
      <Hero title={title} description={description} isPlan={isPlan} />
    </>
  );
};

export default CreatePlan;
