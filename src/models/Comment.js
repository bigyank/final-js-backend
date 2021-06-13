import bookshelf from '../db.js';
import User from './User.js';
import Post from './Post.js';

const TABLE_NAME = 'comments';

class Comment extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }

  get uuid() {
    return true;
  }

  user() {
    return this.belongsTo(User);
  }

  post() {
    return this.belongsTo(Post);
  }
}

export default Comment;
