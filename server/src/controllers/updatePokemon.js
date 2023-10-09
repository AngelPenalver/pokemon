const { Pokemons, Types } = require("../db");

const updatePokemon = async (req, res) => {
  const {id, name, image, live, attack, defense, speed, height, weight, type1, type2 } = req.body
  try {
    
    const pokemon = await Pokemons.findByPk(id)
    
    if(!name || !image ||!live ||!attack || !defense){
      return res.status(404).json({error: 'Faltan datos'})
    }
  const update = {
    name, image, live, attack, defense, speed, height, weight
  }
  const typeAdd = [type1, type2]
  console.log(typeAdd);
  console.log(update);
  
  await pokemon.update(update)
  await pokemon.setTypes(typeAdd)

  
  await pokemon.save()
  return res.status(200).json("Pokemon actualizado")
  console.log(pokemon);
} catch (error) {
  return res.status(404).json({error: error.message})
  
}
  
};

module.exports = updatePokemon