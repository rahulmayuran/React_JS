import React from 'react'
import './SearchPage.css'
import VideoRow from './VideoRow/VideoRow'

import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr/>

      <VideoRow   
        views = "62k views" 
        subs = "58.8k"
        desc = "Spotify: https://spoti.fi/31jrWZ3"
        timestamp= "5 months ago" 
        channel= "Deep Koliis"
        title = "Deep Koliis - Stand (OAC)"
        image= "https://i.ytimg.com/vi/6YV7kKhAQz0/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLBDdUKDzwdZVDnNhq9_5I-lC3WXrg" 
      />
       <VideoRow   
        views = "13k views" 
        subs = "58.8k"
        desc = "Spotify: https://spoti.fi/11jq343"
        timestamp= "7 months ago" 
        channel= "Deep Koliis"
        title = "Deep Koliis - project 41 (OAC)"
        image = "https://i.ytimg.com/vi/P6RlrA5AoDc/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLAyjVbfEWsQGc-2Jv9GpwgCOAfGHA"
      />
      <VideoRow   
        views = "13k views" 
        subs = "58.8k"
        desc = "Spotify: https://spoti.fi/11jq343"
        timestamp= "7 months ago" 
        channel= "Deep Koliis"
        title = "Deep Koliis - You're My Home(OAC)"
        image = "https://i.ytimg.com/vi/NPZ8lnh8X_Q/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLC0CfabMsxCz2OiNd5Lojjm_xPgOw"
      />
      <VideoRow   
        views = "2k views" 
        subs = "58.8k"
        desc = "Spotify: https://spoti.fi/1T32533"
        timestamp= "2 weeks ago" 
        channel= "Deep Koliis"
        title = "Deep Koliis - Universe (OAC)"
        image = "https://i.ytimg.com/vi/9qgtu0poYtQ/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLCG1rqxrcOqICZhJTpF_P3jwPpL7w"
      />

    </div>
  )
}

export default SearchPage