const axios = require("axios");
const { Pokemons } = require("../db");
const url = "https://pokeapi.co/api/v2/pokemon/";
const getPokemonByName = async (req, res) => {
  try {
    let namePokemon = req.query.name;
    let data = null;
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${namePokemon}`
      );
      data = response.data;
    } catch (error) {
      console.log("Pokemon no encontrado en la API");
    }

    const dbData = await Pokemons.findAll({ where: { name: namePokemon } });

    if (!data && dbData.length === 0) {
      return res.status(404).json({ error: "Pokemon no encontrado" });
    }
    // console.log(dbData);
    // console.log(data);
    let result = [];

    if (data) {
      let objeto = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        live: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
      };
      result.push(objeto);
    }

    if (dbData.length > 0) {
      result.push(...dbData);
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = getPokemonByName;
