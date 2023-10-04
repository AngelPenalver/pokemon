import { useEffect, useState } from "react";
import next from './icons/next.png'
import previous from './icons/previous.png'
import style from './Pagination.module.css'
import nextAll from './icons/nextAll.png'
import previousAll from './icons/previousAll.png'

const Pagination = (props) => {
    let { page, setPage, maximun } = props
    useEffect(() => {
        setPage(page);
        // console.log(maximun);
    })
    const [input, setInputs] = useState(1)
    // console.log(maximun)
    const numbers = [];
    let pusheo = maximun;
    useEffect(() => {
        setPage(1)
    }, [])

    useEffect(() => {
        if (input < 1) {
            setInputs(1);
            setPage(1);
        }
        if (maximun <= 0) {
            maximun = 1
        }
        if (input > maximun) {
            setInputs(maximun);
            setPage(maximun)
        }
    }, [input, setPage]);
    const nextAllPage = () => {
        setInputs(maximun);
        setPage(maximun)
    }
    const previousAllPage = () => {
        setInputs(1)
        setPage(1)
    }

    const previousPage = () => {
        if (input > 1) {
            setInputs(input - 1)
            setPage(page - 1)
        }
    }
    const nextPage = () => {
        if (input < maximun) {
            setInputs(input + 1)
            setPage(page + 1)
        }
    }
    
    if (Array.isArray(numbers)) {
        while (pusheo > 0) {
            numbers.push(pusheo)
            pusheo--
        }
    }


    numbers.sort((a, b) => a - b)
    return (
        <div className={style.div}>

            <button onClick={previousAllPage} className={style.button}><img src={previousAll} alt="" className={style.img} /></button>
            <button onClick={previousPage} className={style.button}><img src={previous} alt="" className={style.img} /></button>
            <label htmlFor="" className={style.label}>{page} de {maximun}</label>
            {/* {numbers.map((number) => {
                return <button key={number} onClick={() => pages(number)}>{number}</button>
            })} */}
            <button onClick={nextPage} className={style.button}><img src={next} alt="" className={style.img} /></button>
            <button onClick={nextAllPage} className={style.button}><img src={nextAll} alt="" className={style.img} /></button>
        </div>
    )
}
export default Pagination
