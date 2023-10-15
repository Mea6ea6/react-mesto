import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card.jsx";

function Main(props) {
  
  const {cards, onCardClick, onCardLike, onCardDelete, onEditAvatar, onEditProfile, onAddPlace} = props
  const currentUser = useContext(CurrentUserContext);
  
  const headerLinkTo = "/sign-in";
  const headerLinkText = "Выйти";
  const headerLinkModifier = "header__logout_gray";

  return (
    <>
      <Header link={headerLinkTo} text={headerLinkText} modifier={headerLinkModifier}>
        <p className="header__info">email@mail.com</p>
      </Header>
      <main className="content">
        <section className="profile">
          <div
            className="profile__overlay"
            aria-label="Редактировать"
            onClick={onEditAvatar}
          >
            <img
              className="profile__avatar"
              src={currentUser?.avatar}
              alt="аватар"
            />
          </div>
          <div className="profile__info">
            <div className="profile__name-wrapp">
              <h1 className="profile__name">{currentUser?.name}</h1>
              <button
                className="profile__edit-button"
                aria-label="Редактировать"
                type="button"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__description">{currentUser?.about}</p>
          </div>
          <button
            className="profile__add-button"
            aria-label="Новое место"
            type="button"
            onClick={onAddPlace}
          />
        </section>
  
        <section className="elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;
