const Repository = require("../repositories/favorite_repo");

const repo = new Repository();

class FavoriteService {
  async favoriteList(token) {
    return await repo.list(token);
  }

  async favoriteAdd(product_id, token) {
    return await repo.add(product_id, token);
  }

  async favoriteDelete(product_id, token) {
    return await repo.delete(product_id, token);
  }
}

module.exports = FavoriteService;
