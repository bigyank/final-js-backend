import express from "express";
import authRoute from "./authRoute.js";
import userRoute from "./userRoute.js";
import { verifyJWT } from "../utils/jwt.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/users", verifyJWT, userRoute);

export default router;
