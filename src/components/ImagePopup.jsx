function ImagePopup(props) {

  return (
    <div
      className={`popup popup_card ${props.card ? "popup_opened" : ""}`}
      id="popup-card"
    >
      <figure className="popup__figure">
        <button
          className="popup__close-button"
          aria-label="Закрыть"
          type="button"
          onClick={props.onClose}
        />
        <img
          className="popup__image"
          src={props.card?.src}
          alt={props.card?.title}
        />
        <figcaption className="popup__figcaption">
          {props.card?.title}
        </figcaption>
      </figure>
    </div>
  );
  
}

export default ImagePopup;
