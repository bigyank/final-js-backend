import express from "express";
import { celebrate } from "celebrate";
import authRoute from "./authRoute/authRoute.js";
import { authFormValidator } from "../validators/authValidator.js";

const router = express.Router();

router.use("/auth", celebrate(authFormValidator), authRoute);

export default router;
