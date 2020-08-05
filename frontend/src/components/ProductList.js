import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <ul className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          brand={product.brand}
          image={product.image}
          rating={product.rating}
          price={product.price}
          numReviews={product.numReviews}
        />
      ))}
    </ul>
  );
};

export default ProductList;
