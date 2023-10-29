import express from "express";
import { AuthController } from "../controller/auth.js";
import { UsersMiddlewares } from "../middlewares/users.js";

export const authRoute = express.Router();

authRoute.post('/register', UsersMiddlewares.userSchemaVerification, UsersMiddlewares.userExist, AuthController.register)