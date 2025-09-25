import React from 'react'
import HomeView from '../components/HomeView'
import StatsSection from '../components/StatsSection'
import TestimonialsSection from '../components/TestimonialsSection'

const Review = ({ title }) => {
  return (
    <div>
      <HomeView title = { title } />
      <TestimonialsSection />
      <StatsSection />
    </div>
  )
}

export default Review