import React from 'react'
import './SideBar.css';
import SideBarRow from './SideBarRow/SideBarRow';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import WhatshotIcon from '@mui/icons-material/WhatshotOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function SideBar() {
  return (
    <div className='sidebar'>
      <SideBarRow selected Icon={HomeSharpIcon} Title="Home"/>
      <SideBarRow Icon={WhatshotIcon} Title="Trending"/>
      <SideBarRow Icon={SubscriptionsIcon} Title="Subscriptions"/>
      <hr/>
      <SideBarRow Icon={VideoLibraryIcon} Title="Library"/>
      <SideBarRow Icon={HistoryIcon} Title="History"/>
      <SideBarRow Icon={OndemandVideoIcon} Title="Your Videos"/>
      <SideBarRow Icon={WatchLaterIcon} Title="Watch Later"/>
      <SideBarRow Icon={ThumbUpAltOutlinedIcon} Title="Liked Videos"/>
      <SideBarRow Icon={ExpandMoreOutlinedIcon} Title="Show More"/>
      <hr/>
    </div>
  )
}

export default SideBar