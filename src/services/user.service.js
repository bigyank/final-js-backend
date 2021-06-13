import User from '../models/User.js';

class UserService {
  createUser(user) {
    return new User(user).save();
  }

  findUser(user) {
    return User.where(user).fetch({ require: false });
  }

  getUserPosts(user) {
    return User.where(user).fetch({ require: false, withRelated: ['posts'] });
  }
}

export default new UserService();
