import { useContext } from "react";
import CurrentUserContext from "./CurrentUserContext";
import Card from "./Card.jsx";

function Main(props) {
  
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__overlay"
          aria-label="Редактировать"
          type="button"
          onClick={props.onEditAvatar}
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
              onClick={props.onEditProfile}
            />
          </div>
          <p className="profile__description">{currentUser?.about}</p>
        </div>
        <button
          className="profile__add-button"
          aria-label="Новое место"
          type="button"
          onClick={props.onAddPlace}
        />
      </section>

      <section className="elements">
        {props.cards.map((card) => (
          <Card
            key={card._id}
            src={card.link}
            title={card.name}
            like={card.likes.length}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
            card={card}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
