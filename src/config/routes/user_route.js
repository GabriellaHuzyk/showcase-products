const express = require("express");
const router = express.Router();
const UserController = require("../../app/controllers/user_controller");
const authenticate = require("../../app/middleware/authenticate_user");

const controller = new UserController();

router.post("/register", async (req, res) => {
  const { userEmail, password } = req.body;
  const result = await controller.register({ userEmail, password });
  res.json(result);
});

router.post("/login", async (req, res, next) => {
  const { userEmail, password } = req.body;
  authenticate({ userEmail, password }, next);
  const result = await controller.login({ userEmail, password });
  return res.redirect("/favorites");
});

router.get("/logout", function (req, res) {
  req.logout();
  req.flash("success_msg", "Logout success.");
  res.redirect("/");
});

router.get("/users", async (req, res) => {
  const list = await controller.listUsers();
  console.log(list);
  res.json(list);
});

module.exports = router;
