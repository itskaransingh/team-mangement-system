import React from "react";
import { useContext } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";

const Noofem = () => {
  const { noofem, selectedteam, teamsdata, createinshower, createinhandler } =
    useContext(EmployeeContext);

  const handlecreatebtn = () => {
    createinshower === true ? createinhandler(false) : createinhandler(true);
  };

  const teamcount = () => {
    return teamsdata.length == 0 ? (
      <div>
        <div className="font-bold pb-2">No Teams</div>
{   createinshower===true? <div></div>   :  <span
          className="text-white text-xl px-2 py-1 cursor-pointer  bg-teal-400"
          onClick={handlecreatebtn}
        >
          Create
        </span>}
      </div>
    ) : (
      <div className="px-5">
        There are <span className="font-bold">{noofem()}</span> Employees in the
        Team <span className="font-bold">{selectedteam}</span>
      </div>
    );
  };
  return <div className="text-center text-3xl pt-8 pb-10">{teamcount()}</div>;
};

export default Noofem;
