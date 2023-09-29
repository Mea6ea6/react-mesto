import { useContext } from "react";
import CurrentUserContext from "./CurrentUserContext";

function Card(props) {
  
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner?._id === currentUser?._id;
  const isLiked = props.card?.likes.some((i) => i?._id === currentUser?._id);

  function handleClick() {
    const card = { src: props.src, title: props.title };
    props.onCardClick(card);
  }
  function handleLikeClick() {
    props.onCardLike(props.card);
  }
  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <article className="element">
      {isOwn && <button className="element__delete" aria-label="Удалить" onClick={handleDeleteClick} />}
      <img
        className="element__image"
        src={props.src}
        alt={props.title}
        onClick={handleClick}
      />
      <div className="element__additionally">
        <h2 className="element__denomination">{props.title}</h2>
        <div className="element__evaluations">
          <button
            className={`element__like ${
              isLiked ? "element__like_active" : ""
            }`}
            aria-label="Лайк"
            type="button"
            onClick={handleLikeClick}
          />
          <p className="element__counter">{props.like}</p>
        </div>
      </div>
    </article>
  );
  
}

export default Card;
