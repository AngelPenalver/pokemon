import { useEffect } from 'react';
import error from './error.png'
import { NavLink } from 'react-router-dom';
import style from './Error.module.css'
const Error = ({setIsError}) => {
    useEffect(() => {
        setIsError(true);
        return () => setIsError(false);
      }, []);
    return(
        <div className={style.container}>
            <div className={style.div}>
            <NavLink to={'/home'}><button className={style.button}>Volver al inicio</button></NavLink>
            <img src={error} alt="" className={style.img}/>
            <h4 className={style.text}>Error 404 pagina no encontrada</h4>
            </div>
        </div>
    )

}
export default Error;