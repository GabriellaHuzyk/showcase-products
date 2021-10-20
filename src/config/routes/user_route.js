const express = require("express");
const router = express.Router();
const UserController = require("../../app/controllers/user_controller");

const controller = new UserController();

router.post("/register", async (req, res) => {
  await controller.register(req, res);
});

router.post("/login", async (req, res) => {
  await controller.login(req, res);
});

router.get("/users", async (req, res) => {
  await controller.listUsers(req, res);
});

module.exports = router;
