import { FaMapMarkerAlt, FaTrash, FaTruck, FaFileAlt, FaCalendarAlt, FaCreditCard } from "react-icons/fa";

const steps = [
  { icon: <FaMapMarkerAlt />, label: "Postcode" },
  { icon: <FaTrash />, label: "Waste Type" },
  { icon: <FaTruck />, label: "Select Skip" },
  { icon: <FaFileAlt />, label: "Permit Check" },
  { icon: <FaCalendarAlt />, label: "Choose Date" },
  { icon: <FaCreditCard />, label: "Payment" }
];

const Navbar = ({ currentStep = 2 }) => {
  return (
    <div className="bg-black text-white py-5 px-4 flex justify-center overflow-x-auto">
      <div className="flex space-x-6 cursor-pointer">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-all ${
              index === currentStep
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <span className="text-sm">{step.icon}</span>
            <span className="text-sm font-medium whitespace-nowrap">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
