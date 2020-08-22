import { validationResult } from "express-validator";
import Product from "./../models/Product";

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

export const getProducts = async (req, res) => {
  const allProducts = await Product.find({});

  return res.status(200).send(allProducts);
};

export const getSingleProduct = async (req, res) => {
  const { productId } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );

  if (singleProduct) {
    return res.status(200).send(singleProduct);
  } else {
    return res.status(404).send({ msg: "Product not found!" });
  }
};

export const addNewProduct = async (req, res) => {
  const {
    name,
    price,
    image,
    brand,
    category,
    inStock,
    description,
    rating,
    numReviews,
  } = req.body;

  try {
    // 1. Validate request body
    const errors = validationResult(req);
    if (errors.length > 0) {
      return res.status(422).json({ errors });
    }

    // 2. Create a new product
    const newProduct = new Product({
      name,
      price,
      image,
      brand,
      category,
      inStock,
      description,
      rating,
      numReviews,
    });

    // 3. Save new product in DB
    newProduct.save();

    // 4. Respond with new product
  } catch (error) {}
};
