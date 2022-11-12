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
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt="" />
      </div>

      <div className='header__search'>
        <input type="text" placeholder='Search' />
        <SearchIcon className='header__search__inputIcon' />
        {/* <MicIcon className='header_search_mic' /> */}
      </div>

      <div className='header__icons'>
        <VideocamIcon className='header__icon'/>
        <AppsIcon className='header__icon'/>
        <NotificationsActiveIcon className='header__icon'/>
        <AccountCircleSharpIcon className='header__icon'/>
      </div>

    </div>
  )
}

export default Header