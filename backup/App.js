import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Employee } from './MyComponents/Employee';
import { EmployeeList } from './MyComponents/EmployeeList';
import { useState } from 'react';
import { AddEmployee } from './MyComponents/AddEmployee';



function App() 
{
  const onDelete = (employee) =>{

    console.log("Delete called...",employee);
    let index=employeeList.indexOf(employee);
    setEmployees(employeeList.filter((e) => {

      return e !== employee;
      
   })
   )
  }
  const addEmployee = (employeename,age) => {

    console.log("adding",employeename,age);
    const employee={
      eId:1,
      eName:employeename,
      eAge:age
    }
    setEmployees([...employeeList,employee])
  }
  const[employeeList,setEmployees]= useState([
    {
      eId:101,
      eName:"srey",
      eAge:21
    },
    {
      eId:102,
      eName:"Deep",
      eAge:20
    },
    {
      eId:103,
      eName:"Divya",
      eAge:20
    }
  ])
  return (
    
    <>
      <Header title="Employee Management" searchBar={true}/>
      <AddEmployee addEmployee={addEmployee}/>
      <EmployeeList employeelist={employeeList} onDelete={onDelete}/>
      
    </>
  );
}

export default App;
