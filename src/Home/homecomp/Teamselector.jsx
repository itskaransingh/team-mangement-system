import React from "react";
import { useContext,useState } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";
import { Link } from "react-router-dom";

const Teamselector = () => {
  const { handlechange, selectedteam,tdatamover,teamsdata } = useContext(EmployeeContext);
  const [tdatasender, settdatasender] = useState("")
const handlein=(event)=>{
  settdatasender(event.target.value) }
  // handlein()
const handleclick=(event)=>{
  event.preventDefault()
 tdatamover(tdatasender);
}
  return (
    <div className="flex flex-col">
      <div className="flex w-[80%] mx-auto justify-between items-center  space-x-3 border-black border bg-slate-400">
        <div className="w-full">
          <select
            name=""
            id=""
            value={selectedteam}
            onChange={handlechange}
            className="w-full outline-none pl-2 text-lg font-bold text-white bg-transparent"
          >
        
            <option value="TeamA" className="text-black">
              Team A
            </option>
            <option value="TeamB" className="text-black">
              Team B
            </option>
            <option value="TeamC" className="text-black">
              Team C
            </option>
            <option value="TeamD" className="text-black">
              Team D
            </option>
          </select>
        </div>
        <Link to="/newteam">
          <div className=" font-semibold text-white text-lg w-[5%]   flex items-center justify-center">
            <div>New</div>
          </div>
        </Link>
      </div>
        <div >
          <form action="" className="pl-16 bg-slate-600" >
            <input type="text" name="" id="" onChange={handlein} className="bg-black text-white"/>
           <button onClick={handleclick} >Create</button>
          </form>
        </div>
        
    </div>
  );
};

export default Teamselector;
