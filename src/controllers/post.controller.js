import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';

import postService from '../services/post.service.js';

export async function makePost(req, res) {
  const { id } = req.user;
  const { title, body } = req.body;

  const newPost = await postService.createPost({ user_id: id, title, body });
  res.status(StatusCodes.CREATED).send(newPost);
}

export async function getPost(req, res) {
  const { id } = req.params;
  const fetchedPost = await postService.getPost({ id });

  if (!fetchedPost) {
    throw new createError.NotFound();
  }

  res.status(StatusCodes.ACCEPTED).send(fetchedPost);
}
