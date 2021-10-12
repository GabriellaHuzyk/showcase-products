const Repository = require("../repositories/favorite_repo");
const ApiRepo = require("../repositories/api_repo");

const repo = new Repository();
const api = new ApiRepo();

class FavoriteService {
  async userValidate() {
    return await repo.favoriteList();
  }

  async favoriteAdd(product_id) {
    const result = await repo.addFavorite(product_id);

    return result;
  }
}

module.exports = FavoriteService;
