import express from "express";

import config from "./config";
import connectDB from "./util/connectDB";

const app = express();
const PORT = process.env.PORT || 5000;

// Parse body for JSON
app.use(express.json());

// Routes
import productRouter from "./routes/product-router";
import usersRouter from "./routes/users-router";

// Middlewares
app.use("/api/product", productRouter);
app.use("/api/users", usersRouter);

// Activate server
app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}!`);

  // Connect to DB
  connectDB(config);
});
