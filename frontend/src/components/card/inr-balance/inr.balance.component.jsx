import "./inr.balance.style.css";

const InrBalance = () => {
  return (
    <div className="inr-balance-main">
      <p className="inr-balance-p">
        <span>INR Balance</span>
        <span>0.00</span>
      </p>
      <p className="inr-balance-p">
        <span>Locked</span>
        <span>0.00</span>
      </p>
    </div>
  );
};

export default InrBalance;
