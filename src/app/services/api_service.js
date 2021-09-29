const Repository = require("../repositories/api_repo");

const repo = new Repository();

class ApiService {
  async apiService(url) {
    const response = await repo.apiRepository(url);
    return response;
  }
}

module.exports = ApiService;
