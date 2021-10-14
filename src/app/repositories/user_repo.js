const sequelize = require("sequelize");
const { User } = require("../models/user_model");
const { hashSync, compareSync } = require("bcryptjs");

class UserRepository {
  async findCreate({ userEmail, password }) {
    const find = await User.findAll({
      where: { userEmail: userEmail },
    });

    if (find.index >= 0) {
      throw new Error("User allready exist.");
    }

    const passwordHash = hashSync(password, 10);
    const user = User.create({ userEmail, password: passwordHash });

    return user;
  }

  async login({ userEmail, password }) {
    return await User.findOne({ where: { userEmail: userEmail } });
  }

  async listUsers() {
    return await User.findAndCountAll();
  }
}

module.exports = UserRepository;
