import React from "react";
import { Link } from "react-router-dom";

const Header = ({ setIsOpen }) => {
  return (
    <header className="header">
      <div className="brand">
        <button onClick={() => setIsOpen(true)}>&#9776;</button>
        <Link to="/">amazona</Link>
      </div>
      <div className="header-links">
        <Link to="/cart">Cart</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
  );
};

export default Header;
