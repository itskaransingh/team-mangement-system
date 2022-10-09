import React from "react";
import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

const Addemploye = () => {
  const navigate=useNavigate();

  const { emdatapickerform } =useContext(EmployeeContext);


  const [emd, setemd] = useState({teamName:"",id:uuidv4()});

  const onemsub = (event) => {
    const{name,value}=event.target
    setemd({...emd,[name]:value}) 
    
  };

  const onsub=(event)=>{
    // event.preventDefault()
    emdatapickerform(emd)
    setemd({teamName:""})
    navigate('/')
  }


  return (
    <div className="min-h-screen grow  flex  items-center">
      
      <form    
        className="flex  h-[70%]  items-start w-[70%] mx-auto bg-teal-400 rounded-md"
      >
        <div className="flex flex-col h-full space-y-5 items-center w-full  justify-around p-4 mx-auto ">
          <div className="font-semibold self-center text-3xl">Add Employee</div>

          <div className="space-y-6 w-[80%]">
            <div className="self-center">
              <label htmlFor="fname">Full name</label>
              <div className="text-center">
                <input
                  type="text"
                  id="fname"
                  name="fullName"

                  className="py-1 px-2 w-full"
                  onChange={onemsub}
                />
              </div>
            </div>
            <div>
              <label htmlFor="des">Designation</label>
              <div className="text-center">
                <input
                  type="text"
                  name="designation"
                  id="des"
                  className="py-1 px-2 w-full"
                  onChange={onemsub}
                />
              </div>
            </div>
            <div className="flex space-x-14 " >
              <input
                type="radio"
                value="male"
                name="gender"
                className="mr-1"
                onChange={onemsub}
                required />{" "}
              Male
              <input
                type="radio"
                value="female"
                name="gender"
                onChange={onemsub}
              />{" "}
              Female
            </div>
          </div>
          <div className="flex justify-center items-center w-[80%]">
            <button
              type="submit"
              className=" px-3 w-full rounded-md py-0.5 text-xl font-semibold bg-blue-500 hover:bg-blue-600"
            onClick={onsub} >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addemploye;
