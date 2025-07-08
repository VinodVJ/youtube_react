import React from 'react'
import VideContainer from './VideContainer'
import Sidebar from './Sidebar'

const BodyContainer = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <VideContainer />
    </div>
  )
}

export default BodyContainer