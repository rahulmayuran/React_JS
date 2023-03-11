import React, { useState } from 'react';
import './Header.css';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

import { Link } from 'react-router-dom'

function Header() {

  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className='header'>

      <div className='header__left'>

        <MenuIcon />
        {/* Click the logo icon to go back to home page */}
        <Link to={`/`}>
          <img className='header__logo'
            src="https://upload.wikimedia.org/wikipedia/commons/3/31/TechTube.jpg"
            alt="" />
        </Link>

      </div>

      <div className='header__search'>
        <input
          type="text"
          placeholder='Search'
          value={inputSearch}
          onChange={set => setInputSearch(set.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header__search__inputIcon' />
        </Link>
      </div>

      <div className='header__icons'>
        <VideocamIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsActiveIcon className='header__icon' />
        <AccountCircleSharpIcon className='header__icon' />
      </div>

    </div>
  )
}

export default Header