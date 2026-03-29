import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg py-3" : "bg-white/90 backdrop-blur-sm py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Agrica Logo" className="h-10 md:h-12" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-dark font-medium hover:text-secondary transition-colors after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 ${
                      isActive ? "text-secondary after:w-full" : "after:w-0"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <button className="bg-primary hover:bg-primary-hover text-white flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 shadow-md transform hover:-translate-y-1">
                <FaPhoneAlt className="text-sm" />
                <span className="font-semibold text-sm">(10) 892-293</span>
              </button>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-dark p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1] transition-opacity duration-300 md:hidden ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsOpen(false)}
        />
        <ul
          className={`
            fixed top-[70px] left-0 w-full bg-white shadow-xl z-[-1] flex flex-col items-center gap-6 py-10 transition-all duration-500 ease-in-out md:hidden
            ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
          `}
        >
          {navLinks.map((link) => (
            <li key={link.name} className="w-full text-center">
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-xl font-semibold transition-all ${
                    isActive ? "text-secondary scale-110" : "text-dark"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="mt-4">
            <button className="bg-primary text-white flex items-center gap-3 px-10 py-4 rounded-full font-bold">
              <FaPhoneAlt />
              <span>Call Us Now</span>
            </button>
          </li>
        </ul>
      </nav>
      {/* Spacer to prevent content from jumping under fixed nav */}
      <div className="h-[80px] md:h-[92px]"></div>
    </>
  );
};

export default Nav;
