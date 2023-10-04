import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { clearPokemons, getPokemonsByName } from "../../redux/action";
import style from './SearchPokemons.module.css'
import carga from './loading.gif'


const SearchPokemons = () => {

    let pokemon = useSelector(state => state.pokemon)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const { name } = useParams()
    const navigate = useNavigate()
    if (!Array.isArray(pokemon)) {
        pokemon = [pokemon]
    }
    // console.log(useParams());
    function pokemonNotFound() {
        // console.log(true);
        window.alert('Pokemon no encontrado o no existe');
        dispatch(clearPokemons())
        dispatch(getPokemonsByName(name))
        navigate('/home')
    }
    console.log(pokemon);
    useEffect(() => {
        setLoading(true)
        dispatch(clearPokemons())
        setTimeout(() => {
            dispatch(getPokemonsByName(name)).then((response) => {
            
                if (response.payload.length === 0) {
                    pokemonNotFound();
                }

                setLoading(false)
            })
        }, 1500);
    }, [name])
    const pokemones = pokemon.map((pokemon) => {
        return {
            name: pokemon.name.split('')[0].toUpperCase() + pokemon.name.split('').slice(1).join('').toLowerCase(),
            id: pokemon.id,
            image: pokemon.image,
            type: pokemon.type
        }
    })

    return (

        <div className={style.container}>
            {loading ? <img src={carga} alt="" className={style.im} /> : pokemones.length >= 1 && pokemones.map(pokemon => <NavLink to={`/detail/${pokemon.id}`} className={style.navLink}key={pokemon.id}>
                <div className={style.card}>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.image} key={pokemon.id} alt="" className={style.imgcard}/>
                    {pokemon.type && pokemon.type.map(type => {
                        return <p>{type}</p>
                    })}
                </div>
            </NavLink>)}
        </div>
    )
}
export default SearchPokemons;