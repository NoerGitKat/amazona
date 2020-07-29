import React from "react";
import { Link } from "react-router-dom";

import Product from "./../components/Product";

const ProductsPage = ({ match }) => {
  console.log(match);
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
  const product = products.find((product) => {
    return product.id === Number(match.params.id);
  });

  return (
    <>
      <Link to="/">Back to results</Link>
      <Product
        id={product.id}
        name={product.name}
        image={product.image}
        brand={product.brand}
        price={product.price}
        rating={product.rating}
        numReviews={product.numReviews}
      />
    </>
  );
};

export default ProductsPage;
