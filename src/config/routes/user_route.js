const express = require("express");
const router = express.Router();
const UserController = require("../../app/controllers/user_controller");

const controller = new UserController();

router.post("/create/user", async (req, res) => {
  const { userEmail, password } = req.body;
  console.log("ROUTE:", userEmail);
  const result = await controller.userController({ userEmail, password });
  res.json(result);
});

module.exports = router;
