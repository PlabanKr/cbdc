import TotalPortfolioValue from "../../card/total-portfolio-value/total-portfolio-value.component";
import "./balance.style.css";

const BalanceComponent = () => {
  return <div className="balance-component-main">
    <div className="balance-component-info">
      <TotalPortfolioValue />
    </div>
  </div>
}

export default BalanceComponent;