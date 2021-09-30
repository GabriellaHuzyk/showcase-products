const dotenv = require("dotenv");
dotenv.config();

const userModel = require("./src/app/models/user_model");
const favModel = require("./src/app/models/favorite_model");

beforeEach(async () => {
  await userModel.User.drop();
  await favModel.Favorite.drop();

  await userModel.sync();
  await favModel.sync();
});
