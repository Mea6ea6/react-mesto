import { useState } from "react";
import { useEffect } from "react";
import { Api } from "../utils/api.js";
import { apiConfig } from '../utils/constants';
const api = new Api(apiConfig);

function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    useEffect(() => {
        api.getAllInfo()
            .then((data) => {
                const [userData, cardsData] = data
                setUserName(userData.name)
                setUserDescription(userData.about)
                setUserAvatar(userData.avatar)
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
                <article className="element">
                    <button className="element__delete" aria-label="Удалить"></button>
                    <img className="element__image" />
                    <div className="element__additionally">
                        <h2 className="element__denomination"></h2>
                        <div className="element__evaluations">
                        <button className="element__like" aria-label="Лайк" type="button"></button>
                        <p className="element__counter">0</p>
                        </div>
                    </div>
                </article>
            </section>

        </main>
    </>
    )
}

export default Main;