const express = require("express");
const router = express.Router();

const authValidate = require("../../app/middleware/auth_validate");
const Controller = require("../../app/controllers/favorite_controller");

const controller = new Controller();

router.get("/favorites", authValidate, controller.favoriteList);
router.post("/favorite/add/:product_id", authValidate, controller.favoriteAdd);
router.post("/favorite/delete/:product_id", authValidate, controller.favoriteDelete);

module.exports = router;
