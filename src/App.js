import { 
          BrowserRouter, 
          Routes, 
          Route
        } from 'react-router-dom';
import Nav from './Components/NavSection/Nav';
import Hero from './Components/Header/Hero'



function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/' element={<Hero/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
