import { FaPowerOff } from "react-icons/fa6";
import "./logout.btn.style.css";

const LogoutBtn = () => {
  return (
    <button className="logout-btn-main">
      <FaPowerOff />
    </button>
  );
}

export default LogoutBtn;