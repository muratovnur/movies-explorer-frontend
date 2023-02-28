import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <ul className="profile__fields-list">
        <li className="profile__field"><span className="profile__field-name">Имя</span><span className="profile__field-value">Виталий</span></li>
        <li className="profile__field"><span className="profile__field-name">E-mail</span><span className="profile__field-value">pochta@yandex.ru</span></li>
      </ul>
      <button className="profile__edit hover-transition">Редактировать</button>
      <button className="profile__logout hover-transition">Выйти из аккаунта</button>
    </div>
  )
}

export default Profile