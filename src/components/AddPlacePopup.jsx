import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

  const titleRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => { 
    titleRef.current.value = "",
    linkRef.current.value = ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      title: titleRef.current.value,
      link: linkRef.current.value
    });
  }
  
  return (
    <PopupWithForm
        name="add"
        title="Новое место"
        btnText="Сохранить"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
    >
        <label className="popup__field">
        <input
            className="popup__input"
            id="named"
            name="name"
            placeholder="Название"
            type="text"
            autoComplete="off"
            minLength="2"
            maxLength="30"
            required
            ref={titleRef}
        />
        <span className="popup__error" id="name-error"></span>
        </label>
        <label className="popup__field">
        <input
            className="popup__input"
            id="link"
            name="link"
            placeholder="Ссылка на картинку"
            type="url"
            required
            ref={linkRef}
        />
        <span className="popup__error" id="link-error"></span>
        </label>
    </PopupWithForm>
  );
  
}

export default AddPlacePopup;
