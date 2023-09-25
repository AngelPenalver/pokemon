const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Pokemons", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    live: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attack: {
      type: DataTypes.STRING,
      allowNull: false
    },
    defending: {
      type: DataTypes.STRING,
      allowNull: false
    },
    speed: {
      type: DataTypes.STRING,
      
    },
    heigth: {
      type: DataTypes.STRING,
    },
    weigth: {
      type: DataTypes.STRING,
    },
  });
};
