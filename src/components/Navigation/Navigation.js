import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

const Navigation = (props) => {
  let location = useLocation();
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);

  function handleButtonClick(){
    setIsNavMobileOpen(true);
  }

  function handleCloseClick(){
    setIsNavMobileOpen(false);
  }

  return (
    <>
      <nav className='nav'>
        <div className="nav__links-wrapper">
          <Link to="/movies" className={`nav__item hover-transition ${location.pathname === '/movies' && 'nav__item_active'}`}>Фильмы</Link>
          <Link to="/saved-movies" className={`nav__item hover-transition ${location.pathname === '/saved-movies' && 'nav__item_active'}`}>Сохранённые фильмы</Link>
        </div>
        <Link to="/profile" className="nav__item nav__account hover-transition">
          Аккаунт
          <div className="nav__account-icon"></div>
        </Link>
      </nav>

      <button className="nav__burger-menu-icon hover-transition" onClick={handleButtonClick}></button>
      
      <nav className={`nav-mobile ${isNavMobileOpen && "nav-mobile_active"}`}>
        <div className={`nav__container ${isNavMobileOpen && "nav__container_active"}`}>
          <div className="nav__close-icon hover-transition" onClick={handleCloseClick}></div>
          <div className="nav__links-wrapper">
            <Link to="/" className={`nav__item hover-transition ${location.pathname === '/' && 'nav-mobile__item_active'}`}>Главная</Link>
            <Link to="/movies" className={`nav__item hover-transition ${location.pathname === '/movies' && 'nav-mobile__item_active'}`}>Фильмы</Link>
            <Link to="/saved-movies" className={`nav__item hover-transition ${location.pathname === '/saved-movies' && 'nav-mobile__item_active'}`}>Сохранённые фильмы</Link>
          </div>
          <Link to="/profile" className="nav__item nav__account hover-transition">
            Аккаунт
            <div className="nav__account-icon"></div>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navigation