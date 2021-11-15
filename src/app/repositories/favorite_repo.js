const Favorite = require("../models").Favorite;
const { default: axios } = require("axios");

class FavoriteRepo {
  async list(decoded) {
    const result = await Favorite.findAndCountAll({ where: { user_id: decoded } });

    if (!result) throw { success: false, message: "Favorites list is empty" };

    const product = result.rows.map((result) => {
      return {
        id: result.dataValues.id,
        product_id: result.dataValues.product_id,
        title: result.dataValues.title,
        price: result.dataValues.price,
      };
    });

    const amount = product.reduce(getTotal, 0);
    function getTotal(total, item) {
      return total + item.price;
    }

    return {
      products: product,
      amount: amount,
    };
  }

  async add(product_id, decoded) {
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
    console.log("REPO DECOD.", decoded);
    const foundData = await Favorite.findOne({ where: { product_id: product_id, user_id: decoded } });

    if (foundData) throw { success: false, message: "This favorite already exists." };

    return await Favorite.create({
      id: Favorite.id,
      product_id: product.id,
      title: product.title,
      price: product.price,
      user_id: decoded,
    });
  }

  async delete(product_id, decoded) {
    const foundId = await Favorite.findOne({ where: { user_id: decoded } });

    if (foundId.INDEX < 0) {
      throw { success: false, message: "Favorites list is empty" };
    }

    const result = await Favorite.destroy({ where: { product_id: product_id, user_id: decoded } });

    if (!result) throw { success: false, message: "Favorite not found." };

    return result;
  }
}

module.exports = FavoriteRepo;
