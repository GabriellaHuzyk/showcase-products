const { User } = require("../models/user_model");
const UserRepo = require("../repositories/user_repo");

const repo = new UserRepo();

class UserService {
  async userValidate({ userEmail, password }) {
    const userRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^[^\W_]{4}$/;
    //quatro dígitos pelo menos, sendo 1 letra e 1 número.
    if (!userRegex.test(String(userEmail).toLowerCase())) {
      console.log("Invalid email or password.");
    }

    if (!passwordRegex.test(String(password))) {
      console.log("Invalid email or password.");
    }
    return await repo.userFind({ userEmail, password });
  }
}
module.exports = UserService;
