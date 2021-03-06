import dotenv from "dotenv";

// Activate .env
dotenv.config();

const config = {
  MONGODB_USER: process.env.MONGODB_USER,
  MONGODB_PW: process.env.MONGODB_PW,
  JWT_SECRET: process.env.JWT_SECRET,
};

export default config;
