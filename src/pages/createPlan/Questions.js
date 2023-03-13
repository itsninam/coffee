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
  delivery,
  setTotal,
  showAnswer,
  handleShowAnswer,
}) => {
  const [activeCard, setActiveCard] = useState();
  const [hideAnswer, setHideAnswer] = useState(true);

  //capture user choice on card selection
  const handleOptionClick = (selectedOption, selectedCard) => {
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
  };

  //if user selects 'capsule', disable fourth question
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

  //TODO - refactor
  //set pricing based on user weight selection
  useEffect(() => {
    if (amount === "250g") {
      const prices = [7.2, 9.6, 12.0];
      handlePricing(prices);
      if (delivery === "every week") {
        setTotal((prices[0] * 4).toFixed(2));
      } else if (delivery === "every 2 weeks") {
        setTotal((prices[1] * 4).toFixed(2));
      } else if (delivery === "every month") {
        setTotal((prices[2] * 4).toFixed(2));
      }
    } else if (amount === "500g") {
      const prices = [13.0, 17.5, 22.0];
      handlePricing(prices);
      if (delivery === "every week") {
        setTotal((prices[0] * 2).toFixed(2));
      } else if (delivery === "every 2 weeks") {
        setTotal((prices[1] * 2).toFixed(2));
      } else if (delivery === "every month") {
        setTotal((prices[2] * 2).toFixed(2));
      }
    } else if (amount === "1000g") {
      const prices = [22.0, 32.0, 42.0];
      handlePricing(prices);
      if (delivery === "every week") {
        setTotal((prices[0] * 1).toFixed(2));
      } else if (delivery === "every 2 weeks") {
        setTotal((prices[1] * 1).toFixed(2));
      } else if (delivery === "every month") {
        setTotal((prices[2] * 1).toFixed(2));
      }
    }
  }, [amount, delivery, setTotal]);

  return (
    <div className={`question--${plan.id}`}>
      <div
        className="question-container"
        onClick={() => handleShowAnswer(plan.id)}
      >
        <h3>{plan.question}</h3>
        <img src={arrow} alt="open and close arrow" />
      </div>
      {plan.id === 3 && hideAnswer
        ? null
        : showAnswer === plan.id && (
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
