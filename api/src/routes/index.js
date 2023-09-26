const { Router } = require("express");
const getPokemons = require("../controllers/getPokemon");
const getPokemonById = require("../controllers/getPokemonById");
const postPokemon = require("../controllers/postPokemon");
const getPokemonByName = require("../controllers/getPokemonByName");
const getTypes = require("../controllers/getTypes");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.get("/pokemons/", (req, res) => {
  if (req.query.name) {
    getPokemonByName(req, res);
  } else {
    getPokemons(req, res);
  }
});
router.get("/types", getTypes);
router.get("/pokemons/:idPokemon", getPokemonById);
router.post("/pokemons", postPokemon);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
