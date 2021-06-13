import Post from '../models/Post.js';

class PostService {
  createPost(post) {
    return new Post(post).save();
  }

  async editPostById(userId, postId, updatedPost) {
    const post = await Post.where({ id: postId, user_id: userId }).fetch({
      require: false,
    });

    if (!post) {
      return null;
    }

    return post.save(updatedPost, {
      method: 'update',
    });
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
