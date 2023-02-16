import OrderSummary from "./OrderSummary";

const OrderSummaryModal = ({
  coffee,
  type,
  amount,
  grind,
  delivery,
  total,
  setShowModal,
}) => {
  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="summary-modal-overlay">
      <div className="summary-modal">
        <OrderSummary
          coffee={coffee}
          type={type}
          amount={amount}
          grind={grind}
          delivery={delivery}
        />
        <div className="summary-container">
          <p className="confirm-message">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <p className="total-price">${total}/mo</p>
          <div className="buttons-container">
            <button className="button" onClick={handleCloseModal}>
              Checkout
            </button>
            {/* <button className="button cancel-button">Cancel</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummaryModal;
