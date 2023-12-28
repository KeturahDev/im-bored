'use client'
import React, { useState } from 'react'
import { Activity, Details } from '../utils/models';


const ActivityGenerator = () => {
  const [activity, setActivity] = useState<Activity | undefined>();
  
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

  const saveActivity = async () => {
    if (!activity) return;

    const queryString = `?activity=${activity.activity}&type=${activity.type}&participants=${activity.participants}&price=${activity.price}&accessibility=${activity.accessibility}&duration=${activity.duration}`
    
    const response = await fetch(`/api/postActivity${queryString}`, {method: "POST", body: null}) 
    const data = await response.json()
    console.log("data", data);
  }

  return (
    <div className={"w-3/5 border-black mt-8 p-8 gap-4 flex flex-col items-center border-2 border-green-500 rounded-md"}>
      {
        activity ? 
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title h-14 min-h-full">{activity.activity}</h2>
            <div className='grid grid-cols-2 gap-2 h-14 min-h-full'>
              <div className=''>type: {activity.type}</div>
              <div className=''>price: {activity.price}</div>
              {activity.duration ? <div className=''>duration: {activity.duration}</div> : null}
              {activity.accessibility ? <div className=''>accessibility: {activity.accessibility}</div> : null}
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={saveActivity}>Save</button>
            </div>
          </div>
        </div>
        : <p>well, do something then</p>
      }
      <div className="mt-8 gap-8 flex justify-center"> 
        <button onClick={() => getActivity()} className='btn btn-outline btn-primary'>Random</button>
        <button onClick={() => getActivity("group")} className='btn btn-outline btn-primary'>Social</button>
        <button onClick={() => getActivity("solo")} className='btn btn-outline btn-primary'>Reclusive</button>
      </div>            
      <div className="collapse bg-base-200">
      <input type="checkbox" /> 
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