import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import Details from './teamdetails/Details';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Addteamform from './addforms/Addteamform';


function App() {

  return (
<div className='box-border h-screen '>
  
<Router>
<Header />
<Routes>
  <Route exact path='/' element={<Home />}/>
  <Route exact path='/teamdetails' element={<Details />}/>
  <Route exact path='/newteam' element={<Addteamform/>}/>
</Routes>
</Router>
</div>
  )
}

export default App
