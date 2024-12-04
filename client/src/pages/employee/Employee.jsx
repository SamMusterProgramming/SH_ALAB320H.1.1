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
             <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}> 
               <p style={{fontSize:15,fontWeight:500}} >Samir Haddadi</p>
               <span style={{fontSize:13,fontWeight:100}} >Not Yet</span>
             </div>
         </div>    
       </div>     
    </div>
  )
}

export default Employee
