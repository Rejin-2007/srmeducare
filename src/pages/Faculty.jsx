import React from 'react'
import HomeView from '../components/HomeView'
import MainFacultySection from '../components/MainFacultySection'
import StatsSection from "../components/StatsSection"
const Faculty = ({ title }) => {
  return (
    <div>
      <HomeView title = { title } />
      <StatsSection />
      <MainFacultySection />
    </div>
  )
}

export default Faculty