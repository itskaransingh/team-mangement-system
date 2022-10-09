import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {

  return (
    <div className='p-4 px-10 sticky top-0 z-10 bg-teal-300 flex md:justify-between items-center justify-center' >
      <div className='text-2xl font-bold  '>Team-Ellocation</div>
      <ul className=' space-x-5 font-semibold md:flex hidden'>
       <Link to="/"><li>Home</li></Link> 
       <Link to="/teamdetails"><li>Teams Details</li></Link> 
       <Link to="/newemploye"><li>Add Employe</li></Link> 
      </ul>
    </div>
  )
}

export default Header