import { useEffect, useState } from "react";
import arrow from "../../assets/plan/desktop/icon-arrow.svg";

const Question = ({
  plan,
  plans,
  setCoffee,
  setType,
  setAmount,
  setGrind,
  setDelivery,
  coffee,
  amount,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [activeCard, setActiveCard] = useState();
  const [hideAnswer, setHideAnswer] = useState(true);

  function handleOptionClick(selectedOption, selectedCard) {
    let userChoice = selectedOption.toLowerCase();

    plan.options.forEach((option) => {
      if (option.option.toLowerCase() === userChoice) {
        switch (plan.id) {
          case 0:
            setCoffee(userChoice);
            break;
          case 1:
            setType(userChoice);
            break;
          case 2:
            setAmount(userChoice);
            break;
          case 3:
            setGrind(userChoice);
            break;
          case 4:
            setDelivery(userChoice);
            break;
          default:
          //Do nothing
        }
      }
    });
    setActiveCard(selectedCard);
  }

  useEffect(() => {
    let question = document.querySelectorAll(".question-container");
    if (coffee === "capsule") {
      setHideAnswer(true);
      question[3].classList.add("disabled");
    } else {
      setHideAnswer(false);
      question[3].classList.remove("disabled");
    }
  }, [coffee]);

  const handlePricing = (price) => {
    const options = plans[4].options;
    const result = options.map((option, index) => ({
      ...option,
      description: `$${price[index].toFixed(
        2
      )} per shipment. Includes free priority shipping`,
    }));
    plans[4].options = result;
  };

  if (amount === "250g") {
    const prices = [7.2, 9.6, 12.0];
    handlePricing(prices);
  } else if (amount === "500g") {
    const prices = [13.0, 17.5, 22.0];
    handlePricing(prices);
  } else {
    const prices = [22.0, 32.0, 42.0];
    handlePricing(prices);
  }

  return (
    <div className="question">
      <div
        className="question-container"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <h3>{plan.question}</h3>
        <img src={arrow} alt="open and close arrow" />
      </div>
      {plan.id === 3 && hideAnswer
        ? null
        : showAnswer && (
            <div className="answer-container">
              {plan.options.map((option) => {
                return (
                  <div
                    className={
                      activeCard === option.id ? "active-card" : "option-card"
                    }
                    key={option.id}
                    onClick={() => {
                      handleOptionClick(option.option, option.id);
                    }}
                  >
                    <input type="radio" id={option.option} />
                    <label
                      htmlFor={option.option}
                      className={
                        activeCard === option.id ? "label-active" : "label-text"
                      }
                    >
                      {option.option}
                    </label>
                    <p
                      className={
                        activeCard === option.id
                          ? "description-active"
                          : "description-text"
                      }
                    >
                      {option.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
    </div>
  );
};

export default Question;
