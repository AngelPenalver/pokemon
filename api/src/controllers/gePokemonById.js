const axios = require("axios");
const url = "https://pokeapi.co/api/v2/pokemon/"
const getPokemonById = async(req, res) => {
    try {
        
        let { idPokemon } = req.params;
        idPokemon = Number(idPokemon)
        // if(idPokemon !== typeof 'Number') return res.status(400).json({error: "El id debe de ser un numero"})
        const {data} = await axios.get(url + idPokemon)
        if(data) {

            let objeto = {
              id: data.id,
              name: data.name,
              image: data.sprites.front_default,
              hp: data.stats[0].base_stat,
              attack: data.stats[1].base_stat,
              defense: data.stats[2].base_stat,
              speed: data.stats[5].base_stat,
              height: data.height,
              weight: data.weight,
            };
            console.log(objeto);
            res.status(200).json(objeto);
            return
        }
    } catch (error) {
        return res.status(500).json({error: error.message})
        
    }

};
module.exports = getPokemonById;
