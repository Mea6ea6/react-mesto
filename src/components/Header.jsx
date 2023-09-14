import headerLogo from "../images/header/__logo.svg";

function Header() {

  return (
    <>
      <header className="header">
          <img className="header__logo" src={headerLogo} alt="Место" />
      </header>
    </>
  )
}

export default Header;
