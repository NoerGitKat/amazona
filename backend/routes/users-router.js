import express from "express";

const usersRouter = express.Router();

// Validators
import validateLogin from "./../middlewares/validation/validateLogin";
import validateSignup from "./../middlewares/validation/validateSignup";

// Controllers
import {
  createAdmin,
  loginUser,
  signupUser,
} from "./../controllers/users-controllers";

usersRouter.route("/create-admin").get(createAdmin);
usersRouter.route("/login").post(validateLogin, loginUser);
usersRouter.route("/signup").post(validateSignup, signupUser);

export default usersRouter;
