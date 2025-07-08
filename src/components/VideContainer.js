import React, { useEffect, useState } from 'react'
import { VIDEO_LIST_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideContainer = () => {

  const [videoItems, setVideoItems] = useState([]);

    useEffect(() => {
        console.log('making API call');
        fetchVideosData();


    }, []);

    const fetchVideosData = async () => {
        const data = await fetch(VIDEO_LIST_API);
        const dataJson = await data.json();
        console.log('data recieved', dataJson);
        setVideoItems(dataJson.items);
    }

  return (
    <div className='flex flex-wrap'>
      {videoItems?.map((item) => (<VideoCard key={item.id} data={item}/>)) }
    </div>
  )
}

export default VideContainer