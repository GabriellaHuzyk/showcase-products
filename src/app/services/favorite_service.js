const Repository = require("../repositories/favorite_repo");

const repo = new Repository();

class FavoriteService {
  async favoriteList(decoded) {
    return await repo.list(decoded);
  }

  async favoriteAdd(product_id, decoded) {
    return await repo.add(product_id, decoded);
  }

  async favoriteDelete(product_id, decoded) {
    return await repo.delete(product_id, decoded);
  }
}

module.exports = FavoriteService;
