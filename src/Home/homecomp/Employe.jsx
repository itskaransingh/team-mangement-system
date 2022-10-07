import React from 'react'
import maleavatar from '../../images/maleavatar.jpeg'
import femaleavatar from '../../images/femaleavatar.jpeg'
import {useContext} from 'react'
import {EmployeeContext} from '../../context/EmployeeContext';

const Employe = ({empl}) => {
  const {handleclick,selectedteam}= useContext(EmployeeContext)
  
  return (
    <div onClick={handleclick} id={empl.id}  className={empl.teamName==selectedteam?"border border-black":""}>
        <div>
            <div>
             { empl.gender==="male"? <img src={maleavatar} alt="Male" />: <img src={femaleavatar} alt="feMale" />}
            </div>
            <div>
              {empl.fullName}
            </div>
            <div>{empl.designation}</div>
        </div>
    </div>
  )
}

export default Employe