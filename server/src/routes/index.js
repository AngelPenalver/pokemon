const { Router } = require("express");
const getPokemons = require("../controllers/getPokemon");
const getPokemonById = require("../controllers/getPokemonById");
const postPokemon = require("../controllers/postPokemon");
const getPokemonByName = require("../controllers/getPokemonByName");
const getTypes = require("../controllers/getTypes");
const deletePokemons = require("../controllers/deletePokemon");

// Importar todos los routers;x`
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.get("/types", getTypes);
router.post("/pokemons", postPokemon);
router.delete("/pokemons/:idPokemon", deletePokemons )

router.get("/pokemons/", (req, res) => {
  if (req.query.name) {
    getPokemonByName(req, res);
  } else {
    getPokemons(req, res);
  }
});

router.get("/pokemons/:idPokemon", getPokemonById);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
