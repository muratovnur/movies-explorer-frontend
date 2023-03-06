import React from 'react'
import './NavTab.css'
const NavTab = () => {
  return (
    <div>
      <nav className="nav-tab">
        <a href='#about'><button className='nav-tab__btn hover-transition'>О проекте</button></a>
        <a href='#techs'><button className='nav-tab__btn hover-transition'>Технологии</button></a>
        <a href='#student'><button className='nav-tab__btn hover-transition'>Студент</button></a>
      </nav>
    </div>
  )
}

export default NavTab