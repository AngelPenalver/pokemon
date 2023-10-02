import { NavLink } from "react-router-dom";
import style from './LandingPage.module.css'

const LandingPage = () => {
    return (
        <div className={style.div}>
            <div className={style.button}>
                <NavLink to='/home'>
                    <button>Iniciar</button>
                </NavLink>
            </div>
        </div>
    )
}

export default LandingPage;
