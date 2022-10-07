import React from 'react';
import Teamselector from './homecomp/Teamselector';
import Employees from './homecomp/Employees';
import Footer from './homecomp/Footer';
import Noofem from './homecomp/Noofem';

const Home = () => {
  return (
    <div>
<Teamselector />
<Noofem />
<Employees />
<Footer />
    </div>
  )
}

export default Home