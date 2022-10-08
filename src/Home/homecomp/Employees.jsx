import React,{useContext} from 'react'
import Employe from './Employe';
import {EmployeeContext} from '../../context/EmployeeContext';

const Employees = () => {
  const {employees}= useContext(EmployeeContext);
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 w-[80%] mx-auto p-5 gap-y-16 grid-cols-1 '>  
          {employees.map((emp)=>(
      <Employe empl={emp} key={emp.id} />
          ))}
       
    </div>
  )
}

export default Employees