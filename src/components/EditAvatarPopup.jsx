import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

  const avatarRef = useRef(null);

  useEffect(() => { 
    avatarRef.current.value = "" 
  });

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }
  
  return (
    <PopupWithForm
      name="redact-avatar"
      title="Обновить аватар"
      btnText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_avatar"
          id="avatar"
          name="avatar"
          placeholder="Ссылка на картинку"
          type="url"
          required
          ref={avatarRef}
        />
        <span className="popup__error" id="avatar-error"></span>
      </label>
    </PopupWithForm>
  );
  
}

export default EditAvatarPopup;
