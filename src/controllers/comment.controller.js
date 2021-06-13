import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';

import commentService from '../services/comment.service.js';

export async function makeComment(req, res) {
  const { id } = req.user;
  const { body, postId } = req.body;

  const newPost = await commentService.createComment({
    user_id: id,
    post_id: postId,
    body,
  });

  res.status(StatusCodes.CREATED).send(newPost);
}

export async function editCommentById(req, res) {
  const { id: userId } = req.user;
  const { id: commentId } = req.params;
  const commentUpdates = req.body;

  const updatedComment = await commentService.editCommentById(
    userId,
    commentId,
    commentUpdates
  );

  if (!updatedComment) {
    throw new createError.NotFound();
  }

  return res.status(StatusCodes.ACCEPTED).send(updatedComment);
}

export async function deleteCommentById(req, res) {
  const { id: userId } = req.user;
  const { id } = req.params;

  await commentService.deleteCommentById({ id, user_id: userId });

  return res.status(StatusCodes.NO_CONTENT).end();
}
