"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user = await queryInterface.createTable("Users", {
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
        onUpdate: "CASCADE",
        onDelite: "CASCADE",
      });
    };
    return user;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("User");
  },
};
