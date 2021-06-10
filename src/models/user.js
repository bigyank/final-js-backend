import bookshelf from "../db.js";

const TABLE_NAME = "users";

class User extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hidden() {
    return ["password"];
  }
}

export default User;
