import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = (props) => {
  // временное решение до след этапа
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
          <Link to="/movies" className="nav__item hover-transition nav__item_active">Фильмы</Link>
          <Link to="/saved-movies" className="nav__item hover-transition">Сохранённые фильмы</Link>
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
            <Link to="/" className="nav__item hover-transition">Главная</Link>
            <Link to="/movies" className="nav__item hover-transition nav-mobile__item_active">Фильмы</Link>
            <Link to="/saved-movies" className="nav__item hover-transition">Сохранённые фильмы</Link>
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