import { Router } from "express";
import { VerifyController } from "../controller/verify.js";

export const verifyRoute = Router();

verifyRoute.get('/verify', VerifyController.handleCode)