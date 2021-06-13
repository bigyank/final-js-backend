import express from 'express';
import { celebrate } from 'celebrate';

import {
  makeComment,
  deleteCommentById,
  editCommentById,
} from '../controllers/comment.controller.js';
import {
  editCommentValidator,
  makeCommentValidator,
} from '../validators/comment.validator.js';

const router = express.Router();

router.route('/').post(celebrate(makeCommentValidator), makeComment);

router
  .route('/:id')
  .delete(deleteCommentById)
  .put(celebrate(editCommentValidator), editCommentById);

export default router;
