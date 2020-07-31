import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, name, image, brand, price, rating, numReviews }) => {
  return (
    <li>
      <div className="product">
        <Link to={`/products/${id}`}>
          <img
            className="product-image"
            src={image}
            alt={`${name} by ${brand}`}
          />
        </Link>
        <div className="product-name">
          {" "}
          <Link to={`/products/${id}`}>{name}</Link>
        </div>
        <div className="product-brand">{brand}</div>
        <div className="product-price">{price}</div>
        <div className="product-rating">
          {rating} Stars ({numReviews} reviews)
        </div>
      </div>
    </li>
  );
};

export default Product;
