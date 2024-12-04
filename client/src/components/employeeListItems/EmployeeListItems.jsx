import React from 'react'
import './EmployeeListItems.css'
const EmployeeListItems = ({employee}) => {
  return (
    <div className='employeeItem'>
       <img src={require(employee.profile_img) } alt="" />
    </div>
  )
}

export default EmployeeListItems
