import express from "express";
import { UserController } from "../controller/users.js";
import { AuthController } from "../controller/auth.js";
import { UsersMiddlewares } from "../middlewares/users.js";
export const userRoute = express.Router();

userRoute.get('/', UsersMiddlewares.userSchemaVerification, UsersMiddlewares.userExist, AuthController.register);

userRoute.get('/:id', UsersMiddlewares.userSchemaVerification, UserController.getById);
