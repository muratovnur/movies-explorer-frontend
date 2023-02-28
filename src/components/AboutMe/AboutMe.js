import React from 'react'
import { Link } from 'react-router-dom'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <section className="about-me" id="student">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__main">
        <div className="about-me__info-container">
          <h3 className="about-me__main-title">Виталий</h3>
          <p className="about-me__main-subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__main-info">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <Link to="https://github.com/muratovnur" className="about-me__main-github hover-transition" target='_blank'>Github</Link>
        </div>
        <div className="about-me__image-container">
          <img className="about-me__main-image" src="https://i.pinimg.com/originals/f0/83/93/f08393177f827e3a8d3554147fafc93c.jpg" alt="" />
        </div>
      </div>

    </section>
  )
}

export default AboutMe