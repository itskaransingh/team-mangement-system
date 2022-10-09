import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import Details from './teamdetails/Details';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Addemploye from './addforms/Addemploye';
import Footer from './Home/homecomp/Footer';


function App() {

  return (
<div className='box-border min-h-screen container   '>
  
<Router>
<Header />
<Routes>
  <Route exact path='/' element={<Home />}/>
  <Route exact path='/teamdetails' element={<Details />}/>
  <Route exact path='/newemploye' element={<Addemploye/>}/>
</Routes>
<Footer />
</Router>
</div>
  )
}

export default App
