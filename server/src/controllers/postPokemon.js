  const { Pokemons, Type } = require("../db");
  const postPokemon = async (req, res) => {
    try {
      const { name, image, live, attack, defense, speed, height, weight, type1, type2 } =
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
      // console.log(true)
      const [data, created] = await Pokemons.findOrCreate({
        where: { name: name }, defaults:
        { image, defense, live, attack, speed, height, weight }
      })
      // console.log(true);
      if(created){
        const getType1 = await Type.findByPk(type1)
        const getType2 = await Type.findByPk(type2)
        const addType = [getType1, getType2]
        await data.addType(addType)
        
        return res.status(200).json(data);
     

      }else{
        return res.status(409).json({error: 'El pokemon ya existe en la base de datos'})
      }

      // console.log(pokemon)
      // console.log(created);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = postPokemon;
