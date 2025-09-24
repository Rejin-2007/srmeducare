import React from 'react'
import HomeView from '../components/HomeView'
import Terms from '../components/Terms'

const TermsAndConditions = ({ title }) => {
  return (
    <div>
            <HomeView  title = { title }/>
            <Terms />
    </div>
  )
}

export default TermsAndConditions