import React from 'react'
import KidsLatest from './KidsLatest'
import MenLatest from './MenLatest'
import WoomenLatest from './WoomenLatest'

const Latest = () => {
  return (
    <div className='latest'>
        <MenLatest/>
        <WoomenLatest/>
        <KidsLatest/>
    </div>
  )
}

export default Latest