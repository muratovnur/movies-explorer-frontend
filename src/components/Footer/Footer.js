import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <ul className="footer__list">
        <li className="footer__list-item">&copy; 2023</li>
        <li className="footer__list-item"><Link to="https://practicum.yandex.ru" className="footer__list-link" target='_blank'>Яндекс.Практикум</Link></li>
        <li className="footer__list-item"><Link to="https://github.com/muratovnur" className="footer__list-link" target='_blank'>Github</Link></li>
      </ul>
    </footer>
  )
}

export default Footer