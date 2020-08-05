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

export const getProducts = (req, res) => {
  res.status(200).send(products);
};

export const getSingleProduct = (req, res) => {
  const { productId } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );

  if (singleProduct) {
    res.status(200).send(singleProduct);
  } else {
    res.status(404).send({ msg: "Product not found!" });
  }
};
