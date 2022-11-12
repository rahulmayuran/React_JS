import React from 'react'
import './Recommended_Videos.css';
import VideoCard from './VideoCard/VideoCard';

function Recommended_Videos() {
  return (
    <div className='recommendedVideos'>
      <div className='recommendedVideos__videos'>
        <VideoCard 
          title = "Khanvict - Closer"
          views = "3.8M views"
          timestamp= "1 year ago"
          channelImage= "https://yt3.ggpht.com/BF-_x67tLWk6uvsJLnhrtRMps0LZeCuPLVKCYXwdqY8dqWby9liaKd3lcQozs3JA2jqRXIkJzQ=s88-c-k-c0x00ffffff-no-rj"
          channel= "Khanvict"
          image= "https://i.ytimg.com/vi/DrKLYvLPidw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5wF1Ew3jg8sQqtW2TZ71tBTwzYQ"
        />
        <VideoCard
          title = "Nanotechnology: A New Frontier"
          views = "1M views"
          timestamp= "2 years ago"
          channelImage= "https://yt3.ggpht.com/ytc/AMLnZu_-XxX1PRjLfpIQ0rsxy-x53hpfy-JTOH81iG1ufw=s88-c-k-c0x00ffffff-no-rj"
          channel= "Aperture"
          image = "https://i.ytimg.com/an_webp/OLa8DQkKlyU/mqdefault_6s.webp?du=3000&sqp=CM-_vpsG&rs=AOn4CLDODwRR_CafvglkoIwewE2v0aTv2Q"
        />
        <VideoCard 
          title = "Deep Koliis - Stand (OAC)"
          views = "62k views"
          timestamp= "5 months ago"
          channelImage= "https://yt3.ggpht.com/SgOkUbgJdeZip2YlZ28S6MUOG8QKoUGNzEsF0WafmXlcDNLpftuSr78t_PU6oNyzpENHnBMt=s88-c-k-c0x00ffffff-no-nd-rj"
          channel= "Deep Koliis"
          image= "https://i.ytimg.com/vi/6YV7kKhAQz0/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLBDdUKDzwdZVDnNhq9_5I-lC3WXrg"
        />
        <VideoCard 
          title = "Deep Koliis - project 41 (OAC)"
          views = "13k views"
          timestamp= "7 months ago"
          channelImage= "https://yt3.ggpht.com/SgOkUbgJdeZip2YlZ28S6MUOG8QKoUGNzEsF0WafmXlcDNLpftuSr78t_PU6oNyzpENHnBMt=s88-c-k-c0x00ffffff-no-nd-rj"
          channel= "Deep Koliis"
          image = "https://i.ytimg.com/vi/P6RlrA5AoDc/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLAyjVbfEWsQGc-2Jv9GpwgCOAfGHA"
        />
        <VideoCard 
          title = "Deep Koliis - You're My Home(OAC)"
          views = "11k views"
          timestamp= "9 months ago"
          channelImage= "https://yt3.ggpht.com/SgOkUbgJdeZip2YlZ28S6MUOG8QKoUGNzEsF0WafmXlcDNLpftuSr78t_PU6oNyzpENHnBMt=s88-c-k-c0x00ffffff-no-nd-rj"
          channel= "Deep Koliis"
          image = "https://i.ytimg.com/vi/NPZ8lnh8X_Q/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLC0CfabMsxCz2OiNd5Lojjm_xPgOw"
        />
        <VideoCard
          title = "17 Coolest Gadgets You Can Actually Buy"
          views = "1.7M views"
          timestamp= "3 months ago"
          channelImage= "https://yt3.ggpht.com/ytc/AMLnZu8DYCKjfSoS0ZGdCqNy80XKp45drew_5ALGJabzyg=s68-c-k-c0x00ffffff-no-rj"
          channel= "YouFact Tech"
          image = "https://i.ytimg.com/an_webp/qiMnSaZWf3M/mqdefault_6s.webp?du=3000&sqp=COnavpsG&rs=AOn4CLA6oeQIvkwR_7Wvpfxpxu5n8scfSA"
        />
        <VideoCard 
          title = "Deep Koliis - Universe (OAC)"
          views = "2k views"
          timestamp= "2 weeks ago"
          channelImage= "https://yt3.ggpht.com/SgOkUbgJdeZip2YlZ28S6MUOG8QKoUGNzEsF0WafmXlcDNLpftuSr78t_PU6oNyzpENHnBMt=s88-c-k-c0x00ffffff-no-nd-rj"
          channel= "Deep Koliis"
          image= "https://i.ytimg.com/vi/9qgtu0poYtQ/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLCG1rqxrcOqICZhJTpF_P3jwPpL7w"
        />
      </div>
    </div>
  )
}

export default Recommended_Videos