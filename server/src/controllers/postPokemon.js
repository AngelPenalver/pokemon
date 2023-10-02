const { Pokemons, Type } = require("../db");
const postPokemon = async (req, res) => {
  try {
    const { id, name, image, live, attack, defense, speed, height, weight, type1, type2 } =
      req.body;

    if (
      !name ||
      !image ||
      !live ||
      !attack ||
      !defense ||
      !type1 ||
      !type2
    ) {
      return res.status(401).json({ error: "Faltan datos" });
    }

    const data = await Pokemons.create({
      id,
      name,
      image,
      live,
      attack,
      defense,
      speed,
      height,
      weight
    });

    const getType1 = await Type.findByPk(type1)
    const getType2 = await Type.findByPk(type2)
    const addType = [getType1, getType2]
    await data.addType(addType)

    const pokemon = await Pokemons.findAll();
    return res.status(200).json(pokemon);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postPokemon;
