import bookshelf from '../db.js';
import User from './User.js';
import Comment from './Comment.js';

const TABLE_NAME = 'posts';

class Post extends bookshelf.Model {
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

  comments() {
    return this.hasMany(Comment);
  }

  static dependents = ['comments'];
}

export default Post;
