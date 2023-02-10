import { useState } from "react";
import arrow from "../../assets/plan/desktop/icon-arrow.svg";

const Question = ({
  plan,
  setCoffee,
  setType,
  setAmount,
  setGrind,
  setDelivery,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [activeCard, setActiveCard] = useState();

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

  return (
    <div className="question">
      <div
        className="question-container"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <h3>{plan.question}</h3>
        <img src={arrow} alt="open and close arrow" />
      </div>
      {showAnswer && (
        <div className="answer-container">
          {plan.options.map((option) => {
            return (
              <div
                className={activeCard === option.id ? "active" : "option"}
                key={option.id}
                onClick={() => {
                  handleOptionClick(option.option, option.id);
                }}
              >
                <input type="radio" id={option.option} />
                <label htmlFor={option.option}>{option.option}</label>
                <p>{option.description}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Question;
