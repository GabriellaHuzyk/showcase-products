const express = require("express");
const UserService = require("../services/user_service");

const service = new UserService();

class UserController {
  async userController(req, res) {
    const { user, password } = req.params;

    try {
      const users = await service.userValidate({ user }, { password });
      return users.json();
    } catch (error) {
      console.error(error);
    }
  }
}
module.exports = UserController;
