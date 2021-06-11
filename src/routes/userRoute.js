import express from "express";
import { getProfileInfo } from "../controllers/userController.js";

const router = express.Router();

router.route("/profile").get(getProfileInfo);

export default router;
