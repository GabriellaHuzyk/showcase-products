const sequelize = require("sequelize");
const { User } = require("../models/user_model");

class UserRepository {
  async userRepository({ user }) {
    const users = await User.findAll({
      where: { userEmail: user },
    });

    // acho que aqui tava o erro
    if (users) {
      return users;
    }

    throw new Error("Deu ruim no repo");
  }
}
module.exports = UserRepository;
