import React from 'react'

const Addemploye = () => {
  return (
    <div>
        <form action="">
            <label htmlFor="fname">Full name</label>
            <input type="text" id='fname'/>
            <label htmlFor="des">Designation</label>
            <input type="text" id='des'/>
            <label htmlFor="m">Male</label>
            <input type="radio" name="" id="m" value="male" />
            <label htmlFor="f">Female</label>
            <input type="radio" name="" id="f" value="female"/>
        </form>
    </div>
  )
}

export default Addemploye