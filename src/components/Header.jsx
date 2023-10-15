import { NavLink } from 'react-router-dom';

import headerLogo from "../images/header/__logo.svg";
import BurgerMenu from "./BurgerMenu";

function Header(props) {

  return (
    <>
      <BurgerMenu />
      <header className="header">
        <img className="header__logo" src={headerLogo} alt="Место" />
        <nav className="header__auth">
          {props.children}
          <NavLink to={props.link} className={`header__logout ${props.modifier}`}>{props.text}</NavLink>
        </nav>
        <button
          className={`header__burger  ${false ? "header__burger_open" : ""}`}
          aria-label="Открыть бургер"
          type="button"
        >
          <span className="header__burger-layer"></span>
          <span className="header__burger-layer"></span>
          <span className="header__burger-layer"></span>
        </button>
      </header>
    </>
  );
  
}

export default Header;
