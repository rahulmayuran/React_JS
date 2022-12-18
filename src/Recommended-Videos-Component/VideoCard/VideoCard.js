import React from 'react'
import './VideoCard.css';
import Avatar from "@mui/material/Avatar"

function VideoCard({ image, title, channel, views, timestamp, channelImage, embedId }) {


  return (
  <div className='videoCard'>
    <img className='videoCard__thumbnail'
      src={image}
      alt="" 
      onClick={()=> window.open(`https://www.youtube.com/watch?v=${embedId}`, "_blank")}
    />
    <div id='videoCard__info'>
      <Avatar
        className="videoCard__avatar"
        alt={channel}
        src={channelImage}
      />
      <div className='videoCard__text'>
        <h5>{title}</h5>
        <p>{channel}</p>
        <p>
          {views} • {timestamp}
        </p>
      </div>
    </div>
  </div>
  )
}

export default VideoCard