import './App.css';
import Home from './Components/Homepage';
import About from './Components/About';
import Profile from './Components/Profile';
import {Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Routes baseName='hotel'>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='home' element={<Home/>}/>
        <Route exact path='about' element={<About/>}/>
        <Route exact path='profile' element={<Profile/>}/>
      </Routes>
  );
}

export default App;
