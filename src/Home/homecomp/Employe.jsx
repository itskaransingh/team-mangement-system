import React from 'react'
import maleavatar from '../../images/maleavatar.jpeg'
import femaleavatar from '../../images/femaleavatar.jpeg'
import {useContext} from 'react'
import {EmployeeContext} from '../../context/EmployeeContext';

const Employe = ({empl}) => {
  const {handleclick,selectedteam}= useContext(EmployeeContext)
  
  return (
    <div onClick={handleclick} id={empl.id}  className={empl.teamName==selectedteam?"border text-center shadow-2xl mx-auto border-black  w-fit flex justify-center box-border p-2 bg-teal-300 scale-110":"flex  mx-auto justify-center w-fit items-center text-center box-border border-y-2 p-2 border-y-teal-400 scale-110 "  }>
        <div >
            <div>
             { empl.gender==="male"? <img src={maleavatar} alt="Male" />: <img src={femaleavatar} alt="feMale" />}
            </div>
            <div className='font-bold text-xl pt-2'>
              {empl.fullName}
            </div>
            <div className='text-md'>{empl.designation}</div>
        </div>
    </div>
  )
}

export default Employe