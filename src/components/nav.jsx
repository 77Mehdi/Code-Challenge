import { FaMapMarkerAlt, FaTrash, FaTruck, FaFileAlt, FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const steps = [
  { path: "/postcode", icon: <FaMapMarkerAlt />, label: "Postcode" },
  { path: "/waste-type", icon: <FaTrash />, label: "Waste Type" },
  { path: "/select-skip", icon: <FaTruck />, label: "Select Skip" },
  { path: "/permit-check", icon: <FaFileAlt />, label: "Permit Check" },
  { path: "/choose-date", icon: <FaCalendarAlt />, label: "Choose Date" },
  { path: "/payment", icon: <FaCreditCard />, label: "Payment" }
];

const Navbar = () => {
  return (
    <div className="bg-black text-white py-5 px-4 flex justify-center overflow-x-auto ">
      <div className="flex space-x-6 cursor-pointer">
        {steps.map((step, index) => (
          <NavLink
            key={index}
            to={step.path}
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-1 rounded-full transition-all ${
                isActive ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
              }`
            }
          >
            <span className="text-sm">{step.icon}</span>
            <span className="text-sm font-medium whitespace-nowrap">{step.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
