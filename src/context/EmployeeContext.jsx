import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';


export const EmployeeContext = createContext();

const EmployeeContextProvider = ({ children }) => {
  
  
  const demoemplist =[{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "",
    demo:true,
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "", 
    demo:true,
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "",
    demo:true,
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "",
    demo:true,
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "",
    demo:true,
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "",
    demo:true,
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "",
    demo:true,
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "",
    demo:true,
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "",
    demo:true,
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "",
    demo:true,
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "",
    demo:true,
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "",
    demo:true,
  },
]

const [employees, setEmployees] = useState(
  JSON.parse(localStorage.getItem('employeeList'))??demoemplist);

const emdatapickerform=(data)=>{
  setEmployees([...employees,data])
  console.log(employees)
}


const [selectedteam, setselectedteam] = useState(
  JSON.parse(localStorage.getItem("selectedteam"))??"Primary team"
  );
  
  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedteam", JSON.stringify(selectedteam));
  }, [selectedteam]);


 const handleteamdel =()=>{
   const filteredtdata= teamsdata.filter((d)=>{
   return d.tname!==selectedteam
  })
    const transformedtdata= employees.map((d)=>{
   if(d.teamName==selectedteam){return {...d,teamName:""};}
   return d
  })
setEmployees(transformedtdata)
  setteamsdata(filteredtdata)
  setselectedteam(filteredtdata[0].tname)

 }

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
  const [teamsdata, setteamsdata] = useState(JSON.parse(localStorage.getItem("teamsdata"))||[{id:uuidv4, tname:'Primary Team'}])
  
  const tdatamover=(data)=>{
    setteamsdata([...teamsdata,{id:uuidv4(),tname:data}])
    setselectedteam(data)
    console.log(data)
  }
  // console.log(createt)
  useEffect(() => {
    localStorage.setItem("teamsdata", JSON.stringify(teamsdata));
  }, [teamsdata]);
  
  const [createinshower, setcreateinshower] = useState(false)

  const createinhandler=(data)=>{
    setcreateinshower(data)
  }

  const value = {
    employees,
    handlechange,
    selectedteam,
    handleclick,
    noofem,
    tdatamover,
    teamsdata,
    handleteamdel,
    createinshower,
    createinhandler,
    emdatapickerform
  };
  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
