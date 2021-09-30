const UserRepo = require("../repositories/user_repo");

const repo = new UserRepo();

class UserService {
  async userValidate({ user }, { password }) {
    const userRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{4,}$/;

    if (!userRegex.test(String(user).toLowerCase())) {
      throw new Error("Invalid user");
    }

    //quatro números pelo menos, sendo 1 maiúscula e 1 minúscula.
    //if (!passwordRegex.test(String(password))) {
    //  throw new Error("Invalid password");
    //}

    return repo.userRepository({ user }, { password });
  }
}

module.exports = UserService;
