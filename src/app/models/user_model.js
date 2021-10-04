const { Sequelize } = require("sequelize");
const configSequelize = require("../../config/sequelize");

const sequelize = new Sequelize(configSequelize);

const User = sequelize.define("Users", {
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
};

module.exports = { User, sync: () => sequelize.sync({ foce: true }) };
