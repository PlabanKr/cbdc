import "./bank.ac.sidebar.style.css";

const BankAcSidebar = () => {
  return (
    <div className="bank-ac-sidebar-main">
      <p className="bank-ac-sidebar-txt-lg">No Bank Account</p>
      <p  className="bank-ac-sidebar-txt-lg txt-found">Found</p>
      <p className="bank-ac-sidebar-txt-sm">Please add your bank account to enable fiat transactions.</p>
    </div>
  );
};

export default BankAcSidebar;
