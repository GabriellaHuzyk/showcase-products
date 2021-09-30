const { Sequelize } = require("sequelize");
const configSequelize = require("../../config/sequelize");

const sequelize = new Sequelize(configSequelize);

const Favorite = sequelize.define("Favorite", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

Favorite.associate = (models) => {
  Favorite.belongsTo(models.User, {
    foreignKey: "user_id",
    as: "Users",
  });
};

module.exports = { Favorite, sync: () => sequelize.sync() };
