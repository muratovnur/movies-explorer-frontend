import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Login.css'

const Login = () => {
  return (
    <div className="login">
      <form className="form">
        <Logo />
        <h1 className="form__title">Рады видеть!</h1>
        <label className="form__input-label">
          Email
          <input type="email" name="email" className="form__input" />
          <span className="form__input-error"></span>
        </label>
        <label className="form__input-label">
          Пароль
          <input type="password" name="password" className="form__input" />
          <span className="form__input-error-message"></span>
        </label>
        <button className="form__submit-btn button-hover-transition">Войти</button>
        <span className="form__option-text">Ещё не зарегистрированы? <Link to="/signup" className="form__option-link hover-transition">Регистрация</Link></span>
      </form>
    </div>
  )
}

export default Login