import PopupWithForm from "./PopupWithForm";

function CardDeletePopup(props) {

  return (
    <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        btnText="Да"
        isOpen={props.isOpen}
        onClose={props.onClose}
        >
    </PopupWithForm>
  );
  
}

export default CardDeletePopup;
