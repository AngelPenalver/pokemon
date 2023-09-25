const { Router } = require('express');
const getPokemons  = require('../controllers/getPokemon');
const getPokemonById = require('../controllers/gePokemonById');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/pokemon', getPokemons)
router.get('/pokemon/:idPokemon', getPokemonById)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
    