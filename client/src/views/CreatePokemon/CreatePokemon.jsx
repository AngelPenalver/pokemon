import { useEffect, useState } from 'react';
import style from './CreatePokemon.module.css'
import { useDispatch } from 'react-redux';
import { createPokemons, getPokemons } from '../../redux/action';
import { useSelector } from 'react-redux';
import swal from 'sweetalert'
import validation from './validation/validation';

const CreatePokemon = () => {
    const dispatch = useDispatch()
    const types = useSelector(state => state.types)
    const valuesInputs = {
        name: '',
        image: '',
        attack:0,
        defense:0,
        live:0,
        speed:0,
        weight:0,
        height:0,
        type1:'Null',
        type2:'Null'
    }
    // console.log(types);
    const [errores, setErrores] = useState(valuesInputs)
    const [input, setInput] = useState(valuesInputs)
    // console.log(errores);
   
    function handleSubmit(event, input){
        if(Object.keys(errores).length === 0){
            window.alert('Pokemon creado con exito')
            event.preventDefault()
              let lowerCaseName = input.name.toLowerCase();
                dispatch(createPokemons({...input, name: lowerCaseName}));
                dispatch(getPokemons()) 
                setInput(valuesInputs)
                

        }else{
            event.preventDefault()
            window.alert('Revise bien el formulario e intente de nuevo')
        }
      }

    function handleChange(event){
        setErrores(validation({
            ...input,
            [event.target.name] : event.target.value
        }))
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
   
    }
    // console.log(type);
    console.log(errores);
    // console.log(input
    return (
        <div>
            <div className={style.form}>
                <form action="" className={style.div}>
                <label htmlFor="">Nombre</label>
                {errores.name && <p>{errores.name}</p>}
                <input type="text" name="name" id="" value={input.name} onChange={handleChange}/>
                <label htmlFor="">image</label>
                {errores.image && <p>{errores.image}</p> }
                <input type="text" name='image' value={input.image} onChange={handleChange}/>
                    <label htmlFor="">Ataque</label>
                    {errores.attack && <p>{errores.attack}</p>}
                    <p>{input.attack}</p>
                    <input type="range" id="numero" name="attack" min="1" max="100" value={input.attack}onChange={handleChange}/>
                    <label htmlFor="">Defensa</label>
                    <p>{input.defense}</p>
                    {errores.defense && <p>{errores.defense}</p>}
                    <input type="range" id="numero" name="defense" min="1" value={input.defense} max="100" onChange={handleChange}/>
                    <label htmlFor="">Vida</label>
                    <p>{input.live}</p>
                    {errores.live && <p>{errores.live}</p>}
                    <input type="range" id="numero" name="live" min="1" max="100"value={input.live} onChange={handleChange}/>
                    <label htmlFor="">Velocidad</label>
                    <p>{input.speed}</p>
                    {errores.speed && <p>{errores.speed}</p>}
                    <input type="range" id="numero" name="speed" min="1" max="100" value={input.speed}onChange={handleChange}/>
                    <label htmlFor="">Altura</label>
                    <p>{input.height}</p>
                    
                    <input type="range" id="numero" name="height" min="1" max="100" value={input.height} onChange={handleChange}/>
                    <label htmlFor="">Peso</label>
                    <p>{input.weight}</p>                    
                    <input type="range" id="numero" name="weight" min="1" max="100" value={input.weight} onChange={handleChange}/>
                        {errores.type && <p>{errores.type}</p>}
                    <select name="type1" id="" value={input.type1} onChange={handleChange}>
                    <option value="Null">Tipos</option>
                    {types.map((type) => {
                        return <option value={type.id} key={type.id}>{type.name}</option>
                    })}
                    </select>
                    <select name="type2" id=""  value={input.type2} onChange={handleChange}>
                    {errores.type && <p>{errores.type}</p>}
                    <option value="Null">Tipos</option>
                    {types.map((type) => {
                        return <option value={type.id} key={type.id}>{type.name}</option>
                    })}
                    </select>
                    <button onClick={(event) => handleSubmit(event,input)}>Submit</button>
                       
                </form>
                    </div>
            </div>
            )
        }
            export default CreatePokemon;