import { useEffect } from "react";
import { deletePokemons, getPokemons, getPokemonsById } from "../../redux/action";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import style from './DetailPokemon.module.css'

const Detail = () => {
    const isUUID = (uuid) => {
        let regex =
            /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/;
        return regex.test(uuid);
    };
    const navigate = useNavigate()
    const pokemon = useSelector(state => state.pokemon)
    const { id } = useParams()
    const dispath = useDispatch()
    function deleteHandler(id) {
        let resultadoConfirm = prompt("¿Estás seguro de que quieres continuar?, si es asi solo debe colocar 'Si'");
        if (resultadoConfirm === 'si' || resultadoConfirm === 'Si') {
            dispath(getPokemons())
            dispath(deletePokemons(id))
            setTimeout(() => {
                window.alert('Pokemon eliminado con exito!')

                navigate('/home')
            }, 500);

        }
        return;

    }
    useEffect(() => {
        dispath(getPokemonsById(id))
    }, [dispath])
    // console.log(getPokemonsById(id));
    let firtLetter = pokemon.name ? pokemon.name.split('')[0].toUpperCase() : '';
    let restName = pokemon.name ? pokemon.name.split('').slice(1).join('').toLowerCase() : ''
    // console.log(restName);
    return (
        <div className={style.container}>

            <div className={style.img}>
            {isUUID(pokemon.id) && <NavLink to={`/update/${pokemon.id}`} pokemon={pokemon} ><button className={style.button}>Actualizar datos</button></NavLink>}
            {isUUID(pokemon.id) && <button onClick={() => deleteHandler(pokemon.id)} className={style.button}>Borrar pokemon</button>}
                <img src={pokemon.image} alt="" key={pokemon.id} className={style.image} />
            </div>
            <div className={style.detail}>
                <h1>{firtLetter + restName}</h1>

                <div className={style.center}>

                <div className={style.order}>
                    <h3 className={style.name}>Vida</h3>
                    <p className={style.name}>{pokemon.live}</p>
                </div>

                <div className={style.order}>
                    <h3 className={style.name}>Ataque</h3>
                    <p className={style.name}>{pokemon.attack}</p>
                </div>
                </div>

                <div className={style.center}>
                <div className={style.order}>
                    <h3 className={style.name}>Defensa</h3>
                    <p className={style.name}>{pokemon.defense}</p>
                </div>
                <div className={style.order}>
                    <h3 className={style.name}>Velocidad</h3>
                    <p  className={style.name}>{pokemon.speed}</p>
                </div>

                </div>

                <div className={style.center}>

                <div className={style.order}>
                    {pokemon.height && <h3 className={style.name}>Altura</h3>}
                    {pokemon.height && <p className={style.name}>{pokemon.height}</p>}
                </div>
                <div className={style.order}>
                    {pokemon.weight && <h3 className={style.name}>Peso</h3>}
                    {pokemon.weight && <p className={style.name}>{pokemon.weight}</p>}

                </div>
                </div>

                <div className={style.center}>

                <div className={style.order}>

                    {pokemon.type && <h3 className={style.name}>Tipos</h3>}
                    {pokemon.type && pokemon.type.map(type => {
                        return <p className={style.name} key={type}>{type}</p>
                    })}
                </div>
                </div>

            </div>

        </div>
    )

}
export default Detail;