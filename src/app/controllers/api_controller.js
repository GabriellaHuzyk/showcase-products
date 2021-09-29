const express = require("express");
const Service = require("../services/api_service");

const service = new Service();

class ApiController {
  async apiController() {
    console.log("entrou no controller");
    const url = "https://fakestoreapi.com/products";

    try {
      const response = await service.apiService(url);

      return response.json();
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = ApiController;
