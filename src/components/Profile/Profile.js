import React, { useContext, useState } from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { useFormWithValidation } from '../../customHooks/useFormWithValidation'
import mainApi from '../../utils/MainApi'

import './Profile.css'

const Profile = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const [editMode, setEditMode] = useState(false);
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({"name": currentUser.name, "email": currentUser.email});

  function handleEditProfileClick() {
    setEditMode(true);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    
    mainApi.updateUserProfileInfo(values["name"], values["email"])
      .then((res) => {
        setEditMode(false);
        props.handleCurrentUserChange(res);
      })
      .catch((err) => {
        console.log(err);

        if (err.status === 409) {
          setSubmitErrorMessage('Пользователь с таким email уже существует.');
        }
        else {
          setSubmitErrorMessage('При обновлении профиля произошла ошибка.');
        }
      })
  }

  return (
    <div className="profile">
      <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
      {!editMode ? (
        <>
          <ul className="profile__fields-list">
            <li className="profile__field"><span className="profile__field-name">Имя</span><span className="profile__field-value">{currentUser.name}</span></li>
            <li className="profile__field"><span className="profile__field-name">E-mail</span><span className="profile__field-value">{currentUser.email}</span></li>
          </ul>
          <button className="profile__edit hover-transition" onClick={handleEditProfileClick}>Редактировать</button>
          <button className="profile__logout hover-transition" onClick={props.onSignOut}>Выйти из аккаунта</button>
        </>) : (
        <>
          <form className='profile-form'>
            <label className="profile-form__input-label">
              Имя
              <input 
                type="text" 
                name="name" 
                className="profile-form__input"
                placeholder="Имя"
                required={true}
                onChange={handleChange}
                pattern="^[A-Za-zА-Яа-я\s-]+$"
                value={values["name"]}
              />
            </label>
            <span className="profile-form__input-error">{errors['name']}</span>
            <label className="profile-form__input-label">
              Email
              <input 
                type="email" 
                name="email" 
                className="profile-form__input" 
                placeholder="Email"
                required={true}
                onChange={handleChange}
                value={values["email"]}
              />
            </label>
            <span className="profile-form__input-error">{errors['email']}</span>
            <span className="profile-form__submit-error">{submitErrorMessage}</span>
            <button disabled={!isValid} className="profile-form__submit-btn profile-form__submit-btn_login button-hover-transition" onClick={handleSubmit}>Сохранить</button>
          </form>
        </>)
      }
    </div>
  )
}

export default Profile