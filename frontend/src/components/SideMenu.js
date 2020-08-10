import React from "react";
import { Link } from "react-router-dom";

const SideMenu = ({ setIsOpen, isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen && "open"}`}>
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={() => setIsOpen(false)}>
        x
      </button>
      <ul>
        <li onClick={() => setIsOpen(false)}>
          <Link to="/">Pants</Link>
        </li>

        <li onClick={() => setIsOpen(false)}>
          <Link to="/">Shirts</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;
