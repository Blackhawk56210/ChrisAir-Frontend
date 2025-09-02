import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo-white.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-white border-b w-full bg-black h-20 sticky top-0 z-50">
      <nav className="flex items-center justify-between h-full px-4 md:px-8">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-20" />

        {/* mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-xl">
          <NavLink to="/" className="hover:text-blue-300">
            Home
          </NavLink>
          <NavLink to="/inventory" className="hover:text-blue-300">
            Inventory
          </NavLink>
          <NavLink to="/support" className="hover:text-blue-300">
            Support
          </NavLink>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+1850912345678" className="px-2">
            +1 (850) 9-CHRISAIR
          </a>
          <NavLink
            to="/inventory"
            className="hover:bg-blue-300 border text-black rounded-br-xl rounded-tl-xl p-2 bg-white"
          >
            Book Charter
          </NavLink>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t px-4 pb-4 absolute left-0 right-0 top-20 z-40">
          <div className="flex flex-col gap-4 text-lg">
            <NavLink
              to="/"
              className="hover:text-blue-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/inventory"
              className="hover:text-blue-300"
              onClick={() => setMenuOpen(false)}
            >
              Inventory
            </NavLink>
            <NavLink
              to="/support"
              className="hover:text-blue-300"
              onClick={() => setMenuOpen(false)}
            >
              Support
            </NavLink>
            <a href="tel:+1850912345678" className="px-2">
              +1 (850) 9-CHRISAIR
            </a>
            <NavLink
              to="/inventory"
              className="hover:bg-blue-300 border text-black rounded-br-xl rounded-tl-xl p-2 bg-white w-fit"
              onClick={() => setMenuOpen(false)}
            >
              Book Charter
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
