import React from 'react'
import "./Employee.css"
const Employee = () => {
  return (
    <div className='wrapper2'>
       <div className='header'>
         <p>Employee</p>
       </div>
       <div className="employeeContainer">
         <div className="profileContainer">  
             <img src={require('./avatar.avif')} alt="" />
             <div> 
               <p>Samir Haddadi</p>
             </div>
         </div>    
       </div>  
    </div>
  )
}

export default Employee
