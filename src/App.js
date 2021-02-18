import "./css/App.css";
import Letter from "./components/Letter";
import Img from "./images/download.jpeg";

function App() {
  return (
    <div className="App">
      <div className="title">Surat untuk Untung ...</div>
      <div className="letter-wrapper">
        <Letter
          name="Anthoni Setiawan"
          extras={`"Dibaca ya ka suratnya heuheuheuheuheuh"`}
          img={Img}
        />
        <Letter
          name="Anthoni Setiawan"
          extras={`"Dibaca ya ka suratnya heuheuheuheuheuh"`}
          img={Img}
        />
        <Letter
          name="Anthoni Setiawan"
          extras={`"Dibaca ya ka suratnya heuheuheuheuheuh"`}
          img={Img}
        />
        <Letter
          name="Anthoni Setiawan"
          extras={`"Dibaca ya ka suratnya heuheuheuheuheuh"`}
          img={Img}
        />
        <Letter
          name="Anthoni Setiawan"
          extras={`"Dibaca ya ka suratnya heuheuheuheuheuh"`}
          img={Img}
        />
      </div>
    </div>
  );
}

export default App;
