import React from "react";
import Header from "./Header";

import popupIcon from "../images/popup/__error.svg";

function Login () {

  const headerLinkTo = "/sign-up";
  const headerLinkText = "Регистрация";

  return (
    <>
      <Header link={headerLinkTo} text={headerLinkText} />
      <div className="sign">
        <h2 className="sign__title">Вход</h2>
        <form className="sign__form">
          <div className="sign__fields">
            <input
              className="sign__input"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              minLength="2"
              maxLength="80"
              type="email"
              required
            />
            <input
              className="sign__input"
              id="pass"
              name="pass"
              placeholder="Пароль"
              autoComplete="off"
              minLength="2"
              maxLength="80"
              type="text"
              required
            />
          </div>
          <button
            className="sign__submit-button"
            aria-label="Register"
            type="submit"
          >
            Войти
          </button>
        </form>
      </div>

      <div className="popup" id="success">
        <div className="popup__container">
          <button
            className="popup__close-button"
            aria-label="Закрыть"
            type="button"
          />
          <div className="popup__wrap">
            <img className="popup__image" src={popupIcon} alt="success" />
            <h2 className="popup__title">Что-то пошло не так! Попробуйте ещё раз.</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;