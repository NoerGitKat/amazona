import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ setIsOpen }) => {
  const authState = useSelector((state) => state.authState);
  return (
    <header className="header">
      <div className="brand">
        <button onClick={() => setIsOpen(true)}>&#9776;</button>
        <Link to="/">amazona</Link>
      </div>
      <div className="header-links">
        <Link to="/cart">Cart</Link>
        {authState ? null : <Link to="/login">Sign In</Link>}
      </div>
    </header>
  );
};

export default Header;
