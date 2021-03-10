import React from "react";
import "../css/PersonCard.css";
import Envelope from "./Envelope";

const PersonCard = (props) => {
  return (
    <div className="card-container">
      <img className="avatar" src={props.img} alt="person-img" />
      <div className="name">{props.name}</div>
      <div className="extras">"{props.extras}"</div>
      <Envelope>{props.children} </Envelope>
    </div>
  );
};

export default PersonCard;
