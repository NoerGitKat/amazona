import React from "react";

const ProductAction = ({ price, status }) => {
  return (
    <div className="details-action">
      <ul>
        <li>Price: {price}</li>
        <li>Status: {status}</li>
        <li>
          Quantity:{" "}
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </li>
        <li>
          <button>Add to cart</button>
        </li>
      </ul>
    </div>
  );
};

export default ProductAction;
