import React from "react";
import Product from "./Product";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "T-Shirt",
      brand: "Nike",
      image: "/images/d1.jpg",
      rating: 4.5,
      price: "$60",
      numReviews: 10,
    },
    {
      id: 2,
      name: "T-Shirt",
      brand: "Nike",
      image: "/images/d1.jpg",
      rating: 4.5,
      price: "$60",
      numReviews: 10,
    },
    {
      id: 3,
      name: "T-Shirt",
      brand: "Nike",
      image: "/images/d1.jpg",
      rating: 4.5,
      price: "$60",
      numReviews: 10,
    },
    {
      id: 4,
      name: "T-Shirt",
      brand: "Nike",
      image: "/images/d1.jpg",
      rating: 4.5,
      price: "$60",
      numReviews: 10,
    },
    {
      id: 5,
      name: "T-Shirt",
      brand: "Nike",
      image: "/images/d1.jpg",
      rating: 4.5,
      price: "$60",
      numReviews: 10,
    },
    {
      id: 6,
      name: "T-Shirt",
      brand: "Nike",
      image: "/images/d1.jpg",
      rating: 4.5,
      price: "$60",
      numReviews: 10,
    },
  ];
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
