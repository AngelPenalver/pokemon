import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { clearPokemons } from "../../redux/action";
import { useSelector } from "react-redux";


const NavBar = (props) => {
    const { input, setInput } = props;
    const pokemons = useSelector(state => state.pokemons)
    const dispath = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispath(clearPokemons())
    }, [dispath])
    

    function handleChange(event) {
        setInput(event.target.value)
        
    }
    function handleSubmit(){
        if(input === ''){
            window.alert('Debe ingresar un nombre para la busqueda del pokemon')
        }else{
            navigate(`/search/${input.toLowerCase()}`)

        }
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleChange} />
             <button onClick={() => handleSubmit()}>Buscar</button>
           
            <NavLink to='/home' pokemons={pokemons}>
                <button>Inicio</button>
            </NavLink>
            <NavLink to='/create'>
                <button>Crear Pokemón</button>
            </NavLink>
        </div>
    )
}
export default NavBar;