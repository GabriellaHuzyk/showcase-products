const express = require("express");
const UserService = require("../services/user_service");

const service = new UserService();

class UserController {
  async userController({ userEmail, password }) {
    try {
      const result = await service.userValidate({ userEmail, password });

      return result.dataValues;
    } catch (error) {
      console.error(error);
    }
  }
}
module.exports = UserController;
