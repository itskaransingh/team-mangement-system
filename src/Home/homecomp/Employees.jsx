import React,{useContext} from 'react'
import Employe from './Employe';
import {EmployeeContext} from '../../context/EmployeeContext';

const Employees = () => {
  const {employees}= useContext(EmployeeContext);
  return (
    <div> 
          {employees.map((emp)=>(
      <Employe empl={emp} key={emp.id} />
          ))}
       
    </div>
  )
}

export default Employees