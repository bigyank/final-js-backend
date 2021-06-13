import Comment from '../models/Comment.js';

class CommentService {
  createComment(comment) {
    return new Comment(comment).save();
  }

  deleteCommentById({ id, user_id }) {
    return Comment.where({ id, user_id }).destroy({ require: false });
  }
}

export default new CommentService();
