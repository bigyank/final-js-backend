import User from '../models/User.js';

class UserService {
  createUser(user) {
    return new User(user).save();
  }

  findUser(user) {
    return new User(user).fetch({ require: false, withRelated: ['posts'] });
  }
}

export default new UserService();