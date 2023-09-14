function PopupWithForm(props) {

    return (
      <>
        <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} id={`${props.name}`}>
            <div className="popup__container">
                <button className="popup__close-button" aria-label="Закрыть" type="button" onClick={props.onClose}></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__form popup__form_${props.name}`} method="get" name={props.name} noValidate>
                    {props.children}
                </form>
            </div>
        </div>
      </>
    )
  }
  
  export default PopupWithForm;