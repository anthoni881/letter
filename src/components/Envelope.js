import React, { useState } from "react";
import "../css/Envelope.css";
import Letter from "./Letter";

const Envelope = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="envelope">
        <div className="heart" onClick={() => setOpen(!open)}></div>
      </div>
      {/* {open && <Letter isOpen={open}></Letter>} */}
      <Letter isOpen={open}>{props.children} </Letter>
    </div>
  );
};
export default Envelope;
