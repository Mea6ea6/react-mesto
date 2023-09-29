function PopupWithForm(props) {
  
  return (
    <div
      className={`popup popup_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
      id={`${props.name}`}
    >
      <div className="popup__container">
        <button
          className="popup__close-button"
          aria-label="Закрыть"
          type="button"
          onClick={props.onClose}
        />
        <h2 className="popup__title">{props.title}</h2>
        <form
          className={`popup__form popup__form_${props.name}`}
          method="get"
          name={props.name}
          noValidate
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button
            className="popup__submit-button"
            aria-label={props.btnText}
            type="submit"
          >
            {props.btnText}
          </button>
        </form>
      </div>
    </div>
  );

}

export default PopupWithForm;
