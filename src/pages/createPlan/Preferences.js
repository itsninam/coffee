import { useEffect, useState } from "react";
import data from "../../createPlan";
import OrderSummary from "./OrderSummary";
import Question from "./Questions";
import OrderSummaryModal from "./OrderSummaryModal";
import QuestionsSummary from "./QuestionsSummary";

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
  const [total, setTotal] = useState();
  const [showAnswer, setShowAnswer] = useState(false);
  const [activeSelection, setActiveSelection] = useState();

  const isOrderSummary = true;

  //display active button once user selects desired options
  useEffect(() => {
    if (coffee === "capsule" && type && amount && delivery) {
      setActiveBtn(true);
    } else if (coffee && type && amount && delivery && grind) {
      setActiveBtn(true);
    }
  }, [amount, coffee, delivery, grind, type]);

  //only show modal window if user selects all options
  const handleShowModal = () => {
    if (coffee && type && amount && delivery) {
      setShowModal(true);
    }
  };

  //display options when user selects preference
  const handleShowAnswer = (index) => {
    setShowAnswer(index);

    const selectedEl = document.querySelector(`.question--${index}`);
    selectedEl.scrollIntoView({ top: 0, behaviour: "smooth" });

    //add accent colour on selection click
    setActiveSelection(index);
  };

  return (
    <section className="create-plan">
      <div className="flex-container">
        <QuestionsSummary
          plans={plans}
          handleShowAnswer={handleShowAnswer}
          activeSelection={activeSelection}
        />
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
                setTotal={setTotal}
                showAnswer={showAnswer}
                handleShowAnswer={handleShowAnswer}
              />
            );
          })}
        </div>
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
        <div className="summary-container">
          {isOrderSummary && (
            <button
              onClick={handleShowModal}
              className={activeBtn ? "button" : "disabled"}
            >
              Create your plan
            </button>
          )}
        </div>
      </>
      {showModal && (
        <OrderSummaryModal
          coffee={coffee}
          type={type}
          amount={amount}
          grind={grind}
          delivery={delivery}
          plans={plans}
          total={total}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </section>
  );
};

export default Preferences;
