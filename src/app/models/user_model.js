const { Sequelize } = require("sequelize");
const config = require("../../config/database.json");
//const configSequelize = require("../../config/sequelize");

const sequelize = new Sequelize(config);

const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  userEmail: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.associate = (models) => {
  User.hasOne(models.Favorite, {
    foreignKey: "id_user",
    as: "Favorites",
    onUpdate: "CASCADE",
    onDelite: "CASCADE",
  });
  return User;
};

module.exports = { User, sync: () => sequelize.sync() };
