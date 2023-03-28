import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useFormWithValidation } from '../../customHooks/useFormWithValidation'
import Logo from '../Logo/Logo'

import './Login.css'

const Login = (props) => {
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    props.onLogin(values['email'], values['password'])
    .then((err) => {
      if (err) {
        if (err.status === 401) {
          setSubmitErrorMessage('Вы ввели неправильный логин или пароль.');
        }
        // else if (err.status === 401) {
        //   setSubmitErrorMessage('При авторизации произошла ошибка. Токен не передан или передан не в том формате.');
        // }
        else {
          setSubmitErrorMessage('При авторизации произошла ошибка.');
        }
      }
    })
    resetForm();
  }

  return (
    <>
      {props.loggedIn ? <Navigate to='/' /> : 
        <div className="login">
          <form className="form">
            <Logo />
            <h1 className="form__title">Рады видеть!</h1>
            <label className="form__input-label">
              Email
              <input 
                type="email" 
                name="email" 
                className="form__input" 
                placeholder="Email" 
                required={true}
                onChange={handleChange}
              />
              <span className="form__input-error">{errors['email']}</span>
            </label>
            <label className="form__input-label">
              Пароль
              <input 
                type="password" 
                name="password" 
                className="form__input" 
                placeholder="Пароль" 
                required={true}
                onChange={handleChange}
              />
              <span className="form__input-error">{errors['password']}</span>
            </label>
            <span className="form__submit-error form__input-error_login">{submitErrorMessage}</span>
            <button disabled={!isValid} className="form__submit-btn button-hover-transition" onClick={handleSubmit}>Войти</button>
            <span className="form__option-text">Ещё не зарегистрированы? <Link to="/signup" className="form__option-link hover-transition">Регистрация</Link></span>
          </form>
        </div>
      }
    </>
  )
}

export default Login