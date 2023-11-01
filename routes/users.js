import express from "express";
import { UserController } from "../controller/users.js";
import { AuthController } from "../controller/auth.js";
import { UsersMiddlewares } from "../middlewares/users.js";
export const userRoute = express.Router();

userRoute.get('/', UserController.getAll);

userRoute.get('/:id', UsersMiddlewares.userSchemaVerification, UserController.getById);

