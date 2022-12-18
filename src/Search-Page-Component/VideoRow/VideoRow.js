import React from 'react';
import './VideoRow.css';

function VideoRow({ views, subs, desc, timestamp, channel, title, image, embedId}) 
{
    return (
        <div className='videoRow'>
            <img
                src={image}
                alt=""
                onClick={() => window.open(`https://www.youtube.com/watch?v=${embedId}`, "_blank")}
            />
            <div className='videoRow__text'>
                <h3>{title}</h3>
                <p className='videoRow__headline'>
                    {channel} • {subs} Subscribers • {views} views • {timestamp}
                </p>
                <p className='videoRow__desc'>{desc}</p>
            </div>
        </div>
    )
}

export default VideoRow