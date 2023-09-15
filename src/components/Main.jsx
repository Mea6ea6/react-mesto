import { useState } from "react";
import { useEffect } from "react";
import { Api } from "../utils/api.js";
import { apiConfig } from '../utils/constants';
import Card from "./Card.jsx";
const api = new Api(apiConfig);

function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserData()
            .then((data) => {
                const userData = data
                setUserName(userData.name)
                setUserDescription(userData.about)
                setUserAvatar(userData.avatar)
            })
            .catch(err => console.log(err))
        api.getCardData()
            .then((res) => {
                setCards(res)
            })
            .catch(err => console.log(err))
    }, [])
    
    return (
    <>
        <main className="content">

            <section className="profile">
                <div className="profile__overlay" aria-label="Редактировать" type="button" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src={userAvatar} alt="аватар" />
                </div>
                <div className="profile__info">
                    <div className="profile__name-wrapp">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button" aria-label="Редактировать" type="button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button className="profile__add-button" aria-label="Новое место" type="button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {cards.map((card) => (
                    <Card
                        key={card._id}
                        src={card.link}
                        title={card.name}
                        like={card.likes.length}
                        onCardClick={props.onCardClick}
                    />
                ))}
            </section>

        </main>
    </>
    )
}

export default Main;