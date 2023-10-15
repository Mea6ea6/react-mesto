function BurgerMenu() {

  return (
    <div className={`burger-menu  ${false ? "burger-menu_open" : ""}`}>
        <h2 className="burger-menu__email">email@email.com</h2>
        <button className="burger-menu__logout" aria-label="Выйти" type="button">Выйти</button>
    </div>
  );
  
}

export default BurgerMenu;
