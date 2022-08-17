import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Nav from './Components/NavSection/Nav';
import Hero from './Components/Hero/Hero'
import Main from './Components/Header/Main'



function App() {


    

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/' element={<Hero />}/>
    <Route path='/main' element={<Main />}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
