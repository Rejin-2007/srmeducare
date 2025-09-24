import React from 'react'
import CurrentCourse from '../components/CurrentCourse'
import UpComingCourse from '../components/UpComingCourse'
import HomeView from '../components/HomeView'

const Courses = ({ title }) => {
  return (
    <div>
      <HomeView title = { title } />
      <CurrentCourse />
      <UpComingCourse />
    </div>
  )
}

export default Courses