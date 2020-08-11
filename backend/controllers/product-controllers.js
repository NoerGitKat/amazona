const products = [
  {
    id: 1,
    name: "T-Shirt",
    brand: "Nike",
    image: "/images/d1.jpg",
    rating: 3,
    price: 60,
    numReviews: 10,
    inStock: 8,
  },
  {
    id: 2,
    name: "T-Shirt",
    brand: "Nike",
    image: "/images/d1.jpg",
    rating: 4.5,
    price: 100,
    numReviews: 10,
    inStock: 3,
  },
  {
    id: 3,
    name: "T-Shirt",
    brand: "Nike",
    image: "/images/d1.jpg",
    rating: 5,
    price: 666,
    numReviews: 6,
    inStock: 0,
  },
  {
    id: 4,
    name: "T-Shirt",
    brand: "Nike",
    image: "/images/d1.jpg",
    rating: 4,
    price: 21,
    numReviews: 9,
    inStock: 10,
  },
  {
    id: 5,
    name: "T-Shirt",
    brand: "Nike",
    image: "/images/d1.jpg",
    rating: 4.5,
    price: 1,
    numReviews: 40,
    inStock: 100,
  },
  {
    id: 6,
    name: "T-Shirt",
    brand: "Nike",
    image: "/images/d1.jpg",
    rating: 4.5,
    price: 43,
    numReviews: 10,
    inStock: 8,
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
