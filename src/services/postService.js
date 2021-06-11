import Post from "../models/Post.js";

class PostService {
  createPost(post) {
    return new Post(post).save();
  }
}

export default new PostService();
