import Sidebar from "../../components/sidebar/sidebar.component";
import "./balance.css";
import ConnectWalletBtn from "../../components/button/connect-wallet-btn/connect.wallet.btn.component";
import LogoutBtn from "../../components/button/logout-btn/logout.btn.component";
import BalanceComponent from "../../components/main/BalanceComponent/balance.component";

const Balance = () => {
  return (
    <div className="balance-container">
      <Sidebar />
      <div className="balance-container-main">
        <div className="dashboard-topbar">
          {/* <button className="dashboard-topbar-connect-wallet">
            Connect Wallet
          </button> */}
          <ConnectWalletBtn />
          {/* <button className="dashboard-topbar-logout-button">
            <FaPowerOff />
          </button> */}
          <LogoutBtn />
        </div>
        <BalanceComponent />
      </div>
    </div>
  );
};

export default Balance;