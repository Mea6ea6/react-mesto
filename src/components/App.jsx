// imports ↓
import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import api from "../utils/api";
import * as auth from "../utils/auth";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ProtectedRouteElement from "./ProtectedRoute";
import Footer from "./Footer";
import Register from "./Register";
import Login from "./Login";
import InfoToolTip from "./InfoToolTip";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import CardDeletePopup from "./CardDeletePopup";

function App() {
// constants ↓
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardToDelete, setSelectedCardToDelete] = useState(null);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isPopupWithDeleteOpen, setIsPopupWithDeleteOpen] = useState(false);
  const [isPopupInfoToolTipOpen, setIsPopupInfoToolTipOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

// api ↓
  useEffect(() => {
    Promise.all([api.getUserData(), api.getCardData()])
      .then(([userData, cardData]) => {
        setCurrentUser(userData);
        setCards(cardData);
      })
      .catch((err) => console.log(err));
  }, []);

// functions ↓

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleDeleteCardConfirm(card) {
    setIsPopupWithDeleteOpen(true);
    setSelectedCardToDelete(card);
  }
  function closeAllPopups() {
    setSelectedCard(null);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsPopupWithDeleteOpen(false);
    setIsPopupInfoToolTipOpen(false);
  }
  
  function handleCardLike(card) {
    const isLiked = card.likes?.some((i) => i?._id === currentUser?._id);
    api
      .changeCardLikeStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((item) => item._id !== card._id));
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }
  function handleUpdateUser(info) {
    api
      .setUserInfo(info.name, info.about)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }
  function handleUpdateAvatar(link) {
    api
      .setUserAvatar(link)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }
  function handleAddPlaceSubmit(data) {
    api
      .addCard(data.title, data.link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }
  function handleRegisterSubmit(email, password) {
    return auth.register(email, password)
      .then(() => {
        setIsPopupInfoToolTipOpen(true);
        setIsSuccess(true);
        navigate("/signin", {replace: true});
      })
      .catch((err) => {
        setIsPopupInfoToolTipOpen(true);
        setIsSuccess(false);
        console.log(err)
      });
  }
  // function handleLoginSubmit(email, password) {
  //   return auth.authorize(email, password)
  //     .then(data => {
  //       if (!res) throw new Error('Error')
  //       if (res.jwt) {
  //         localStorage.setItem('jwt', data.jwt);
  //         setIsUserLoggedIn(true);
  //         setEmail(email);
  //         navigate("/main", {replace: true});
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });
  // }

// return ↓
  return (
    <CurrentUserContext.Provider value={currentUser}>

      <Routes>
        <Route
          path="/main"
          element={
            <ProtectedRouteElement
              element={
                <Main
                email={email}
                  cards={cards}
                  onCardClick={handleCardClick}
                  onEditProfile={handleEditProfileClick}
                  onEditAvatar={handleEditAvatarClick}
                  onAddPlace={handleAddPlaceClick}
                  onCardLike={handleCardLike}
                  onCardDelete={handleDeleteCardConfirm}
                />
              }
              loggedIn={isUserLoggedIn}
            />
          }
        />
        <Route path="/signup" element={<Register onRegister={handleRegisterSubmit} />} />
        <Route path="/signin" element={<Login />} />
      </Routes>

      {isUserLoggedIn && <Footer />}

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />

      <CardDeletePopup
        isOpen={isPopupWithDeleteOpen}
        onclose={closeAllPopups}
        onDeleteCard={handleCardDelete}
        card={selectedCardToDelete}
      />

      <InfoToolTip 
          isOpen={isPopupInfoToolTipOpen}
          onClose={closeAllPopups}
          isSuccess={isSuccess}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
