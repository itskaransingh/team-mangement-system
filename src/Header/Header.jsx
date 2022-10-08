import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {

  return (
    <div className='p-4 bg-teal-300' >
      <ul className='flex space-x-5 font-semibold'>
       <Link to="/"><li>Home</li></Link> 
       <Link to="/teamdetails"><li>Teams Details</li></Link> 
      </ul>
    </div>
  )
}

export default Header