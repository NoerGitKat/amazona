import express from "express";

const productRouter = express.Router();

// Controllers
import {
  getProducts,
  getSingleProduct,
} from "./../controllers/product-controllers";

productRouter.route("/").get(getProducts);
productRouter.route("/:productId").get(getSingleProduct);

export default productRouter;
