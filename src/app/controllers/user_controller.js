const express = require("express");
const UserService = require("../services/user_service");

const service = new UserService();

class UserController {
  async userController({ user, password }) {
    try {
      const result = await service.userValidate({ user }, { password });
      return result.map((user) => user.dataValues);
    } catch (error) {
      console.error(error);
    }
  }
}
module.exports = UserController;
