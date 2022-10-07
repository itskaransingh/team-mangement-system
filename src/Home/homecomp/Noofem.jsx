import React from 'react'
import {useContext} from 'react'
import {EmployeeContext} from '../../context/EmployeeContext';

const Noofem = () => {
  const {noofem,selectedteam}= useContext(EmployeeContext)

  return (
    <div>{`There are ${noofem()} Employees in the ${selectedteam}`}</div>
  )
}

export default Noofem