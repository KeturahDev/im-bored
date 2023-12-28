'use client'
import React, { useEffect, useState } from 'react'
import ActivityList from '../components/ActivityList'
import { Activity } from '../utils/models'

const BrainStorm = () => {
  const [activityList, setActivityList] = useState<Activity[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('/api/activity', {method: "GET", body: null})
      .then((res) => res.json())
      .then((data) => {
        setActivityList(data.data.Items)
        setIsLoading(false)
      })
    console.log()
  },[])

  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-bold'>Brainstorm Page</h1>
      {isLoading ? 
      <> loading... </> 
      : <ActivityList activityList={activityList}/>
      }
    </div>
  )
}

export default BrainStorm