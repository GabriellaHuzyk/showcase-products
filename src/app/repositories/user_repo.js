const User = require("../models").User;
const Favorite = require("../models").Favorite;
const { hashSync } = require("bcryptjs");

class UserRepository {
  async findCreate({ userName, userEmail, password }) {
    const find = await User.findOne({
      where: { email: userEmail },
    });

    if (find) throw { succes: false, message: "User allready exists." };

    const passwordHash = hashSync(password, 10);
    return await User.create({ name: userName, email: userEmail, password: passwordHash });
  }

  async login({ userEmail }) {
    const result = await User.findOne({ where: { email: userEmail } });

    if (!result) throw { success: false, message: "Incorrect email." };

    return result;
  }

  async listUsers() {
    return await User.findAndCountAll();
  }
}

module.exports = UserRepository;
