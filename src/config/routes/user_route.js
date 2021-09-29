const express = require("express");
const router = express.Router();
const UserController = require("../../app/controllers/user_controller");

const controller = new UserController();

router.post("/create/user", (req, res) => {
  controller.userController(req, res);
});

module.exports = router;
