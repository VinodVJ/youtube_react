import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-44 mx-4 px-4 shadow-lg text-lg'>
        <div className=' m-2 border-b'>
            <ul className='p-2'>
                <li> Home </li>
                <li> Shorts </li>
                <li> Subscriptions </li>
            </ul>
        </div>
        <div className=' m-2 border-b'>
            <h1 className='font-bold'> Yours </h1>
            <ul className='p-2'>
                <li>History</li>
                <li>Playlist</li>
                <li>Your Videos</li>
                <li>Liked Videos</li>
                <li>Watch Later</li>
            </ul>
        </div>
        <div className=' m-2 border-b'>
            <h1 className='font-bold'> Subscription </h1>
            <ul className='p-2'>
                <li>channel</li>
                <li>News channel</li>
                <li>Sports Videos</li>
                <li>Liked Videos</li>
                <li>Watch Later</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar