import express from "express";
import { celebrate } from "celebrate";
import { getPost, makePost } from "../controllers/postController.js";
import { makePostValidator } from "../validators/postsValidator.js";

const router = express.Router();

router.route("/").post(celebrate(makePostValidator), makePost);
router.route("/:id").get(getPost);

export default router;
