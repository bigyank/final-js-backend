import express from 'express';
import { celebrate } from 'celebrate';

import {
  makeComment,
  deleteCommentById,
} from '../controllers/comment.controller.js';
import { makeCommentValidator } from '../validators/comment.validator.js';

const router = express.Router();

router.route('/').post(celebrate(makeCommentValidator), makeComment);

router.route('/:id').delete(deleteCommentById);

export default router;
