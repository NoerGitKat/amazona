import { check } from "express-validator";

const validateSignup = [
  check("name").isAlphanumeric().isLength({ min: 3 }),
  check("email").isEmail(),
  check("password").isAlphanumeric(),
];

export default validateSignup;
