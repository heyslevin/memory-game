import "./App.css";
import apache from "./img/apache.jpg";
import barril from "./img/barril.jpg";
import camaron from "./img/camaron.jpg";
import corazon from "./img/corazon.jpg";
import diablo from "./img/diablo.jpg";
import jaras from "./img/jaras.jpg";
import luna from "./img/luna.jpg";
import melon from "./img/melon.jpg";
import sirena from "./img/sirena.jpg";
import soldado from "./img/soldado.jpg";
import valiente from "./img/valiente.jpg";
import venado from "./img/venado.jpg";

function App() {
  return (
    <div className="App">
      <div className="small-container">
        <div className="flex-row">
          <div className="flex-small half">
            <h1 className="no-margin-top">Memory Game</h1>
            <p className="gray-text">
              The cards get shuffled every time they are clicked. You CAN NOT
              click on any card more than once or else your score resets to
              zero.{" "}
            </p>
          </div>
          <div className="flex-small one-fourth">
            <p className="no-margin-bottom">High Score</p>
            <h2 className="no-top gray-text">0</h2>
          </div>
          <div className="flex-small one-fourth">
            <p className="no-margin-bottom">Current Score:</p>
            <h2 className="no-top">1</h2>
          </div>
        </div>
        <hr />

        <div className="flex-row">
          <div className="flex-small one-fourth card red">
            <img src={valiente} alt="" className="responsive-image" />
          </div>
          <div className="flex-small one-fourth card blue">
            <img src={sirena} alt="" className="responsive-image" />
          </div>
          <div className="flex-small one-fourth card red">
            <img src={apache} alt="" className="responsive-image" />
          </div>
          <div className="flex-small one-fourth card blue">
            <img src={corazon} alt="" className="responsive-image" />
          </div>
        </div>

        <div className="flex-row">
          <div className="flex-small one-fourth card red">
            <img src={soldado} alt="" className="responsive-image" />
          </div>
          <div className="flex-small one-fourth card blue">
            <img src={luna} alt="" className="responsive-image" />
          </div>
          <div className="flex-small one-fourth card red">
            <img src={diablo} alt="" className="responsive-image" />
          </div>
          <div className="flex-small one-fourth card blue">
            <img src={barril} alt="" className="responsive-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
