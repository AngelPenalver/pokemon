import { useEffect, useState } from "react";
import Pokemons from "../../components/Pokemons/pokemons.jsx";
import Pagination from "../../components/Paginado/Paginado.jsx";
import { clearPokemons } from "../../redux/action/index.js";
import { useDispatch } from "react-redux";
import Option from "../../components/Options/Options.jsx"
import style from './HomePage.module.css'

function Home(props) {
    const { pokemons, setInput } = props;
    // const pokemons = useSelector(state => state.pokemons)
    const dispath = useDispatch()
    // console.log(pokemons);
    const [reset, setReset] = useState('All')

    useEffect(() => {
        setReset('All')
    }, [])

    const [page, setPage] = useState(1);
    const forPage = 12;
    const maximun = Math.ceil(pokemons.length / forPage)
    useEffect(() => {
        dispath(clearPokemons())
        setInput('')
    }, [dispath, setInput])
    return (
        <div className={style.div}>
            <div className={style.option} >
            <Option setPage={setPage} reset={reset} setReset={setReset} />
            </div>
            <Pagination pokemons={pokemons} page={page} setPage={setPage} maximun={maximun} />
            <Pokemons pokemons={pokemons} page={page} forPage={forPage} className={style.div} />
            <Pagination pokemons={pokemons} page={page} setPage={setPage} maximun={maximun} />
        </div>
    )
}
export default Home;