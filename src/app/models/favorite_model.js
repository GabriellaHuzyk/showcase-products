const { Sequelize } = require("sequelize");
const config = require("../../config/database.json");
//const configSequelize = require("../../config/sequelize");

const sequelize = new Sequelize(config);

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
    onUpdate: "CASCADE",
    onDelite: "CASCADE",
  });
};

module.exports = { Favorite, sync: () => sequelize.sync() };
