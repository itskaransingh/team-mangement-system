import React, { createContext, useState, useEffect } from "react";

export const EmployeeContext = createContext();

const EmployeeContextProvider = ({ children }) => {
  
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem('employeeList'))??
    [{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );

  const [selectedteam, setselectedteam] = useState(
    JSON.parse(localStorage.getItem("selectedteam"))??
    "TeamA"
  );

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedteam", JSON.stringify(selectedteam));
  }, [selectedteam]);


  const handlechange = (event) => {
    setselectedteam(event.target.value);
  };

  const handleclick = (event) => {
    const cteam = employees.map((em) =>
      em.id == event.currentTarget.id
        ? em.teamName === selectedteam
          ? { ...em, teamName: "" }
          : { ...em, teamName: selectedteam }
        : em
    );
    setEmployees(cteam);
  };

  const noofem = () => {
    const filteredno = employees.filter((em) => em.teamName == selectedteam);
    return filteredno.length;
  };


//form side
const [teamsdata, setteamsdata] = useState([])

const tdatamover=(data)=>{
  setteamsdata([...teamsdata,data])
  console.log(teamsdata)
}
// console.log(createt)

  const value = {
    employees,
    handlechange,
    selectedteam,
    handleclick,
    noofem,
    tdatamover,
    teamsdata
  };
  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
