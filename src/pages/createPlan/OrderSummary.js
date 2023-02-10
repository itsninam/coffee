const OrderSummary = ({ coffee, type, amount, grind, delivery }) => {
  return (
    <section className="order-summary">
      <h4>Order summary</h4>
      <p className="summary">
        “I drink my coffee as{" "}
        {coffee ? (
          <span className="user-choice">{coffee}</span>
        ) : (
          <span className="underline">&nbsp;</span>
        )}
        , with a{" "}
        {type ? (
          <span className="user-choice">{type}</span>
        ) : (
          <span className="underline">&nbsp;</span>
        )}{" "}
        type of bean.{" "}
        {amount ? (
          <span className="user-choice">{amount}</span>
        ) : (
          <span className="underline">&nbsp;</span>
        )}{" "}
        ground ala{" "}
        {grind ? (
          <span className="user-choice">{grind}</span>
        ) : (
          <span className="underline">&nbsp;</span>
        )}{" "}
        sent to me{" "}
        {delivery ? (
          <span className="user-choice">{delivery}</span>
        ) : (
          <span className="underline">&nbsp;</span>
        )}
        .”
      </p>
    </section>
  );
};

export default OrderSummary;
