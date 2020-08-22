import jwt from "jsonwebtoken";
import config from "./../config";
import { check } from "express-validator";

const checkAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    // 1. Remove "Bearer " from token to only get token 
    const onlyToken = token.split(" ")[1];

    // 2. Verify token
    const verifiedToken = jwt.verify(onlyToken, config.JWT_SECRET);

    // 3. Add token to request
    req.user = { userId: verifiedToken };

    // Go to next middelware
    next();
  } else {
    return res.status(401).json({ msg: "Please login again!" });
  }
};

export default checkAuth;
