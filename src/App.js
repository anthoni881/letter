import "./css/App.css";
import Img from "./images/download.jpeg";
import Michael from "./images/michael.jpg";
import Jon from "./images/jon.jpeg";
import Slider from "./components/Slider";

function App() {
  const people = [
    {
      name: "Anthoni Setiawan",
      extras: "Mohon dibacahh",
      img: Michael,
      message: "Test, jadi gini nah gini begini sihh iya begini deh niceee",
    },
    {
      name: "Anthoni Setiatwo",
      extras: "Mohon dibacccccaayyy",
      img: Jon,
      message: "Kenapa sih animationnya susah",
    },
    {
      name: "Anthoni Setiathree",
      extras: "Mohon dibacacccccchhhh",
      img: Michael,
      message: "Guys w nyerah",
    },
    {
      name: "Anthoni Setiafour",
      extras: "Gaboleh dibacaa",
      img: Img,
      message:
        "Jelek bgt keselll, gimana ya caranya biar amplopnya kebuka gitu",
    },
    {
      name: "Anthoni Setiafive",
      extras: "Baca ga ya",
      img: Jon,
      message: "Guys help, tazzhaa master css help ini gimana nih",
    },
  ];

  return (
    <div className="App">
      <div className="title">Surat untuk Untung</div>
      <div className="letter-wrapper">
        <Slider items={people}></Slider>
      </div>
    </div>
  );
}

export default App;
