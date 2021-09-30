const { Sequelize } = require("sequelize");
const configSequelize = require("../../config/sequelize");

const sequelize = new Sequelize(configSequelize);

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
    foreignKey: "user_id",
    as: "Favorites",
  });
};

module.exports = { User, sync: () => sequelize.sync() };
