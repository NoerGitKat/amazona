import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ProductOrder = ({ price, inStock, params }) => {
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();

  const handleQuantitySelect = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    history.push(`/cart/${params.id}?qty=${quantity}`);
  };

  const quantityValues = [...Array(inStock).keys()];

  const quantityOpts = quantityValues.map((value) => (
    <option key={value + 1} value={value + 1}>
      {value + 1}
    </option>
  ));

  return (
    <div className="product-details">
      <ul>
        <li>Price: {price}</li>
        {inStock > 0 ? (
          <>
            <li>Status: In stock</li>

            <li>
              Quantity:{" "}
              <select value={quantity} onChange={handleQuantitySelect}>
                {quantityOpts}
              </select>
            </li>
            <li>
              <button onClick={handleAddToCart}>Add to cart</button>
            </li>
          </>
        ) : (
          <li>
            <i>Out of stock</i>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProductOrder;
