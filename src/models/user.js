import bookshelf from "../db.js";

const TABLE_NAME = "users";

class User extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get uuid() {
    return true;
  }

  get hidden() {
    return ["password"];
  }

  posts() {
    return this.hasMany("Post");
  }
}

export default User;
