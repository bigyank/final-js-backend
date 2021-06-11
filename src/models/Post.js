import bookshelf from "../db.js";

const TABLE_NAME = "posts";

class Post extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get uuid() {
    return true;
  }

  user() {
    return this.belongsTo("User");
  }
}

export default Post;
