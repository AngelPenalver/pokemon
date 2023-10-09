import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LandingPage from './views/LadingPage/LandingPage';
import Home from './views/HomePage/HomePage';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPokemons } from './redux/action';
import Detail from './views/DetailPokemon/DetailPokemon';
import NavBar from './views/NavBar/NavBar';
import SearchPokemons from './views/SearchPokemons/SearchPokemons';
import CreatePokemon from './views/CreatePokemon/CreatePokemon';
import 'normalize.css'
import UpdatePokemon from './views/UpdatePokemon/UpdatePokemon';
import Error from './views/Error/Error';

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [input, setInput] = useState('')
  const [isError, setIsError] = useState(false);

  const pokemons = useSelector(state => state.pokemons)
  // console.log(pokemons);
  useEffect(()=>{
      dispatch(getPokemons())        
  },[])

  // console.log(pokemons);
  return (
   <div>
{!isError && location.pathname !== '/' && <NavBar input={input} setInput={setInput} pokemons={pokemons}/>}    <Routes>
      <Route path='/search/:name' element={<SearchPokemons/>}/>
      <Route path='/' element={<LandingPage />}/>
      <Route path={'*'} element={<Error setIsError={setIsError} />}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/create' element={<CreatePokemon/>}/>
      <Route path='/update/:id' element={<UpdatePokemon/>}/>
      <Route path='/home' element={<Home pokemons={pokemons} setInput={setInput}/>}/>
    </Routes>
   </div>
  );
}

export default App;
