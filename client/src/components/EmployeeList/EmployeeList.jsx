import React from 'react'
import './EmployeeList.css'
import EmployeeListItems from '../employeeListItems/EmployeeListItems'


const EmployeeList = () => {
  
  const employees = [{
    name:"Samir",
    profile_img:'../assets/avatar.avif',
    title: "cleaner lol "
  },
  {
    name:"Nesta",
    profile_img:'../assets/avatar.avif',
    title: "Director "
  },
  ,
  {
    name:"Tishana",
    profile_img:'../assets/avatar.avif',
    title: "Instructor"
  },
 ] 


  return (
    <div className='employeeList'>
      
                { employees.map((employee, i) => (
                  <EmployeeListItems key={i} employee={employee} /> 
               ))
               }
           
     
    </div>
  )
}

export default EmployeeList
