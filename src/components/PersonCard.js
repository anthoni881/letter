import React from "react";
import "../css/PersonCard.css";
import Letter from "./Letter";

const PersonCard = (props) => {
  return (
    <div className="container-letter">
      <img className="avatar" src={props.img} alt="person-img" />
      <div className="name">{props.name}</div>
      <div className="extras">{props.extras}</div>
      <Letter></Letter>
    </div>
  );
};

export default PersonCard;
