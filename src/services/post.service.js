import Post from '../models/Post.js';

class PostService {
  createPost(post) {
    return new Post(post).save();
  }

  getPostById(id) {
    return Post.where(id).fetch({
      require: false,
      withRelated: ['user', 'comments.user'],
    });
  }

  getAllPosts() {
    return Post.fetchAll();
  }

  deletePostById({ id, user_id }) {
    return Post.where({ id, user_id }).destroy({ require: false });
  }
}

export default new PostService();
