const express = require("express");
const Service = require("../services/api_service");

const service = new Service();

class ApiController {
  async apiRequest(req, res) {
    const url = "https://fakestoreapi.com/products";

    try {
      const result = await service.apiRequest(url);

      return res.json(result);
    } catch (error) {
      return error;
    }
  }
}

module.exports = ApiController;
