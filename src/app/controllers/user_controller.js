const express = require("express");
const UserService = require("../services/user_service");
const bcrypt = require("bcryptjs");

const service = new UserService();

class UserController {
  async register({ userEmail, password }) {
    try {
      const result = await service.validate({ userEmail, password });

      return result.dataValues;
    } catch (error) {
      console.error(error);
    }
  }

  async login({ userEmail, password }) {
    try {
      const result = await service.login({ userEmail, password });
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async listUsers() {
    try {
      const result = await service.listUsers();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = UserController;
