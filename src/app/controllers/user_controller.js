const express = require("express");
const UserService = require("../services/user_service");

const service = new UserService();

class UserController {
  async register(req, res) {
    const { userName, userEmail, password } = req.body;
    try {
      const result = await service.validate({ userName, userEmail, password });

      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(404).json(error);
    }
  }

  async login(req, res) {
    const { userEmail, password } = req.body;
    try {
      const result = await service.login({ userEmail, password });

      return res.status(200).json({ auth: true, result });
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async listUsers(req, res) {
    try {
      const result = await service.listUsers();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).json(error);
    }
  }
}
module.exports = UserController;
