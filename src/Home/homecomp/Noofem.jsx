import React from 'react'
import {useContext} from 'react'
import {EmployeeContext} from '../../context/EmployeeContext';

const Noofem = () => {
  const {noofem,selectedteam,teamsdata}= useContext(EmployeeContext)

const teamcount=()=>{
 return (teamsdata.length == 0 ? <div className='font-bold'>No Teams</div> : <div>There are <span className='font-bold'>{noofem()}</span> Employees in the Team <span className='font-bold'>{selectedteam}</span></div> )
}
  return (
    <div className='text-center text-3xl py-10'>{teamcount()}</div>
  )
}

export default Noofem