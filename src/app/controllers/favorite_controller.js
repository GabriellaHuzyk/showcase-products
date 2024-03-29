const express = require("express");
const Service = require("../services/favorite_service");

const service = new Service();

class FavoriteController {
  async favoriteList(req, res) {
    try {
      const result = await service.favoriteList(req.decoded);

      res.status(200).json({ success: true, result }).end();
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async favoriteAdd(req, res) {
    const { product_id } = req.params;
    try {
      const result = await service.favoriteAdd(product_id, req.decoded);

      return res.status(200).json({ success: true, message: "Favorite added." }).end();
    } catch (error) {
      console.log(error); //return res.status(404).json(error);
    }
  }

  async favoriteDelete(req, res) {
    const token = req.headers.authorization;
    const { product_id } = req.params;
    try {
      const result = await service.favoriteDelete(product_id, req.decoded);

      return res.status(200).json({ success: true, message: "Favorite deleted." }).end();
    } catch (error) {
      return res.status(404).json(error);
    }
  }
}
module.exports = FavoriteController;
