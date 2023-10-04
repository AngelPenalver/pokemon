const axios = require("axios");
const { Pokemons, Type } = require('../db')
const url = "https://pokeapi.co/api/v2/pokemon/?limit=300";


const getPokemons = async (req, res) => {
  const getDetails = async (element) => {
    const detailResponse = await axios.get(element.url);
    return detailResponse.data;
  };
  try {
    const response = await axios.get(url);
    const response2 = response.data.results.map((element) => {
      // console.log(objeto);
      return getDetails(element);
    });
    console.log(response2.length);
    const pokemons = await Promise.all(response2);

    const data = pokemons.map((pokemon) => {
      let objeto = {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        live: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
        type: pokemon.types.map(ele => {
          return ele.type.name
        })
      };
      return objeto;
    });
    console.log(data);
    const findDB = await Pokemons.findAll({include:[{model: Type, attributes: ['name'],through: { attributes: [] }}]});
    // console.log(findDB);
    const pokemonsDB = findDB.map(pokemon => {
      const { id, name, image, live, attack, defense, speed, height, weight, type = pokemon.Types.map(type => type.name) } = pokemon;
      return { id, name, image, live, attack, defense, speed, height, weight, type};
    });
    // console.log(pokemonsDB)
    // console.log(data);
    pokemonsDB.map(pokemon => {
      data.push(pokemon)
    })
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getPokemons;
