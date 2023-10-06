require("dotenv").config();
const { Sequelize } = require("sequelize");
const PokemonsModel = require("./models/Pokemons");
const TypeModel = require("./models/Type");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

// const sequelize = new Sequelize(
//   // URL
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemons`,
//   { logging: false, native: false }
// );

const sequelize = new Sequelize(DB_DEPLOY,
  { logging: false, native: false }
);

PokemonsModel(sequelize);
TypeModel(sequelize);

const { Pokemons, Type } = sequelize.models;

Pokemons.belongsToMany(Type, { through: "pokemons_type" });
Type.belongsToMany(Pokemons, { through: "pokemons_type" });

module.exports = {
   Pokemons,
   Type,
   conn: sequelize
}
