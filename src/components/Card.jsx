function Card(props) {
    function handleClick() {
      const card = {src: props.src, title: props.title}
      props.onCardClick(card);
    } 
    return (
      <>
        <article className="element">
          <button className="element__delete" aria-label="Удалить"></button>
          <img className="element__image" src={props.src} alt={props.title} onClick={handleClick}/>
          <div className="element__additionally">
            <h2 className="element__denomination">{props.title}</h2>
            <div className="element__evaluations">
              <button className="element__like" aria-label="Лайк" type="button"></button>
              <p className="element__counter">{props.like}</p>
            </div>
          </div>
        </article>
      </>
    )
  }
  
  export default Card;