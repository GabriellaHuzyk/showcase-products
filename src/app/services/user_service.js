const UserRepo = require("../repositories/user_repo");

const repo = new UserRepo();

class UserService {
  async userValidate({ user }, { password }) {
    const userRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{4,}$/;

    if (userRegex.test(String({ user }).toLowerCase())) {
      console.log("success");
    }
    //quatro números pelo menos, sendo 1 maiúscula e 1 minúscula.
    if (passwordRegex.test(String({ password }))) {
      console.log("success");
      return await repo.userRepository({ user }, { password });
    } else {
      //throw new Error("Deu ruim no service");
    }
  }
}
module.exports = UserService;
