const express = require("express");
const router = express.Router();

const Controller = require("../../app/controllers/favorite_controller");

const controller = new Controller();

router.get("/favorites", async (req, res) => {
  await controller.favoriteList(req, res);
});

router.post("/favorite/add/:product_id", async (req, res) => {
  await controller.favoriteAdd(req, res);
});

router.post("/favorite/delete/:product_id", async (req, res) => {
  await controller.favoriteDelete(req, res);
});
module.exports = router;
