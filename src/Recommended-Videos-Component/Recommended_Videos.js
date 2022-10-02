import React from 'react'
import './Recommended_Videos.css';
import VideoCard from './VideoCard';

function Recommended_Videos() {
  return (
    <div className='recommendedVideos'>
      <div className='recommendedVideos__videos'>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  )
}

export default Recommended_Videos