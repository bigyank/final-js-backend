import Post from "../models/Post.js";

class PostService {
  createPost(post) {
    return new Post(post).save();
  }

  getPost(id) {
    return new Post(id).fetch({
      withRelated: ["user"],
    });
  }
}

export default new PostService();
