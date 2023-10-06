import { NavLink } from "react-router-dom";
import style from './pokemons.module.css'



export default function Pokemons(props) {



    const { pokemons, page, forPage } = props

    const pokemones = Array.isArray(pokemons) && pokemons.map((pokemon) => {
        return {
            name: pokemon.name.split('')[0].toUpperCase() + pokemon.name.split('').slice(1).join('').toLowerCase(),
            id: pokemon.id,
            image: pokemon.image,
            type: pokemon.type
        }
    })

    return (
        <div className={style.container}>
            {Array.isArray(pokemones) && pokemones.slice((page - 1) * forPage, (page - 1) * forPage + forPage).map(pokemon =>
                    <div className={style.div} key={pokemon.id} >
                        <NavLink to={`/detail/${pokemon.id}`} key={pokemon.id} className={style.nav}>
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.image} className={style.img} key={pokemon.id} alt="" />
                        {pokemon.type && pokemon.type.map((type, index) => {
                            return <p key={index}>{type}</p>
                        })}
                </NavLink>
                    </div>
            )}
        </div>
    )
}