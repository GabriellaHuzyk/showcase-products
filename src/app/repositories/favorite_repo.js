const Favorite = require("../models").Favorite;
const { default: axios } = require("axios");

const jwt = require("jsonwebtoken");
const SECRET = "showcasegabriella";

class FavoriteRepo {
  async list(token) {
    const decoded = await jwt.verify(token, SECRET);
    var userId = decoded.id;

    const found = await Favorite.findOne({ where: { user_id: userId } });

    if (!found) {
      throw { success: false, message: "Favorites list is empty" };
    }

    const result = await Favorite.findAndCountAll({ where: { user_id: userId } });

    const product = result.rows.map((result) => {
      return { id: result.dataValues.id, title: result.dataValues.title, price: result.dataValues.price };
    });
    return product;
  }

  async add(product_id, token) {
    const decoded = await jwt.verify(token, SECRET);

    if (decoded == false) throw { success: false, message: "Invalid token." };

    var userId = decoded.id;

    const url = "https://fakestoreapi.com/products";
    const result = await axios.get(url);

    const product = await result.data.find((product) => {
      return product.id == product_id;
    });

    if (typeof product === "undefined") {
      throw {
        success: false,
        message: "This product id not exists",
      };
    }
    const foundProductId = await Favorite.findOne({ where: { id: product_id, user_id: userId } });
    console.log(foundProductId);

    if (foundProductId) throw { success: false, message: "This favorite already exists." };

    return await Favorite.create({ id: product.id, title: product.title, price: product.price, user_id: userId });
  }

  async delete(product_id, token) {
    const decoded = await jwt.verify(token, SECRET);

    if (decoded == false) throw { success: false, message: "Invalid token." };

    var userId = decoded.id;

    const foundId = await Favorite.findOne({ where: { user_id: userId } });

    if (foundId.INDEX < 0) {
      throw { success: false, message: "Favorites list is empty" };
    }

    const result = await Favorite.destroy({ where: { id: product_id, user_id: userId } });

    if (!result) throw { success: false, message: "Favorite not found." };

    return result;
  }
}

module.exports = FavoriteRepo;
