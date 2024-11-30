import CryptoHoldings from "../../card/crypto-holdings/crypto.holdings.component";
import InrBalance from "../../card/inr-balance/inr.balance.component";
import TotalPortfolioValue from "../../card/total-portfolio-value/total-portfolio-value.component";
import "./balance.style.css";

const BalanceComponent = () => {
  return <div className="balance-component-main">
    <div className="balance-component-info-cards">
      <TotalPortfolioValue />
      <CryptoHoldings />
      <InrBalance />
    </div>
  </div>
}

export default BalanceComponent;