import bookshelf from '../db.js';
import Post from './Post.js';
import Comment from './Comment.js';

const TABLE_NAME = 'users';

class User extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get uuid() {
    return true;
  }

  get hidden() {
    return ['password'];
  }

  posts() {
    return this.hasMany(Post);
  }

  comments() {
    return this.hasMany(Comment);
  }
}

export default User;
