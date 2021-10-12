const { Favorite } = require("../models/favorite_model");
const { User } = require("../models/user_model");
const { compareSync } = require("bcryptjs");

async function authenticate({ userEmail, password }, next) {
  const user = await User.findOne({
    where: { userEmail: userEmail },
  });

  if (!user) throw new Error("Incorrect username or password.");

  const passwordMatch = compareSync(password, user.password);

  if (!passwordMatch) throw new Error("Incorrect username or password.");

  return next();
}

module.exports = authenticate;
