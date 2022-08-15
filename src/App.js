import { 
          BrowserRouter, 
          Routes, 
          Route
        } from 'react-router-dom';
import Nav from './Components/NavSection/Nav';
import Hero from './Components/Header/Hero'
import Step from './Components/Header/Step'



function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/' element={<Hero/>}/>
    <Route path='/main' element={<Step/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
