import React from 'react'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <a href="." className="not-found__back hover-transition">Назад</a>
    </div>
  )
}

export default NotFound