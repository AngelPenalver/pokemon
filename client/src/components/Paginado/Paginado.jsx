import { useEffect, useState } from "react";

const Pagination = (props) => {
    let {page, setPage, maximun} = props
    useEffect(()=> {
        setPage(page);
        // console.log(maximun);
    })
    const [input, setInputs] = useState(1)
    // console.log(maximun)
    const numbers = [];
    let pusheo = maximun;
    useEffect(()=>{
        setPage(1)   
    },[])

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
    const pages = (number) => {
        setPage(number)
        setInputs(number)
    }
    if(Array.isArray(numbers)){
        while (pusheo > 0) {
               numbers.push(pusheo)
               pusheo--
           }       
    }

    
    numbers.sort((a, b) => a - b)
    return (
        <div>

            <button onClick={previousPage}>Anterior</button>
            <label htmlFor="">{page}</label>
            {numbers.map((number) => {
                return <button key={number} onClick={() => pages(number)}>{number}</button>
            })}
            <button onClick={nextPage}>Siguiente</button>
        </div>
    )
}
export default Pagination
