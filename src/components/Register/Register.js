import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Register.css'

const Register = () => {
  return (
    <div className="register">
      <form className="form">
        <Logo />
        <h1 className="form__title">Добро пожаловать!</h1>
        <label className="form__input-label">
          Имя
          <input type="text" name="name" className="form__input" />
          <span className="form__input-error"></span>
        </label>
        <label className="form__input-label">
          Email
          <input type="email" name="email" className="form__input" />
          <span className="form__input-error"></span>
        </label>
        <label className="form__input-label">
          Пароль
          <input type="password" name="password" className="form__input form__input_error" />
          <span className="form__input-error-message">Что-то пошло не так...</span>
        </label>
        <button className="form__submit-btn button-hover-transition">Зарегистрироваться</button>
        <span className="form__option-text">Уже зарегистрированы? <Link to="/signin" className="form__option-link hover-transition">Войти</Link></span>
      </form>
    </div>
  )
}

export default Register