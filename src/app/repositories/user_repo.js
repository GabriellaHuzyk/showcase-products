const sequelize = require("sequelize");
const Model = require("../models/user_model");

class UserRepository {
  async userRepository({ user }, { password }) {
    const users = await Model.findAll({
      where: { userEmail: user },
    });
    if (!users) {
      return users;
    }

    throw new Error("Deu ruim no repo");
  }
}
module.exports = UserRepository;
