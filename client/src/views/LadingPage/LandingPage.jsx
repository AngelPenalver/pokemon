import { NavLink } from "react-router-dom";
import style from './LandingPage.module.css'
import { useEffect, useState } from "react";

const LandingPage = ({setAccess}) => {
    // console.log(setAccess());
    const [aux, setAux] = useState(false)
    useEffect(()=>{
setAccess(false);
setTimeout(() => {
    setAux(true)

}, 3000);
    },[])
    return (
        <div className={style.body}>
            
            <div className={style.div}>
                
                {
                    !aux ? <h3>¿Estás listo para la diversión?</h3> : <NavLink to='/home'>
                    <button className={style.button} onClick={() => setAccess(true)}>Comenzar</button>
                </NavLink>
                }
                
            </div>

            
               
        </div>
    )
}

export default LandingPage;
