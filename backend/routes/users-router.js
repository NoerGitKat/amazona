import express from "express";

const usersRouter = express.Router();

// Validators
import validateLogin from "./../middlewares/validation/validateLogin";

// Controllers
import { createAdmin, loginUser } from "./../controllers/users-controllers";

usersRouter.route("/create-admin").get(createAdmin);
usersRouter.route("/login").post(validateLogin, loginUser);

export default usersRouter;
