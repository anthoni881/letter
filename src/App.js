import "./css/App.css";
import Img from "./images/download.jpeg";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <div className="title">Surat untuk Untung ...</div>
      <div className="letter-wrapper">
        <PersonCard
          name="Anthoni Setiawan"
          extras={`"Dibaca ya ka suratnya heuheuheuheuheuh"`}
          img={Img}
        ></PersonCard>
        <PersonCard
          name="Anthoni Setiawan"
          extras={`"Dibaca ya ka suratnya heuheuheuheuheuh"`}
          img={Img}
        ></PersonCard>
        <PersonCard
          name="Anthoni Setiawan"
          extras={`"Dibaca ya ka suratnya heuheuheuheuheuh"`}
          img={Img}
        ></PersonCard>
        <PersonCard
          name="Anthoni Setiawan"
          extras={`"Dibaca ya ka suratnya heuheuheuheuheuh"`}
          img={Img}
        ></PersonCard>
      </div>
    </div>
  );
}

export default App;
