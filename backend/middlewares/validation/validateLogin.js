import { check } from "express-validator";

const validateLogin = [
  check("email").isEmail().withMessage("Please use a valid email address."),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Please use at least 6 characters for your password."),
];

export default validateLogin;
