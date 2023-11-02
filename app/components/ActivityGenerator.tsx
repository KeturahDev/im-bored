'use client'
import React, { useState } from 'react'

interface Activity {
  activity: string;
}

const ActivityGenerator = () => {
  const [activity, setActivity] = useState<Activity>({activity: ""});

  const getActivity = async () => {
    const res = await fetch('https://www.boredapi.com/api/activity');
    try {
      setActivity(await res.json());
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='border-black mt-8 p-2 gap-4 flex flex-col items-center border-2 border-green-500 rounded-md'>
        <div>Generate Random Activity</div>
        <div>{activity.activity}</div>
        <button onClick={getActivity} className='btn btn-outline btn-primary'>Go</button>
      </div>
  )
}

export default ActivityGenerator