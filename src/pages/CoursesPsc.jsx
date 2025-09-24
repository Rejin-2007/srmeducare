import React from 'react'
import CoursesPscDetail from '../components/CoursesPscDetail'
import CurrentCourse from '../components/CurrentCourse'
import HomeView from '../components/HomeView'

const CoursesPsc = ({ title }) => {
  return (
    <div>
      <HomeView title = { title } />
      <CoursesPscDetail />
    </div>
  )
}

export default CoursesPsc