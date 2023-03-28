import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <Link className="not-found__back hover-transition" onClick={() => navigate(-1)}>Назад</Link>
    </main>
  )
}

export default NotFound