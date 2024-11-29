import DashboardComponent from "../../components/main/DashboardComponent/dashboard.component";
import Sidebar from "../../components/sidebar/sidebar.component";
// import { FaPowerOff } from "react-icons/fa6";
import "./dashboard.css";
import ConnectWalletBtn from "../../components/button/connect-wallet-btn/connect.wallet.btn.component";
import LogoutBtn from "../../components/button/logout-btn/logout.btn.component";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <div className="dashboard-topbar">
          {/* <button className="dashboard-topbar-connect-wallet">Connect Wallet</button> */}
          <ConnectWalletBtn />
          {/* <button className="dashboard-topbar-logout-button"><FaPowerOff /></button> */}
          <LogoutBtn />
        </div>
        <DashboardComponent />        
      </div>
    </div>
  );
};

export default Dashboard;