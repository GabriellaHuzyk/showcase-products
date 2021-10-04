const express = require("express");
const Service = require("../services/api_service");

const service = new Service();

class ApiController {
  async apiRequest() {
    const url = "https://fakestoreapi.com/products";

    try {
      const result = await service.apiRequest(url);

      return result;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = ApiController;
