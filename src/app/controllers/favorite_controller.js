const express = require("express");
const Service = require("../services/favorite_service");

const service = new Service();

class FavoriteController {
  async favoriteList({ userEmail, password }) {
    try {
      const result = await service.userValidate({ userEmail, password });
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }

  async favoriteAdd(product_id) {
    try {
      const result = await service.favoriteAdd(product_id);

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = FavoriteController;
