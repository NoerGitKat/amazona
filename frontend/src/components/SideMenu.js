import React from "react";

const SideMenu = ({ setIsOpen, isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen && "open"}`}>
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={() => setIsOpen(false)}>
        x
      </button>
      <ul>
        <li>
          <a href="index.html">Pants</a>
        </li>

        <li>
          <a href="index.html">Shirts</a>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;
