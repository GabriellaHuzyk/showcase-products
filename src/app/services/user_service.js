const UserRepo = require("../repositories/user_repo");
const { compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const SECRET = "showcasegabriella";

const repo = new UserRepo();

class UserService {
  async validate({ userName, userEmail, password }) {
    const userRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^[^\W_]{4}$/;

    //até quatro dígitos, sendo 1 letra e 1 número.
    if (!userRegex.test(String(userEmail).toLowerCase())) {
      throw { success: false, message: "Invalid email or password." };
    }

    if (!passwordRegex.test(String(password))) {
      throw { success: false, message: "Invalid email or password." };
    }

    return await repo.findCreate({ userName, userEmail, password });
  }

  async login({ userName, userEmail, password }) {
    const user = await repo.login({ userName, userEmail, password });

    if (!user || user == null) throw { success: false, message: "Incorrect username." };

    const passwordMatch = compareSync(password, user.password);

    if (!passwordMatch) throw { success: false, message: "Incorrect password." };

    const token = sign(
      {
        email: userEmail,
        id: user.id,
      },
      SECRET,
      {
        expiresIn: "1d",
      }
    );

    return token;
  }

  async listUsers() {
    return repo.listUsers();
  }
}
module.exports = UserService;
