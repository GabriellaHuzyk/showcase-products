const Repository = require("../repositories/api_repo");

const repo = new Repository();

class ApiService {
  async apiRequest(url) {
    const response = await repo.apiFound(url);
    return response;
  }
}

module.exports = ApiService;
