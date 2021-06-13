import Comment from '../models/Comment.js';

class CommentService {
  createComment(comment) {
    return new Comment(comment).save();
  }

  async editCommentById(userId, commentId, updatedComment) {
    const comment = await Comment.where({
      id: commentId,
      user_id: userId,
    }).fetch({
      require: false,
    });

    if (!comment) {
      return null;
    }

    return comment.save(updatedComment, {
      method: 'update',
    });
  }

  deleteCommentById({ id, user_id }) {
    return Comment.where({ id, user_id }).destroy({ require: false });
  }
}

export default new CommentService();
