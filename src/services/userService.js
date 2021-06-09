import User from "../models/user.js";

class UserService {
  createUser(user) {
    return new User(user).save();
  }
}

export default new UserService();
