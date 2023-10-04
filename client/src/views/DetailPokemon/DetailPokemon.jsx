import { useEffect } from "react";
import { deletePokemons, getPokemons, getPokemonsById } from "../../redux/action";
import { useParams,  useNavigate } from "react-router-dom";
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
    const {id} = useParams()
    const dispath = useDispatch()
    function deleteHandler(id){
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
    useEffect(()=>{        
       dispath(getPokemonsById(id))        
    },[dispath])
// console.log(getPokemonsById(id));
let firtLetter = pokemon.name ? pokemon.name.split('')[0].toUpperCase() : '';
let restName = pokemon.name ?  pokemon.name.split('').slice(1).join('').toLowerCase() : ''
// console.log(restName);
    return(
        <div>
            {isUUID(pokemon.id) && <button onClick={() => deleteHandler(pokemon.id)}>Borrar pokemon</button>}
                <div className={style.container}>

            </div>
            <div className={style.div}>
           <img src={pokemon.image} alt="" key={pokemon.id}/>
           <div className={style.detail}>
           <h1>{firtLetter + restName}</h1>
          <h3>Vida</h3>
           <p>{pokemon.live}</p>
           <h3>Ataque</h3>
           <p>{pokemon.attack}</p>
           <h3>Defensa</h3>
           <p>{pokemon.defense}</p>
           <h3>Velocidad</h3>
           <p>{pokemon.speed}</p>
           {pokemon.height && <h3>Altura</h3>}
           {pokemon.height && <p>{pokemon.height}</p>}
           {pokemon.weight && <h3>Peso</h3>}
           {pokemon.weight && <p>{pokemon.weight}</p>}
           {pokemon.type && <h3>Tipos</h3>}
           {pokemon.type && pokemon.type.map(type => {
            return <p key={type}>{type}</p>
           })}
           </div>
            </div>

        </div>
    )

}
export default Detail;