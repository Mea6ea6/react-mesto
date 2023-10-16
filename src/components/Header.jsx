import headerLogo from "../images/header/__logo.svg";
import BurgerMenu from "./BurgerMenu";

function Header(props) {

  const {isOpen, children} = props;

  return (
    <>
      <BurgerMenu isOpen={isOpen} />
      <header className="header">
        <img className="header__logo" src={headerLogo} alt="Место" />
        {children}
      </header>
    </>
  );
  
}

export default Header;
