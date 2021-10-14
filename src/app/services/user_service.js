const UserRepo = require("../repositories/user_repo");
const { compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const repo = new UserRepo();

class UserService {
  async validate({ userEmail, password }) {
    const userRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^[^\W_]{4}$/;

    //quatro dígitos pelo menos, sendo 1 letra e 1 número.
    if (!userRegex.test(String(userEmail).toLowerCase())) {
      console.log("Invalid email or password.");
    }

    if (!passwordRegex.test(String(password))) {
      console.log("Invalid email or password.");
    }

    return await repo.findCreate({ userEmail, password });
  }

  async login({ userEmail, password }) {
    const user = await repo.login({ userEmail });

    if (!user) throw new Error("Incorrect username or password.");

    const passwordMatch = compareSync(password, user.password);

    if (!passwordMatch) throw new Error("Incorrect username or password.");

    const token = sign(
      {
        userEmail: user.userEmail,
      },
      "bb946b77d56bb2872677065b2440c58f",
      {
        subject: user.id,
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
