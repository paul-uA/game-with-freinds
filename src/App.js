import staticData from './data'
import { useState, useEffect } from 'react';
import {Route,Routes,useNavigate, Link} from 'react-router-dom'

//components
import Homebar from './components/HomeBar';
import GamesContainer from './components/GamesContainer';
import GameDetails from './components/gamedetails';

import './App.css';




function App() {


  return (
    <div className="App">
      <Homebar/>

      <Routes>
            
      <Route path='/' element={<GamesContainer/>}/>
      <Route path='/details/:id' element={<GameDetails/>}/>
      </Routes>     
    </div>
 
  )
}

export default App