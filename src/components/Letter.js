import React from "react";
import "../css/Letter.css";

const Letter = (props) => {
  return (
    <div className={props.isOpen ? "card-in" : "card-out"}>
      {props.children}
    </div>
  );
};
export default Letter;
