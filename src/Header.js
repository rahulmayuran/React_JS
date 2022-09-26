//es7 snippets extension -> rfce
import React from 'react';
import './Header.css';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

function Header() {
  return (
    <div className='header'>
        
        <div className='header__left'>
          <MenuIcon />
          <img className='header__logo' 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbQI1voAFT-ldkrnOeKW8MXfSq3KVhqjAkw&usqp=CAU" 
          alt="" />
        </div>

        <div className='header__search'>
          <input type="text" />
          <SearchIcon/>
        </div>

        <div className='header__icons'>
          <VideocamIcon/>
          <AppsIcon/>
          <NotificationsActiveIcon/>
          <AccountCircleSharpIcon/>
        </div>

    </div>
  )
}

export default Header