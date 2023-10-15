import React from "react";
import Header from "./Header";

import popupIcon from "../images/popup/__success.svg";

function Register() {

  const headerLinkTo = "/sign-in";
  const headerLinkText = "Вход";

  return (
    <>
      <Header link={headerLinkTo} text={headerLinkText} />
      <div className="sign">
        <h2 className="sign__title">Регистрация</h2>
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
              type="password"
              required
            />
          </div>
          <button
            className="sign__submit-button"
            aria-label="Register"
            type="submit"
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="sign__additionally">
          Уже зарегистрированы?
          <a href="/" className="sign__link">Войти</a>
        </p>
      </div>

      
      <div className="popup" id="error">
        <div className="popup__container">
          <button
            className="popup__close-button"
            aria-label="Закрыть"
            type="button"
          />
          <div className="popup__wrap">
            <img className="popup__image" src={popupIcon} alt="error" />
            <h2 className="popup__title">Вы успешно зарегистрировались!</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
