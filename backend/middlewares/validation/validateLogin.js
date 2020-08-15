import { check } from "express-validator";

const validateLogin = [
  check("email").isEmail(),
  check("password").isAlphanumeric(),
];

export default validateLogin;
