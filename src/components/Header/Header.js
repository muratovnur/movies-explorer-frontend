import React, { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header className="header">
      <Logo />
      {loggedIn ? <Navigation /> : 
        (
          <div className='header__auth'>
            <Link to="/signup"><button className='header__register-btn button-hover-transition'>Регистрация</button></Link>
            <Link to="/signin"><button className='header__login-btn button-hover-transition'>Войти</button></Link>
          </div>
        )
      }
    </header>
  )
}

export default Header