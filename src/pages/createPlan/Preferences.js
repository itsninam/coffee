import { useEffect, useState } from "react";
import data from "../../createPlan";
import OrderSummary from "./OrderSummary";
import Question from "./Questions";
import OrderSummaryModal from "./OrderSummaryModal";

const Preferences = () => {
  // eslint-disable-next-line
  const [plans, setPlans] = useState(data);
  const [coffee, setCoffee] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [grind, setGrind] = useState("");
  const [delivery, setDelivery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);
  const isOrderSummary = true;

  useEffect(() => {
    if (coffee === "capsule" && type && amount && delivery) {
      setActiveBtn(true);
    } else if (coffee && type && amount && delivery && grind) {
      setActiveBtn(true);
    }
  }, [amount, coffee, delivery, grind, type]);

  const handleShowModal = () => {
    if (coffee && type && amount && delivery) {
      setShowModal(true);
    }
  };

  return (
    <section className="create-plan">
      <div className="questions-container">
        {plans.map((plan) => {
          return (
            <Question
              plan={plan}
              plans={plans}
              key={plan.id}
              setCoffee={setCoffee}
              setType={setType}
              setAmount={setAmount}
              setGrind={setGrind}
              setDelivery={setDelivery}
              coffee={coffee}
              amount={amount}
              delivery={delivery}
            />
          );
        })}
      </div>
      <>
        <OrderSummary
          coffee={coffee}
          type={type}
          amount={amount}
          grind={grind}
          delivery={delivery}
          isOrderSummary={isOrderSummary}
        />
        {}
        {isOrderSummary && (
          <button
            onClick={handleShowModal}
            className={activeBtn ? "active" : "disabled"}
          >
            order
          </button>
        )}
      </>
      {showModal && (
        <OrderSummaryModal
          coffee={coffee}
          type={type}
          amount={amount}
          grind={grind}
          delivery={delivery}
        />
      )}
    </section>
  );
};

export default Preferences;
