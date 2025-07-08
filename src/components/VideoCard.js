import React from 'react'

const VideoCard = (props) => {

    console.log('props', props);
  return (
    <div className='p-2 m-2 w-80 shadow-lg rounded-lg'>
        <div>
            <img className='m-2 rounded-lg' alt={props?.data?.snippet?.title}
                src={props?.data?.snippet?.thumbnails?.high?.url}
            />
        </div>
        <div className='p-2 m-2 font-bold'>
            <h3>{props?.data?.snippet?.title}</h3>
        </div>
        <div>
            <div className='px-2 mx-2 '>{props?.data?.snippet?.channelTitle}</div>
            <span className='px-2 mx-2'>{props?.data?.statistics?.viewCount} Views | </span>
            <span>{props?.data?.statistics?.likeCount} Likes </span>

        </div>
    </div>
  )
}

export default VideoCard