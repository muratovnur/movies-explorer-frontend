import { useContext } from 'react'
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'
import './Header.css'
import { Link } from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  
  return (
    <header className="header">
      <Logo />
      {currentUser.name ? <Navigation /> : 
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