import logo from "../../assets/logo.png";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="relative inline-block pb-1 text-gray-600 hover:text-green-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
  >
    {children}
  </a>
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between p-5 shadow-2xl">
      <a href="#">
        <img src={logo} alt="Logo" />
      </a>

      <RxHamburgerMenu
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      <ul
        className={`
          flex flex-col items-center gap-6
          absolute top-full left-0 w-full bg-white shadow-md z-50
          md:static md:w-auto md:flex-row md:items-center md:shadow-none md:p-0 md:bg-transparent md:max-h-full md:overflow-visible md:opacity-100
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-96 opacity-100 p-5" : "max-h-0 opacity-0 pointer-events-none"}
        `}
      >
        <li>
          <NavLink href="#">Home</NavLink>
        </li>
        <li>
          <NavLink href="#">About</NavLink>
        </li>
        <li>
          <NavLink href="#">Services</NavLink>
        </li>
        <li>
          <NavLink href="#">Blog</NavLink>
        </li>
        <li>
          <NavLink href="#">Contact</NavLink>
        </li>
        <li>
          <button className="bg-[#25771b] text-amber-50 relative overflow-hidden py-3 px-8 border border-[#47a739] rounded-lg group">
            <span className="absolute inset-0 bg-green-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></span>
            <div className="relative z-10 flex gap-4 items-center">
              <FaPhoneAlt />
              <span className="group-hover:text-white transition-colors duration-300">
                (10) 892-293 2678
              </span>
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
