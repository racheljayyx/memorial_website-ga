import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  AiOutlineClose,
  AiOutlineDoubleLeft,
  AiOutlineHeart,
} from "react-icons/ai";
import { FaCalendarDay, FaCarAlt } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/#service", label: "Service", icon: <FaCalendarDay size={20} /> },
    { to: "/#travel", label: "Travel", icon: <FaCarAlt size={20} /> },
    { to: "/#support", label: "Support", icon: <AiOutlineHeart size={20} /> },
  ];

  return (
    <header className="relative flex justify-center py-6">
      <div
        className="hidden sm:flex flex-wrap items-center justify-center space-x-8 sm:space-x-12 border rounded-xl px-6 sm:px-12 py-4 text-lg sm:text-xl font-semibold"
        style={{ color: "#a178d0", borderColor: "#a178d0" }}
      >
        {links.map(({ to, label }) => (
          <Link
            key={label}
            smooth
            to={to}
            className="hover:underline hover:underline-offset-4"
          >
            {label}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className={`fixed top-1/2 right-0 transform -translate-y-1/2 sm:hidden text-purple-600 hover:text-purple-800 transition-transform duration-300`}
      >
        <AiOutlineDoubleLeft
          size={26}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`sm:hidden fixed top-1/2 right-0 transform -translate-y-1/2 w-2/3 max-h-80 bg-gradient-to-b from-purple-50 to-white shadow-xl z-50 transition-transform duration-300 ease-in-out flex flex-col pt-6 space-y-4 overflow-hidden border-l border-purple-200 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="self-end mr-4 text-2xl text-purple-600 hover:text-purple-800 transition"
        >
          <AiOutlineClose />
        </button>
        {links.map(({ to, label, icon }) => (
          <Link
            key={label}
            smooth
            to={to}
            className="flex items-center w-full px-6 py-3 hover:bg-purple-200 text-purple-700 font-semibold transition"
            onClick={() => setOpen(false)}
          >
            <span className="mr-3">{icon}</span>
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
