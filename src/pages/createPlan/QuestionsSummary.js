import { useState } from "react";

const QuestionsSummary = ({ handleShowAnswer, plans, activeSelection }) => {
  return (
    <ul className="questions-summary">
      {plans.map((plan) => {
        return (
          <li
            //add accent colour on selection click
            className={activeSelection === plan.id ? "active" : "list-item"}
            key={plan.id}
            onClick={() => handleShowAnswer(plan.id)}
          >
            {plan.category}
          </li>
        );
      })}
    </ul>
  );
};

export default QuestionsSummary;
