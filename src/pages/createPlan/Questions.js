import { useEffect, useState } from "react";
import { isRouteErrorResponse } from "react-router-dom";
import arrow from "../../assets/plan/desktop/icon-arrow.svg";

const Question = ({
  plan,
  setCoffee,
  setType,
  setAmount,
  setGrind,
  setDelivery,
  coffee,
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
