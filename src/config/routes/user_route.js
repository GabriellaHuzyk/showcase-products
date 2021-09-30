const express = require("express");
const router = express.Router();
const UserController = require("../../app/controllers/user_controller");

const controller = new UserController();

router.post("/create/user", async (req, res) => {
  const { user, password } = req.params;
  const result = await controller.userController({ user, password });

  res.json(result);
});

module.exports = router;
