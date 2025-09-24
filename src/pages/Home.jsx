import React from 'react'
import HomeView from '../components/HomeView'
import StatsSection from '../components/StatsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import MainFacultySection from '../components/MainFacultySection'
import AboutSection from '../components/AboutSection'

const Home = ({ title }) => {
  return (
    <div>
      <HomeView title = { title } />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <MainFacultySection />
    </div>
  )
}

export default Home