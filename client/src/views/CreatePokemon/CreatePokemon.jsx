import { useEffect, useState } from 'react';
import style from './CreatePokemon.module.css'
import { useDispatch } from 'react-redux';
import { createPokemons, getPokemons } from '../../redux/action';
import { useSelector } from 'react-redux';
import swal from 'sweetalert'
import validation from '../../components/validation/validation';

const CreatePokemon = () => {
    const dispatch = useDispatch()
    const types = useSelector(state => state.types)
    const valuesInputs = {
        name: '',
        image: '',
        attack: '0',
        defense: '0',
        live: '0',
        speed: '0',
        weight: '0',
        height: '0',
        type1: 'Null',
        type2: 'Null'
    }
    // console.log(types);
    const [errores, setErrores] = useState({})
    const [input, setInput] = useState(valuesInputs)
    // console.log(errores);

    function handleSubmit(event, input) {
        if (Object.keys(errores).length === 0) {
            window.alert('Pokemon creado con exito')
            event.preventDefault()
            let lowerCaseName = input.name.toLowerCase();
            dispatch(createPokemons({ ...input, name: lowerCaseName }));
            dispatch(getPokemons())
            setInput(valuesInputs)


        } else {
            event.preventDefault()
            window.alert('Revise bien el formulario e intente de nuevo')
        }
    }

    function handleChange(event) {
        setErrores(validation({
            ...input,
            [event.target.name]: event.target.value
        }))
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })

    }
    // console.log(type);
    console.log(errores);

    return (
        <div className={style.container}>
            <form action="" className={style.div}>
                <div className={style.form}>
                    <label htmlFor="" className={style.label}>Nombre</label>
                    {errores.name && <span className={style.p}>{errores.name}</span>}
                    <input type="text" name="name" id="" value={input.name} onChange={handleChange} />
                </div>


                <div className={style.form}>
                    <label htmlFor="" className={style.label}>Imagen</label>
                    {errores.image && <span className={style.p}>{errores.image}</span>}
                    <input type="text" name='image' value={input.image} onChange={handleChange} />
                </div>

                <div className={style.form}>
                    <label htmlFor="" className={style.label}>Ataque</label>
                    {errores.attack && <span className={style.p}>{errores.attack}</span>}
                    <span>{input.attack}</span>
                    <input type="range" id="numero" name="attack" min="0" max="100" value={input.attack} onChange={handleChange} className={style.input} />
                </div>

                <div className={style.form}>
                    <label htmlFor="" className={style.label}>Defensa</label>
                    {errores.defense && <span className={style.p}>{errores.defense}</span>}
                    <span>{input.defense}</span>
                    <input type="range" id="numero" name="defense" min={0} value={input.defense} max="100" onChange={handleChange} className={style.input} />
                </div>

                <div className={style.form}>
                    <label htmlFor="" className={style.label}>Vida</label>
                    {errores.live && <span className={style.p}>{errores.live}</span>}
                    <span>{input.live}</span>
                    <input type="range" id="numero" name="live" min="0" max="100" value={input.live} onChange={handleChange} className={style.input} />
                </div>

                <div className={style.form}>
                    <label htmlFor="" className={style.label}>Velocidad</label>
                    {errores.speed && <span className={style.p}>{errores.speed}</span>}
                    {<span>{input.speed}</span>}
                    <input type="range" id="numero" name="speed" min="0" max="100" value={input.speed} onChange={handleChange} className={style.input} />
                </div>

                <div className={style.form}>
                    <label htmlFor="" className={style.label}>Altura</label>
                    <span>{input.height}</span>
                    <input type="range" id="numero" name="height" min="0" max="100" value={input.height} onChange={handleChange} className={style.input} />
                </div>

                <div className={style.form}>
                    <label htmlFor="" className={style.label}>Peso</label>
                    <span>{input.weight}</span>
                    <input type="range" id="numero" name="weight" min="0" max="100" value={input.weight} onChange={handleChange} className={style.input} />
                </div>

                <div>
                    {errores.type && <span className={style.p}>{errores.type}</span>}
                    <select name="type1" id="" value={input.type1} onChange={handleChange} className={style.select}>
                        <option value="Null">Tipos</option>
                        {types.map((type) => {
                            return <option value={type.id} key={type.id}>{type.name}</option>
                        })}
                    </select>
                    <select name="type2" id="" value={input.type2} onChange={handleChange} className={style.select}>

                        <option value="Null">Tipos</option>
                        {types.map((type) => {
                            return <option value={type.id} key={type.id}>{type.name}</option>
                        })}
                    </select>

                </div>
                <div>
                    <button onClick={(event) => handleSubmit(event, input)}>Submit</button>

                </div>

            </form>

        </div>
    )
}
export default CreatePokemon;