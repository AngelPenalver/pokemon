const { Pokemons, Type } = require('../db')

const deletePokemons = async(req, res) => {
    try {
        const {idPokemon} = req.params;
    
        const findPokemon = await Pokemons.findByPk(idPokemon)
       await findPokemon.setTypes([])
        await Pokemons.destroy({where: {id: idPokemon}})
        return res.status(200).json('Pokemon eliminado con exito')
        
    } catch (error) {
        return res.status(400).json({error: error.message})
        
    }
    
}
module.exports = deletePokemons