import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };
  function handleCardClick(card) {
    setSelectedCard(card)
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
      
      <PopupWithForm
        name="redact"
        title="Редактировать профиль"
        btnText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_name"
            id="name"
            minLength="2"
            maxLength="40"
            type="text"
            name="profile"
            placeholder="Введите имя"
            autoComplete="off"
            required
          />
          <span className="popup__error" id="profile-error"></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_info"
            id="info"
            minLength="2"
            maxLength="200"
            type="text"
            name="info"
            placeholder="Введите описание"
            autoComplete="off"
            required
          />
          <span className="popup__error" id="info-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        btnText="Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_named"
            id="named"
            minLength="2"
            maxLength="30"
            type="text"
            name="name"
            placeholder="Название"
            autoComplete="off"
            required
          />
          <span className="popup__error" id="name-error"></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_link"
            id="link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error" id="link-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="redact-avatar"
        title="Обновить аватар"
        btnText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_avatar"
            id="avatar"
            type="url"
            name="avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error" id="avatar-error"></span>
        </label>
      </PopupWithForm>

      {/* <div className="popup popup_confirm" id="confirm">
                <div className="popup__container">
                    <button className="popup__close-button" aria-label="Закрыть" type="button"></button>
                    <h2 className="popup__title">Вы уверены?</h2>
                    <form className="popup__form" method="get" name="confirm" noValidate>
                        <button className="popup__submit-button popup__submit-button_delete-card" aria-label="Сохранить" type="submit">Да</button>
                    </form>
                </div>
            </div> */}
    </>
  );
}

export default App;
