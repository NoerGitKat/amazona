import { check } from "express-validator";

const validateNewProduct = [
  check("name")
    .isLength({ min: 3 })
    .withMessage("Product name should be at least 3 characters."),
  check("price").isNumeric().withMessage("Product can only be a number."),
  // check("image")
  //   .isLength({ min: 3 })
  //   .withMessage("Product name should be at least 3 characters."),
  // check("brand")
  //   .isLength({ min: 3 })
  //   .withMessage("Product brand should be at least 3 characters."),
  // check("category")
  //   .isLength({ min: 3 })
  //   .withMessage("Product name should be at least 3 characters."),
  // check("inStock")
  //   .isLength({ min: 3 })
  //   .withMessage("Product name should be at least 3 characters."),
  // check("description")
  //   .isLength({ min: 3 })
  //   .withMessage("Product name should be at least 3 characters."),
  // check("rating")
  //   .isLength({ min: 3 })
  //   .withMessage("Product name should be at least 3 characters."),
  // check("numReviews")
  //   .isLength({ min: 3 })
  //   .withMessage("Product name should be at least 3 characters."),
];

export default validateNewProduct;
