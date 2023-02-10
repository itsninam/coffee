import { useState } from "react";
import data from "../../createPlan";
import OrderSummary from "./OrderSummary";
import Question from "./Questions";

const Preferences = () => {
  const [plans, setPlans] = useState(data);
  const [coffee, setCoffee] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [grind, setGrind] = useState("");
  const [delivery, setDelivery] = useState("");

  return (
    <section className="create-plan">
      <div className="questions-container">
        {plans.map((plan) => {
          return (
            <Question
              plan={plan}
              key={plan.id}
              setCoffee={setCoffee}
              setType={setType}
              setAmount={setAmount}
              setGrind={setGrind}
              setDelivery={setDelivery}
            />
          );
        })}
      </div>
      <OrderSummary
        coffee={coffee}
        type={type}
        amount={amount}
        grind={grind}
        delivery={delivery}
      />
    </section>
  );
};

export default Preferences;
