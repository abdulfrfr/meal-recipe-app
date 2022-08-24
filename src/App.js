import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Nav from './Components/NavSection/Nav';
import Hero from './Components/Hero/Hero';
import Main from './Components/Header/Main';
import Chosen from './Components/Chosen/Chosen';



function App() {
  const [search, setSearch] = useState('')
  const [popData, setPopData] = useState([]);
  const newPopData = popData.slice(0,8);

  useEffect(
    ()=>{
      axios.get('https://api.spoonacular.com/recipes/findByNutrients?minCarbs=100&apiKey=ddc6712f398a4c4299854fe8b47cb04c', {
          Headers:{
              'Content-Type': 'application/json'   
          }
      })
      .then((res)=> setPopData(res.data))
      .then((err)=> console.log(err))
      console.log('working');
      console.log(popData);
    }, [popData])

    

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/' element={<Hero setSearch={setSearch}/>}/>
    <Route path='/main' element={<Main newPopData={newPopData} />}/>
    <Route path='/chosen' element={<Chosen/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
