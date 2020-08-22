import jwt from "jsonwebtoken";

import config from "./../config";

const createToken = (user) => {
  // 1. Choose which datapoints will be encrypted into the token
  const tokenizedData = {
    userId: user.id,
    email: user.email,
    isAdmin: user.isAdmin,
  };

  // 2. Choose options
  const options = { expiresIn: "1h" };

  // 3. Create token signature
  const token = jwt.sign(tokenizedData, config.JWT_SECRET, options);

  return token;
};

export default createToken;
