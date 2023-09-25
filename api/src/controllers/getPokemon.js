const axios = require("axios");
const url = "https://pokeapi.co/api/v2/pokemon";

const getPokemons = async (req, res) => {
  const getDetails = async (element) => {
    const detailResponse = await axios.get(element.url);
    return detailResponse.data;
  };
  try {
    const response = await axios.get(url);
    const response2 = response.data.results.map((element) => {
     
      return getDetails(element);
    });
    const pokemons = await Promise.all(response2);


    const data = pokemons.map((pokemon) => {
      let objeto = {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
      };
      return objeto;
    });
    console.log(data)
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getPokemons
