import React from 'react';
import Teamselector from './homecomp/Teamselector';
import Employees from './homecomp/Employees';
import Footer from './homecomp/Footer';
import Noofem from './homecomp/Noofem';

const Home = () => {
  return (
    <div>
      <div className='text-center text-5xl font-semibold pt-5 pb-3 md:block hidden'>Team Ellocation</div>
<Teamselector />
<Noofem />
<Employees />
    </div>
  )
}

export default Home