import OrderSummary from "./OrderSummary";

const OrderSummaryModal = ({ coffee, type, amount, grind, delivery }) => {
  return (
    <section className="summary-modal">
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

export default OrderSummaryModal;
