const axios = require("axios");
const { Pokemons,Type } = require("../db");
const url = "https://pokeapi.co/api/v2/pokemon/";
const getPokemonById = async (req, res) => {
  let { idPokemon } = req.params;
  try {
    const isUUID = (uuid) => {
      let regex =
        /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/;
      return regex.test(uuid);
    };

    let data = null;
    if (isUUID(idPokemon)) {
      try {
        const respondeDB = await Pokemons.findAll({ where: { id: idPokemon },include:[{model: Type, attributes: ['name'],through: { attributes: [] }}]}, );
        const [pokemon] = respondeDB; 
        if(pokemon){
          let objetoDB = {
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
          }
          return res.status(200).json(objetoDB);
          // return objetoDB
        }
        // console.log(pokemon);
        // console.log(pokemon);
      } catch (error) {
        res.status(404).json({ error: "Dato incorrecto" });
      }
    } else {
      try {
        const response = await axios.get(url + idPokemon);
        data = response.data;
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
            type: data.types.map((ele) => {
              return ele.type.name;
            }),
          };
          return res.status(200).json(objeto);
        }
      } catch (error) {
        return res
          .status(404)
          .json({ error: "El pokemon con la ID ingresada no existe" });
      }
    }
  } catch (error) {
    res.status(404).json({ error: "Dato incorrecto" });
  }
};
module.exports = getPokemonById;
