import { BsBoxArrowUpLeft } from "react-icons/bs";
import { CiGrid42 } from "react-icons/ci";
import { MdAccountBalanceWallet } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { TbNotes } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./sidebar.style.css";
import BankAcSidebar from "../card/bank-ac-sidebar/bank.ac.sidebar.component";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <h2 className="sidebar-title">CBDC</h2>
      <ul className="sidebar-links">
        <li className="sidebar-section-options">
          <Link to="/dashboard" className="sidebar-section-options-anchor">
            <CiGrid42 /> Dashboard
          </Link>
        </li>
        {/* Transfer Money Section */}
        <li className="sidebar-section-title">
          TRANSFER MONEY
        </li>
        <li className="sidebar-section-options">
          <RiContactsFill /> Contracts
        </li>
        <li className="sidebar-section-options">
          <BsBoxArrowUpLeft /> CBDC ID
        </li>
        {/* Transactions */}
        <li className="sidebar-section-title">
          TRANSACTIONS
        </li>
        <li className="sidebar-section-options">
          <TbNotes /> History
        </li>
        <li className="sidebar-section-options">
          <Link to="/dashboard/balance" className="sidebar-section-options-anchor">
            <MdAccountBalanceWallet /> Balance
          </Link>
        </li>
      </ul>
      <BankAcSidebar />
    </nav>
  )
}

export default Sidebar;