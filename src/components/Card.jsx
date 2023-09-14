function Card() {

    function handleOpenCardClick() {
        document.querySelector('.popup_card').classList.add('popup_opened');
    };
    function handleDeleteCardClick() {
        document.querySelector('.popup_confirm').classList.add('popup_opened');
    };

    return (
      <>
        <article className="element">
          <button className="element__delete" aria-label="Удалить" onClick={handleDeleteCardClick}></button>
          <img className="element__image" onClick={handleOpenCardClick} />
          <div className="element__additionally">
            <h2 className="element__denomination"></h2>
            <div className="element__evaluations">
              <button className="element__like" aria-label="Лайк" type="button"></button>
              <p className="element__counter">0</p>
            </div>
          </div>
        </article>
      </>
    )
  }
  
  export default Card;
  