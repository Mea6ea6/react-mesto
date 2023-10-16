import { NavLink } from 'react-router-dom';
import { useState } from "react";

import Header from "./Header";

function Login (props) {

  const {onLogin} = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // onLogin(email, password)
  }

  return (
    <>
      <Header>
        <NavLink to="/signup" className="header__logout">Регистрация</NavLink>
      </Header>
      <div className="sign">
        <h2 className="sign__title">Вход</h2>
        <form className="sign__form" onSubmit={handleSubmit}>
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
              value={email || ""}
              onChange={handleEmailChange}
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
              value={password || ""}
              onChange={handlePasswordChange}
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
    </>
  )
}

export default Login;