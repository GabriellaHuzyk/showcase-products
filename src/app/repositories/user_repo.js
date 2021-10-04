const { nextTick } = require("process");
const sequelize = require("sequelize");
const { User } = require("../models/user_model");

class UserRepository {
  async userFind({ userEmail, password }) {
    const find = await User.findAll({
      where: { userEmail: userEmail },
    });
    if (find.index >= 0) {
      throw new Error("User allready exist.");
    }
    return await User.create({ userEmail, password });
  }
}

module.exports = UserRepository;
