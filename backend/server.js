import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// Routes
import productRouter from "./routes/product-router";

// Middlewares
app.use("/api/product", productRouter);

// Activate server
app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}!`);
});
