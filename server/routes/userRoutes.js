import express from "express";
import { login, register } from "../controller/userController.js";

const userRoutes = express.Router();

userRoutes.post("/login", login);

userRoutes.post("/register", register);

export default userRoutes;
