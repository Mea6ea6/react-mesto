function ImagePopup() {

    return (
      <>
        <div className="popup popup_card" id="popup-card">
            <figure className="popup__figure">
                <button className="popup__close-button" aria-label="Закрыть" type="button"></button>
                <img className="popup__image" alt="будущая картинка" />
                <figcaption className="popup__figcaption"></figcaption>
            </figure>
        </div>
      </>
    )
  }
  
  export default ImagePopup;