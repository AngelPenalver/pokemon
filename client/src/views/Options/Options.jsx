import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {  filterPokemons, filterPokemonsByTipe, getTypes, orderPokemons } from "../../redux/action";

const Option =({setPage, setReset, reset}) => {
    
    
    const dispatch = useDispatch();
// console.log(props);
    
    // const []
    
    const types = useSelector(state => state.types)
    useEffect(()=>{
        dispatch(filterPokemonsByTipe('All'))
        dispatch(filterPokemons('All'))
    },[])
    

    function handleFilter(event){
        setPage(1)
        dispatch(filterPokemons(event.target.value))
    }
    function handleFilterType(event){
        setPage(1)
        dispatch(filterPokemonsByTipe(event.target.value))
    }
    function handleOrder(event){
        dispatch(orderPokemons(event.target.value))
        
        console.log(event.target.value);
    }
    useEffect(()=> {
        dispatch(getTypes())

    },[])
    // console.log(types);
    return(
        <div>
           <select name="" id="" onChange={handleFilterType} >
            <option value="All">Todos</option>
            {types.map((type) => {
            return <option key={type.id} value={type.name}>{type.name}</option>
            })}
           </select>
           <select name="" id="" onChange={handleOrder}>
            <option value="ascendente">A - Z</option>
            <option value="descendente">Z - A</option>
           </select>
           <select name="" id="" onChange={handleFilter}>
            <option value="All">Todos</option>
            <option value="API">API</option>
            <option value="DB">Base de datos</option>
           </select>
        </div>
    )
}
export default Option;