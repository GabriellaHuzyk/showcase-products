const { default: axios } = require("axios");

class ApiRepository {
  async apiFound(url) {
    const result = await axios.get(url);

    const items = result.data.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
      };
    });
    return items;
  }

  async transformerArray(url) {
    const result = await axios.get(url);

    const array = result.data.map((product) => {
      return [product.id, product.title, product.price];
    });
  }
}

module.exports = ApiRepository;
