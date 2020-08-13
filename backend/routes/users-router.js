import express from "express";

const usersRouter = express.Router();

// Controllers
import { createAdmin } from "./../controllers/users-controllers";

usersRouter.route("/create-admin").get(createAdmin);

export default usersRouter;
