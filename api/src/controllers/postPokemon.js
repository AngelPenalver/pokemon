const { Pokemons } = require("../db");
const postPokemon = async (req, res) => {
  try {
    const { id, name, image, live, attack, defense, speed, height, weight } =
      req.body;
    if (
      !name ||
      !image ||
      !live ||
      !attack ||
      !defense
    ) {
        return res.status(401).json({ error: "Faltan datos" });
    }
    const [data, created] = await Pokemons.findOrCreate({
      where: { name },
      defaults: { id, name, image, live, attack, defense, speed, height, weight },
    });
    const pokemon = await Pokemons.findAll();
    if(created){
      return res.status(200).json(pokemon);
    }else{
      return res.status(400).json({error: 'El pokemon ya existe'})
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postPokemon;
