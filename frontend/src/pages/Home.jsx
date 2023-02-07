import React from 'react'
import Intro from '../components/Intro'
import Latest from '../components/Latest'

const Home = () => {
  return (
    <div className='home'>
      <Intro/>
      <Latest/>
    </div>
  )
}

export default Home