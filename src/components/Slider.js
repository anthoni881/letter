import React, { useState } from "react";
import PersonCard from "./PersonCard";
import "../css/Slider.css";

const Slider = (items) => {
  const slide = items.items;
  const [index, setIndex] = useState(0);

  const slideRight = () => {
    setIndex((index + 1) % slide.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(slide.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    slide.length > 0 && (
      <div className="slider-container">
        <button onClick={slideLeft} className="slider-button">
          {"<"}
        </button>
        <PersonCard
          name={slide[index].name}
          extras={slide[index].extras}
          img={slide[index].img}
          key={index}
        >
          {slide[index].message}
        </PersonCard>

        <button onClick={slideRight} className="slider-button">
          {">"}
        </button>
      </div>
    )
  );
};

export default Slider;
