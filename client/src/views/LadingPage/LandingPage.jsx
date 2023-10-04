import { NavLink } from "react-router-dom";
import style from './LandingPage.module.css'

const LandingPage = ({setAccess}) => {
    // console.log(setAccess());
    return (
        <div className={style.body}>
            <div className={style.div}>
                <h3>¿Estás listo para la diversión?</h3>
                <NavLink to='/home'>
                    <button className={style.button} onClick={() => setAccess(true)}>Comenzar</button>
                </NavLink>
            </div>
        </div>
    )
}

export default LandingPage;
