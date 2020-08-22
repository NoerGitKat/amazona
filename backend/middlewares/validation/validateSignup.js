import { check } from "express-validator";

const validateSignup = [
  check("name")
    .isLength({ min: 3 })
    .withMessage("Please use at least 3 characters for your name."),
  check("email").isEmail().withMessage("Please use a valid email address."),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Please use at least 6 characters for a password."),
];

export default validateSignup;
