import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import About from './About'
import Skill from './Skill'
import Education from './Education'
import Project from './Project'
import Contect from './Contect'
import Hero from './Home'


const AllRouts = () => {
  return (
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Skill' element={<Skill/>}/>
      <Route path='/Educations' element = {<Education/>}/>
      <Route path='/Project' element={<Project/>}/>
      <Route path='/Contect' element={<Contect/>}/>
  

    </Routes>
  )
}

export default AllRouts