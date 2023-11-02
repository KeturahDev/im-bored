import React from 'react'
import ActivityGenerator from '../components/ActivityGenerator'

const DoSomethingPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-bold'>Okay, do something then</h1>
      
      <ActivityGenerator />
    </div>
  )
}

export default DoSomethingPage