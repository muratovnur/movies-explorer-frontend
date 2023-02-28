import React from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item hover-transition"><Link to="https://github.com/muratovnur/how-to-learn" className="portfolio__list-link" target='_blank'>Статичный сайт<span>&#8599;</span></Link></li>
        <li className="portfolio__list-item hover-transition"><Link to="https://muratovnur.github.io/russian-travel/" className="portfolio__list-link" target='_blank'>Адаптивный сайт<span>&#8599;</span></Link></li>
        <li className="portfolio__list-item hover-transition"><Link to="https://muratovnur.github.io/react-mesto-auth" className="portfolio__list-link" target='_blank'>Одностраничное приложение<span>&#8599;</span></Link></li>
      </ul>
    </section>
  )
}

export default Portfolio