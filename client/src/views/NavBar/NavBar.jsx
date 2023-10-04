import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { clearPokemons } from "../../redux/action";
import { useSelector } from "react-redux"; 
import gif from './gif.gif'
import logo from './logo.png'
import style from './NavBar.module.css'
import search from './search.png'


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
    function handleSubmit() {
        if (input === '') {
            window.alert('Debe ingresar un nombre para la busqueda del pokemon')
        } else {
            navigate(`/search/${input.toLowerCase()}`)

        }
    }

    return (
        <div className={style.div}>
            <div className={style.container}>
            <img src={logo} alt="" className={style.logo}/>
            <img src={gif} alt="" className={style.img}/>
            </div>

<div>
            <nav className={style.nav}>

            <NavLink to='/home' pokemons={pokemons}>
                <button className={style.button}>Inicio</button>
            </NavLink>
            <NavLink to='/create'>
                <button className={style.button}>Crear Pokemón</button>
            </NavLink>

            <input type="text" value={input} onChange={handleChange} placeholder='Ingrese un nombre' className={style.input}/>
            <button onClick={() => handleSubmit()} className={style.button}>Buscar <img src={search} alt="" className={style.search} /> </button>

            </nav>
</div>
        </div>
    )
}
export default NavBar;