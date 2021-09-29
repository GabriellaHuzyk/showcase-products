const { default: axios } = require("axios");

class ApiRepository {
  async apiRepository(url) {
    const response = await axios.get(url);

    const items = response.data.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
      };
    });
    return items;
  }
}

module.exports = ApiRepository;
