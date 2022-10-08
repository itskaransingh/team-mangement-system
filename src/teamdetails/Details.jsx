import React from "react";
import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { Link } from "react-router-dom";

const Details = () => {
  const { employees, selectedteam, tdatamover, teamsdata, handleteamdel } =
    useContext(EmployeeContext);
  const [clickedteam, setclickedteam] = useState("");

  const handleshowclick = (event) => {
    clickedteam == event.target.innerHTML? setclickedteam(""):setclickedteam(event.target.innerHTML);  
  };

  const Tmdatacomp = ({ data }) => {
    const { employees } = useContext(EmployeeContext);
    const filtereddata = employees.filter((f) => {
      return f.teamName == clickedteam;
    });

    return (
      <div>
        {filtereddata.map((e) => {
          return <div>{e.fullName}</div>;
        })}
      </div>
    );
  };

  return (
    <div>
      {teamsdata.map((d) => {
        return (
          <div className="p-10">
            <div onClick={handleshowclick}>{d.tname}</div>
            {d.tname !== clickedteam ? (
              <div>me nhi dikhaunga</div>
            ) : (
              <Tmdatacomp data={d} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Details;
