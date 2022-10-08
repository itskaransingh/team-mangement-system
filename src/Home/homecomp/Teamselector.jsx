import React from "react";
import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";
import { Link } from "react-router-dom";
import { MdLibraryAdd } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
const Teamselector = () => {
  const { handlechange, selectedteam, tdatamover,optvaluepicker, teamsdata, handleteamdel } =
    useContext(EmployeeContext);

  const [tdatasender, settdatasender] = useState("");

//  useEffect(()=>{
//    optvaluepicker(tdatasender)
//  },[teamsdata])

  const handlein = (event) => {
    settdatasender(event.target.value);
  };

  const handleclick = (event) => {
    event.preventDefault();
    tdatamover(tdatasender);
    settdatasender("");
  };

  let mapedopt = teamsdata.map((d) => {
    return (
      <option value={d.tname} key={d.id} id={d.id} className="text-black ">
        {d.tname}
      </option>
    );
  });

  return (
    <div className="flex flex-col w-[80%] mx-auto mt-5">
      <div className="flex w-full  justify-between items-center rounded-md border-black border bg-slate-400">
        <div className="w-[95%]">
          <select
            name=""
            id=""
            value={selectedteam}
            onChange={handlechange}
            className="w-full p-3 outline-none pl-3 text-lg font-bold text-white bg-transparent"
          >
            {/* <option value="Primary">Primary</option> */}
            {mapedopt}
          </select>
        </div>
        <Link to="">
          <div className=" font-semibold text-black text-lg w-[5%]   flex items-center justify-start pr-1 pl-1 ">
            <div className="text-2xl cursor-pointer">
              <MdLibraryAdd />
            </div>
          </div>
        </Link>
        <div onClick={handleteamdel} className="text-2xl cursor-pointer pr-2">
          <BsFillTrashFill />
        </div>
      </div>
      <div className="relative top-2">
        <form
          action=""
          className="flex  items-center bg-slate-600 rounded-md overflow-hidden"
        >
          <input
            type="text"
            value={tdatasender}
            autoFocus
            onChange={handlein}
            className="bg-black text-white outline-none w-[95%] text-lg px-4 py-2"
          />
          <button onClick={handleclick} className="w-[5%]  pl-4">
            <div className="text-3xl w-full h-full"><IoCreateOutline/></div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Teamselector;
