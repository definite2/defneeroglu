import { useState } from "react";
import navLinks from "../../constants/navLinks";
import NavLink from "./NavLink";
const MobileNavbar = () => {
  const [show, setShow] = useState(false);
  const onToggleNav = () => {
    setShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };
  return (
    <div className="sm:hidden">
      <button
        className="w-8 h-8 ml-1 mr-1 rounded"
        onClick={onToggleNav}
        aria-label="toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          {/* close icon */}
          {show ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            // hamburger icon
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
      {/* if not navShow then translate x 100% */}
      <div
        className={`fixed w-full h-full top-24 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* add toggle on all slided div/modal */}
        <button
          aria-label="toggle modal"
          className="fixed w-full h-full cursor-auto focus:outline-none"
        ></button>
        <nav className="fixed h-full mt-8">
          {navLinks.map((route, i) => (
            <div key={i} className="px-12 py-4" onClick={onToggleNav}>
              <NavLink key={i} href={route.href}>
                {route.title}
              </NavLink>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
export default MobileNavbar;
