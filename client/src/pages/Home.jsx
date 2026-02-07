import React from 'react'
import Sidebar from '../components/Sidebar'

export default function home() {
  return (
    <div className='flex items-center'>
      <div>
        <Sidebar/>
      </div>
      <div>
        Home Page
      </div>
    </div>
  )
}
