import { NavLink } from "react-router-dom";
import style from './LandingPage.module.css'
import { useEffect, useState } from "react";

const LandingPage = () => {

    return (
        <div className={style.body}>

            <div className={style.div}>


                <h4 className={style.text}>¿Estás listo para la diversión?</h4>
                <NavLink to='/home'>
                    <button className={style.button}>Comenzar</button>
                </NavLink>


            </div>



        </div>
    )
}

export default LandingPage;
