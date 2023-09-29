import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "./CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {

  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
        name="redact"
        title="Редактировать профиль"
        btnText="Сохранить"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
      >
      <label className="popup__field">
        <input
          className="popup__input"
          id="name"
          name="profile"
          value={name || ""}
          placeholder="Введите имя"
          type="text"
          autoComplete="off"
          minLength="2"
          maxLength="40"
          required
          onChange={handleChangeName}
        />
        <span className="popup__error" id="profile-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input"
          id="info"
          name="info"
          value={description || ""}
          placeholder="Введите описание"
          type="text"
          autoComplete="off"
          minLength="2"
          maxLength="200"
          required
          onChange={handleChangeDescription}
        />
        <span className="popup__error" id="info-error"></span>
      </label>
    </PopupWithForm>
  );
  
}

export default EditProfilePopup;
