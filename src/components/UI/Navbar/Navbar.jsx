import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__links">
        <li>
          <NavLink to="cards" className="navbar__link">
            main
          </NavLink>
        </li>
        <li>
          <NavLink to="random" className="navbar__link">
            random
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
