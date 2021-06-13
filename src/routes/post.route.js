import express from 'express';
import { celebrate } from 'celebrate';

import {
  deletePostById,
  editPostById,
  getAllPosts,
  getPost,
  makePost,
} from '../controllers/post.controller.js';
import {
  editPostValidator,
  makePostValidator,
} from '../validators/posts.validator.js';

const router = express.Router();

router.route('/').get(getAllPosts).post(celebrate(makePostValidator), makePost);
router
  .route('/:id')
  .get(getPost)
  .delete(deletePostById)
  .put(celebrate(editPostValidator), editPostById);

export default router;
