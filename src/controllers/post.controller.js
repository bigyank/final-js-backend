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
  const fetchedPost = await postService.getPostById({ id });

  if (!fetchedPost) {
    throw new createError.NotFound();
  }

  res.status(StatusCodes.OK).send(fetchedPost);
}

export async function getAllPosts(req, res) {
  const fetchedPost = await postService.getAllPosts();

  if (!fetchedPost) {
    return res.status(StatusCodes.OK).send([]);
  }

  return res.status(StatusCodes.OK).send(fetchedPost);
}

export async function editPostById(req, res) {
  const { id: userId } = req.user;
  const { id: postId } = req.params;
  const postUpdates = req.body;

  const updatedPost = await postService.editPostById(
    userId,
    postId,
    postUpdates
  );

  if (!updatedPost) {
    throw new createError.NotFound();
  }

  return res.status(StatusCodes.ACCEPTED).send(updatedPost);
}

export async function deletePostById(req, res) {
  const { id: userId } = req.user;
  const { id } = req.params;

  await postService.deletePostById({ id, user_id: userId });

  return res.status(StatusCodes.NO_CONTENT).end();
}
