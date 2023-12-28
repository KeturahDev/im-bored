import React from 'react'
import { Activity } from '../utils/models'

type ActivityListProps = {
  activityList: Activity[]
};

const ActivityList = ({ activityList }: ActivityListProps) => {
  console.log(activityList)
  return (
    <>
      <h2>Saved Activities</h2>
      <ul>
        {activityList.map((act, i) => {
          return <li key={i}>{act.activity}</li>
        })}
      </ul>
    </>
  )
}

export default ActivityList