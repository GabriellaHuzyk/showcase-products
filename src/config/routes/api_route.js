const express = require("express");
const router = express.Router();
const ApiController = require("../../app/controllers/api_controller");

const apiController = new ApiController();

router.get("/products", async (req, res) => {
  const result = await apiController.apiRequest(req, res);

  return res.json(result);
});
module.exports = router;
