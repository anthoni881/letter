import "../css/Letter.css";
import LetterIcon from "../images/Love-letter.png";
const Letter = (props) => {
  return (
    <div className="container-letter">
      <img className="avatar" src={props.img} />
      <div className="name">{props.name}</div>
      <div className="extras">{props.extras}</div>
      <img className="letter-icon" src={LetterIcon} />
    </div>
  );
};
export default Letter;
