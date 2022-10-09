import React from "react";
import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { teamsdata,createinshower,createinhandler } = useContext(EmployeeContext);
  const [clickedteam, setclickedteam] = useState("");
const navigate=useNavigate();
  const handleshowclick = (event) => {
    clickedteam == event.target.innerHTML
      ? setclickedteam("")
      : setclickedteam(event.target.innerHTML);
  };

  const Tmdatacomp = ({ data }) => {
    const { employees } = useContext(EmployeeContext);
    const filtereddata = employees.filter((f) => {
      return f.teamName == clickedteam;
    });

    return (
      <div className="flex flex-col space-y-5 pt-4 pb-4">
        {filtereddata.map((e) => {
          return (
            <div>
              <div className="text-2xl font-medium">{e.fullName}</div>
              <div className="text-xl">{e.designation}</div>
            </div>
          );
        })}
      </div>
    );
  };

  const navinhandler=()=>{
    createinhandler(true) 
    navigate('/')
  }

  const handlecreatebtn=()=>{
    createinshower===true?createinhandler(false):navinhandler()
  }


  return (
    <div className="w-screen grow min-h-screen ">
      {teamsdata.length === 0 ? (
        <div className="mx-auto w-[80%] border-b-teal-300 border-l-8   my-10  border-teal-400 lg:pl-6 pl-4">
          <div className="text-5xl pb-5">No Teams Available</div>
          <span className='text-white text-xl px-2 py-1 cursor-pointer  bg-teal-400' onClick={handlecreatebtn}>Create</span>
        </div>
      ) : (
        <div className="w-[80%] mx-auto flex flex-col  text-start my-10 space-y-10 border-l-8 border-l-teal-400 lg:pl-6 pl-4">
          {" "}
          {teamsdata.map((d) => {
            return (
              <div className="border-b-teal-300  border-b-2">
                <div onClick={handleshowclick}>
                  {d.tname == clickedteam ? (
                    <div className="text-4xl underline underline-offset-2 text-teal-400 pb-3  font-semibold cursor-pointer">
                      {d.tname}
                    </div>
                  ) : (
                    <div className="text-4xl pb-3 font-semibold cursor-pointer">
                      {d.tname}
                    </div>
                  )}
                  {d.tname !== clickedteam ? (
                    <div className="text-xl pb-2">Click to see Details</div>
                  ) : (
                    <Tmdatacomp data={d} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Details;
