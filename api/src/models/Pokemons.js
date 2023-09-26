const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Pokemons", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
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
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    speed: {
      type: DataTypes.INTEGER,
      
    },
    heigth: {
      type: DataTypes.STRING,
    },
    weigth: {
      type: DataTypes.STRING,
    },
  },{ timestamps: false });
};
