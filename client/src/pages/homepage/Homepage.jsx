import React from 'react'
import './Homepage.css'
import Header from '../../components/header/Header'
import SearchBar from '../../components/searchBar/SearchBar'
import EmployeeList from '../../components/EmployeeList/EmployeeList'

const Homepage = () => {
  return (
    <div className='wrapper'>
       <Header/>
       <SearchBar/>
       <EmployeeList/>
    </div>
  )
}
export default Homepage
