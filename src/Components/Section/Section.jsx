import React from 'react'
import Cover from './Coverimg/Cover'
import Profile from './ProfilePicture/Profile'
import ProfileName from './ProfilePicture/ProfileName'
import TimelineIcon from './TimelineIcon/TimelineIcon'

export default function Section() {
  return (
    <div className='Section'>
        <div className="container-fluid">
      <Cover />
      <Profile />
      <ProfileName />
    <TimelineIcon />
    </div>
    </div>
  )
}
