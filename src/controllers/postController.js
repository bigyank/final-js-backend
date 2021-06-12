import postService from "../services/postService.js";

export async function makePost(req, res) {
  const { id } = req.user;
  const { title, body } = req.body;

  const newPost = await postService.createPost({ user_id: id, title, body });
  res.status(201).send(newPost);
}

export async function getPost(req, res) {
  const { id } = req.params;
  const fetchedPost = await postService.getPost({ id });
  res.status(200).send(fetchedPost);
}
