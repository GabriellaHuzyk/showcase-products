const sequelize = require("sequelize");
const { Favorite } = require("../models/favorite_model");
const { default: axios } = require("axios");

class FavoriteRepo {
  async favoriteList() {
    const result = await Favorite.findAll();

    return result;
  }

  async addFavorite(product_id) {
    const url = "https://fakestoreapi.com/products";
    const result = await axios.get(url);

    const product = result.data.find((product) => {
      return product.id == product_id;
    });

    if (!product) throw new Error("Error.");

    return await Favorite.create({ id: product.id, name: product.title, price: product.price });
  }
}

module.exports = FavoriteRepo;
