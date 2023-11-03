'use client'
import React, { useState } from 'react'

interface Activity {
  activity: string;
}
type Details = "solo" | "group"

const ActivityGenerator = () => {
  const [activity, setActivity] = useState<Activity>({activity: ""});

  const getActivity = async (details?: Details) => {
    let participants;
    switch(details) {
      case "group":
        participants = `?participants=${Math.floor(Math.random() * 4) + 2}`;
        break;
      case "solo":
        participants = "?participants=1";
        break;
      default:
        participants = ""
    }
    try {
      const res = await fetch(`https://www.boredapi.com/api/activity${participants}`);
      setActivity(await res.json());
    } catch (err) {
      console.log(err)
    }
  }

  console.log(activity)
  return (
    <div className='border-black mt-8 p-2 gap-4 flex flex-col items-center border-2 border-green-500 rounded-md'>
      <div>{activity.activity}</div>      
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" checked={activity.activity === "" ? true : undefined}/> 
        <div className="collapse-title text-xl font-medium">
          Basic Options
        </div>
        <div className="collapse-content"> 
        <div className='btn-group' >
        <button onClick={() => getActivity()} className='btn btn-outline btn-primary'>Random</button>
        <button onClick={() => getActivity("group")} className='btn btn-outline btn-primary'>Group</button>
        <button onClick={() => getActivity("solo")} className='btn btn-outline btn-primary'>Solo</button>
      </div>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" /> 
        <div className="collapse-title text-xl font-medium">
          Feeling Picky
        </div>
        <div className="collapse-content"> 
        <p>👷‍♀️ Coming soon 🚧</p>
        </div>
      </div>
    </div>
  )
}

export default ActivityGenerator