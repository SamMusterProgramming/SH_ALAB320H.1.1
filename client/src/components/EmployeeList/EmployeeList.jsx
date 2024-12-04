import React from 'react'
import './EmployeeList.css'
import EmployeeListItems from '../employeeListItems/EmployeeListItems'


const EmployeeList = () => {
  
  const employees = [{
    name:"Samir Haddadi",
    profile_img:'./assets/avatar.avif',
    title: "cleaner lol "
  },    
  {
    name:"Nesta Parchment",
    profile_img:'./assets/avatar.avif',
    title: "Director "
  },
  ,
  {
    name:"Tishana Trainor",   
    profile_img:'./assets/avatar.avif',
    title: "Instructor"
  },{
    name:"Samir Haddadi",
    profile_img:'./assets/avatar.avif',
    title: "cleaner lol "
  },    
  {
    name:"Nesta Parchment",
    profile_img:'./assets/avatar.avif',
    title: "Director "
  },
  ,
  {
    name:"Tishana Trainor",   
    profile_img:'./assets/avatar.avif',
    title: "Instructor"
  },
  {
    name:"Manara The Goat",
    profile_img:'./assets/avatar.avif',
    title: "Javascript Expert"
  }
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
