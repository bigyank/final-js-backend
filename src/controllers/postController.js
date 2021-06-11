import postService from "../services/postService.js";

export async function makePost(req, res) {
  const { id } = req.user;
  const { title, body } = req.body;

  const newPost = await postService.createPost({ user_id: id, title, body });
  res.status(201).send(newPost);
}
