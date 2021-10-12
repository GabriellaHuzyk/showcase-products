const express = require("express");
const router = express.Router();
const Controller = require("../../app/controllers/favorite_controller");
const authenticate = require("../../app/middleware/authenticate_user");

const controller = new Controller();

router.post("/favorites", async (req, res, next) => {
  const { userEmail, password } = req.body;
  authenticate({ userEmail, password }, next);
  const result = await controller.favoriteList({ userEmail, password });
  return res.json(result);
});

router.post("/favorite/:product_id", async (req, res, next) => {
  const { product_id } = req.params;
  const { userEmail, password } = req.body;
  authenticate({ userEmail, password }, next);
  const result = await controller.favoriteAdd(product_id);
  console.log(result);
  return res.json("success");
});

module.exports = router;
