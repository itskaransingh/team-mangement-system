import React from "react";
import { useContext, useState } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";
import { Link } from "react-router-dom";
import { MdLibraryAdd } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
const Teamselector = () => {
  const { handlechange, selectedteam, tdatamover, teamsdata, handleteamdel,createinshower,createinhandler } =
    useContext(EmployeeContext);
     
  const [tdatasender, settdatasender] = useState("");

// setcreateinshower(dpfromnofem())

  const handlein = (event) => {
    settdatasender(event.target.value);
  };

  const handleclick = (event) => {
    event.preventDefault();
    tdatamover(tdatasender);
    handlecreatebtn()
    settdatasender("");
  };

  const handlecreatebtn=()=>{
    createinshower===true?createinhandler(false):createinhandler(true)
  }

  let mapedopt = teamsdata.map((d) => {
    return (
      <option value={d.tname} key={d.id} id={d.id} className="text-black ">
        {d.tname}
      </option>
    );
  });

  return (
    <div className="flex flex-col w-[80%] mx-auto mt-5">
      <div className="flex w-full  justify-between items-center rounded-md border-black border bg-teal-100">
        <div className="w-[95%]">
          <select
            name=""
            id=""
            value={selectedteam}
            onChange={handlechange}
            className="w-full p-3 outline-none pl-3 text-lg font-bold text-black bg-transparent"
          >
            {/* <option value="Primary">Primary</option> */}
            {mapedopt}
          </select>
        </div>
        <Link to="">
          <div className=" font-semibold text-black text-lg w-[5%]   flex items-center justify-start pr-1 pl-1 ">
            <div className="text-2xl cursor-pointer" onClick={handlecreatebtn}>
              <MdLibraryAdd />
            </div>
          </div>
        </Link>
        <div onClick={handleteamdel} className="text-2xl cursor-pointer pr-2">
          <BsFillTrashFill />
        </div>
      </div>
    { createinshower===true?<div className="relative top-2">
        <form
          action=""
          className="flex  items-center  border-2 border-teal-200 rounded-md overflow-hidden focus-within:border-teal-500"
        >
          <input
            type="text"
            value={tdatasender}
            autoFocus
            onChange={handlein}
            className="bg-white text-black outline-none lg:w-[95%] md:w-[90%] w-[85%] text-lg font-semibold px-4  py-2 "
          />
          <button onClick={handleclick} className="w-[5%] md:pl-4 pl-3">
            <div className="md:text-3xl text-2xl w-full h-full  text-teal-400 hover:text-teal-200"><IoCreateOutline/></div>
          </button>
        </form>
      </div>: <div></div> }
    </div>
  );
};

export default Teamselector;
