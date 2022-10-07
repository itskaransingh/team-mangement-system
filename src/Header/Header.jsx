import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {

  return (
    <div className='p-3'>
      <ul className='flex space-x-5'>
       <Link to="/"><li>Home</li></Link> 
       <Link to="/teamdetails"><li>Teams Details</li></Link> 
      </ul>
    </div>
  )
}

export default Header