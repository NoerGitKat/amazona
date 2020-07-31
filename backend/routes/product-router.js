import express from "express";

const productRouter = express.Router();

// Controllers
import { getProducts } from "./../controllers/product-controllers";

productRouter.route("/").get(getProducts);

export default productRouter;
