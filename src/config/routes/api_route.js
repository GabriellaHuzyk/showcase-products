const express = require("express");
const router = express.Router();
const ApiController = require("../../app/controllers/api_controller");

const apiController = new ApiController();

router.get("/products", async (req, res) => {
  apiController.apiController(req, res);
});
module.exports = router;
