import express from "express";

const productRouter = express.Router();

// Controllers
import {
  getProducts,
  getSingleProduct,
} from "./../controllers/product-controllers";

// Validators
import validateNewProduct from "./../middlewares/validation/validateNewProduct";

// Middlewares
import checkAuth from "./../middlewares/checkAuth";

productRouter.route("/").get(getProducts).post(validateNewProduct, );

productRouter.route("/:productId").get(getSingleProduct);

export default productRouter;
