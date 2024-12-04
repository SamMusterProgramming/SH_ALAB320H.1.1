import React from 'react'
import './EmployeeListItems.css'
const EmployeeListItems = ({employee}) => {
  return (
    <div className='employeeItem'>
       <img src={require(`${employee.profile_img}`) } alt="" />
       <div className='profile'>
          <p style={{fontSize:12 ,fontWeight:500}} >{employee.name}</p>
          <span style={{fontSize:11 ,fontWeight:100}}>{employee.title}</span>
       </div>
    </div>
  )
}

export default EmployeeListItems
