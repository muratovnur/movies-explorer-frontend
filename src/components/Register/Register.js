import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useFormWithValidation } from '../../customHooks/useFormWithValidation'
import Logo from '../Logo/Logo'

import './Register.css'

const Register = (props) => {
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    
    props.onRegister(values['email'], values['password'], values['name'])
      .then((err) => {
        if (err) {
          if (err.status === 409) {
            setSubmitErrorMessage('Пользователь с таким email уже существует.');
          }
          else {
            setSubmitErrorMessage('При регистрации пользователя произошла ошибка.');
          }
        }
      })
    resetForm();
  }

  return (
    <>
      {props.loggedIn ? <Navigate to='/' /> : 
        <div className="register">
          <form className="form">
            <Logo />
            <h1 className="form__title">Добро пожаловать!</h1>
            <label className="form__input-label">
              Имя
              <input 
                type="text" 
                name="name" 
                className="form__input"
                placeholder="Имя"
                required={true}
                onChange={handleChange}
                pattern="^[A-Za-zА-Яа-я\s-]{2,30}$"
              />
              <span className="form__input-error">{errors['name']}</span>
            </label>
            <label className="form__input-label">
              Email
              <input 
                type="email" 
                name="email" 
                className="form__input" 
                placeholder="Email"
                required={true}
                onChange={handleChange}
                pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
              />
              <span className="form__input-error">{errors['email']}</span>
            </label>
            <label className="form__input-label">
              Пароль
              <input 
                type="password" 
                name="password" 
                className="form__input form__input_error"
                placeholder="Пароль"
                required={true}
                onChange={handleChange}
              />
              <span className="form__input-error">{errors['password']}</span>
            </label>
            <span className="form__submit-error">{submitErrorMessage}</span>
            <button disabled={!isValid} className="form__submit-btn button-hover-transition" onClick={handleSubmit}>Зарегистрироваться</button>
            <span className="form__option-text">Уже зарегистрированы? <Link to="/signin" className="form__option-link hover-transition">Войти</Link></span>
          </form>
        </div>
      }
    </>
  )
}

export default Register