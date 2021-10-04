"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const favorite = await queryInterface.createTable("Favorites", {
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
    return favorite;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Favorites");
  },
};
