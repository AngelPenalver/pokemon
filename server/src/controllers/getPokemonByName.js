const axios = require('axios')
const {Pokemons, Type} = require('../db');
const db = require('../db');
const getPokemonByName = async (req, res) => {
  try {
    let namePokemon = req.query.name;
    let data = null;
    let dbData = null;
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${namePokemon}`
      );
      data = response.data;

      // console.log(data);
    } catch (error) {
      console.log('Pokemon no encontrado en la api')
    }

    
    try {
      dbData = await Pokemons.findAll({ where: { name: namePokemon }, include:[{model: Type, attributes: ['name'],through: { attributes: [] }}] });
      // console.log(dbData.dataValues)
    } catch (error) {
      console.log("Pokemon no encontrado en la base de datos");
    }

    if (!data && !dbData) {
     return res.status(404).json({error: 'Pokemon no encontrado'})
    }

    let result = {};

    if (data) {
      result = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        live: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        type: data.types.map(ele => {
          return ele.type.name
        })
      };
    } else if (dbData) {
      let objetoDB = dbData.map(pokemon => 
        pokemon = {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.image,
          live: pokemon.live,
          attack: pokemon.attack,
          defense: pokemon.defense,
          speed: pokemon.speed,
          height: pokemon.height,
          weight: pokemon.weight,
          type: pokemon.Types.map(type => type.name)
        })
      //  console.log(objetoDB);
        result = objetoDB;
    }
    // console.log(result);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = getPokemonByName;
