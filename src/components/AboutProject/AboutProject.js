import React from 'react'
import './AboutProject.css'

const AboutProject = () => {
  return (
    <section className="about-project" id="about">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__main">
        <div className="about-project__info">
          <div className="about-project__info-block">
            <h3 className="about-project__info-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__info-block">
            <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__timeline">
          <div className="about-project__timeline-block">
            <p className="about-project__timeline-title about-project__timeline-title_dark">1 неделя</p>
            <p className="about-project__timeline-type">Back-end</p>
          </div>
          <div className="about-project__timeline-block">
            <p className="about-project__timeline-title">4 недели</p>
            <p className="about-project__timeline-type">Front-end</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default AboutProject